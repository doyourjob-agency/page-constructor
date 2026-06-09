import {useCallback, useEffect, useRef, useState} from 'react';

type BackgroundMode = 'checking' | 'animation' | 'fallback-fading' | 'fallback' | 'paused';

type NavigatorWithPerformanceSignals = Navigator & {
    connection?: {
        effectiveType?: string;
        saveData?: boolean;
    };
    deviceMemory?: number;
};

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';
const LOW_DEVICE_MEMORY_GB = 4;
const LOW_HARDWARE_CONCURRENCY = 4;
const SLOW_EFFECTIVE_TYPES = new Set(['slow-2g', '2g']);
const FRAME_WARMUP_COUNT = 5;
const SLOW_FRAME_MS = 50;
const SLOW_FRAME_LIMIT = 8;
const LONG_TASK_MS = 100;
const LONG_TASK_LIMIT = 2;
const FALLBACK_FADE_TIMEOUT_MS = 500;

function prefersStaticBackground() {
    if (typeof window === 'undefined') {
        return false;
    }

    const navigatorWithSignals = navigator as NavigatorWithPerformanceSignals;
    const connection = navigatorWithSignals.connection;

    return (
        window.matchMedia?.(REDUCED_MOTION_QUERY).matches ||
        connection?.saveData === true ||
        (connection?.effectiveType ? SLOW_EFFECTIVE_TYPES.has(connection.effectiveType) : false) ||
        (navigatorWithSignals.deviceMemory
            ? navigatorWithSignals.deviceMemory <= LOW_DEVICE_MEMORY_GB
            : false) ||
        (navigator.hardwareConcurrency
            ? navigator.hardwareConcurrency <= LOW_HARDWARE_CONCURRENCY
            : false)
    );
}

function supportsLongTaskObserver() {
    return (
        typeof PerformanceObserver !== 'undefined' &&
        PerformanceObserver.supportedEntryTypes?.includes('longtask')
    );
}

function isFallbackShortcut(event: KeyboardEvent) {
    return (
        event.altKey && event.shiftKey && (event.code === 'KeyU' || event.key.toLowerCase() === 'u')
    );
}

export function useAdaptiveUnicornBackground({
    enabled,
    fallbackAvailable,
}: {
    enabled: boolean;
    fallbackAvailable: boolean;
}) {
    const backgroundRef = useRef<HTMLDivElement>(null);
    const [mode, setMode] = useState<BackgroundMode>('checking');
    const [isNearViewport, setIsNearViewport] = useState(false);
    const [fallbackFadeStarted, setFallbackFadeStarted] = useState(false);
    const [fallbackImageLoaded, setFallbackImageLoaded] = useState(false);
    const [sceneLoaded, setSceneLoaded] = useState(false);

    const degradeBackground = useCallback(() => {
        setMode((currentMode) => {
            if (!fallbackAvailable) {
                return 'paused';
            }

            return currentMode === 'animation' && isNearViewport ? 'fallback-fading' : 'fallback';
        });
    }, [fallbackAvailable, isNearViewport]);
    const finishFallbackFade = useCallback(() => {
        setMode((currentMode) => (currentMode === 'fallback-fading' ? 'fallback' : currentMode));
    }, []);
    const handleFallbackImageLoad = useCallback(() => {
        if (mode === 'fallback-fading') {
            setFallbackImageLoaded(true);
        }
    }, [mode]);
    const handleSceneLoad = useCallback(() => {
        setSceneLoaded(true);
    }, []);

    useEffect(() => {
        setSceneLoaded(false);
        setIsNearViewport(false);

        if (!enabled) {
            setMode('paused');
            return;
        }

        if (prefersStaticBackground()) {
            setMode(fallbackAvailable ? 'fallback' : 'paused');
            return;
        }

        setMode('animation');
    }, [enabled, fallbackAvailable]);

    useEffect(() => {
        if (!enabled) {
            return undefined;
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (isFallbackShortcut(event)) {
                event.preventDefault();
                degradeBackground();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [degradeBackground, enabled]);

    useEffect(() => {
        if (mode !== 'fallback-fading') {
            setFallbackFadeStarted(false);
            setFallbackImageLoaded(false);
        }

        return undefined;
    }, [mode]);

    useEffect(() => {
        if (mode !== 'fallback-fading' || !fallbackImageLoaded) {
            return undefined;
        }

        if (typeof window === 'undefined' || !window.requestAnimationFrame) {
            setFallbackFadeStarted(true);
            return undefined;
        }

        const frameId = window.requestAnimationFrame(() => setFallbackFadeStarted(true));

        return () => window.cancelAnimationFrame?.(frameId);
    }, [fallbackImageLoaded, mode]);

    useEffect(() => {
        if (mode !== 'fallback-fading' || !fallbackFadeStarted) {
            return undefined;
        }

        const fallbackTimer = setTimeout(finishFallbackFade, FALLBACK_FADE_TIMEOUT_MS);

        return () => clearTimeout(fallbackTimer);
    }, [fallbackFadeStarted, finishFallbackFade, mode]);

    useEffect(() => {
        if (!enabled || mode !== 'animation') {
            return undefined;
        }

        const target = backgroundRef.current;

        if (!target || typeof IntersectionObserver === 'undefined') {
            setIsNearViewport(true);
            return undefined;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsNearViewport(entry.isIntersecting);

                if (!entry.isIntersecting) {
                    setSceneLoaded(false);
                }
            },
            {rootMargin: '300px 0px', threshold: 0},
        );

        observer.observe(target);

        return () => observer.disconnect();
    }, [enabled, mode]);

    useEffect(() => {
        if (
            mode !== 'animation' ||
            !isNearViewport ||
            !sceneLoaded ||
            typeof window === 'undefined' ||
            !window.requestAnimationFrame ||
            !window.cancelAnimationFrame
        ) {
            return undefined;
        }

        let frameId = 0;
        let previousTime: number | undefined;
        let measuredFrames = 0;
        let slowFrames = 0;
        let longTasks = 0;
        let stopped = false;
        let observer: PerformanceObserver | undefined;

        const degradeOnce = () => {
            if (stopped) {
                return;
            }

            stopped = true;
            degradeBackground();
        };

        const tick: FrameRequestCallback = (time) => {
            if (stopped) {
                return;
            }

            if (previousTime !== undefined) {
                measuredFrames += 1;

                if (measuredFrames > FRAME_WARMUP_COUNT && time - previousTime > SLOW_FRAME_MS) {
                    slowFrames += 1;

                    if (slowFrames >= SLOW_FRAME_LIMIT) {
                        degradeOnce();
                        return;
                    }
                }
            }

            previousTime = time;
            frameId = window.requestAnimationFrame(tick);
        };

        frameId = window.requestAnimationFrame(tick);

        if (supportsLongTaskObserver()) {
            observer = new PerformanceObserver((entries) => {
                entries.getEntries().forEach((entry) => {
                    if (entry.duration >= LONG_TASK_MS) {
                        longTasks += 1;
                    }
                });

                if (longTasks >= LONG_TASK_LIMIT) {
                    degradeOnce();
                }
            });

            observer.observe({entryTypes: ['longtask']});
        }

        return () => {
            stopped = true;
            window.cancelAnimationFrame(frameId);
            observer?.disconnect();
        };
    }, [degradeBackground, isNearViewport, mode, sceneLoaded]);

    return {
        backgroundRef,
        handleFallbackImageLoad,
        handleFallbackTransitionEnd: finishFallbackFade,
        handleSceneLoad,
        isFallbackVisible:
            mode === 'fallback' || (mode === 'fallback-fading' && fallbackFadeStarted),
        shouldMountScene: (mode === 'animation' && isNearViewport) || mode === 'fallback-fading',
        shouldPlayScene: (mode === 'animation' && isNearViewport) || mode === 'fallback-fading',
        showFallback: (mode === 'fallback-fading' || mode === 'fallback') && fallbackAvailable,
    };
}
