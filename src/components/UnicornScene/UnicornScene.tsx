import React, {useCallback, useEffect, useRef, useState} from 'react';

import UnicornSceneLib from 'unicornstudio-react';
import type {UnicornSceneProps} from 'unicornstudio-react';

export const UNICORN_STUDIO_SDK_URL =
    'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.2.0/dist/unicornStudio.umd.js';

interface UnicornStudioScene {
    paused?: boolean;
}

const UnicornScene = (props: UnicornSceneProps & {play?: boolean}) => {
    const {sdkUrl = UNICORN_STUDIO_SDK_URL, play = true, ...rest} = props;
    const [inView, setInView] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const sceneRef = useRef<UnicornStudioScene | null>(null);

    const syncPausedState = useCallback(() => {
        if (sceneRef.current) {
            sceneRef.current.paused = !play || !inView;
        }
    }, [play, inView]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setInView(entry.isIntersecting);
            },
            {threshold: 0},
        );

        const currentContainer = containerRef.current;

        if (currentContainer) {
            observer.observe(currentContainer);
        }

        return () => {
            if (currentContainer) {
                observer.unobserve(currentContainer);
            }
        };
    }, []);

    useEffect(() => {
        syncPausedState();

        const timer = setTimeout(syncPausedState, 100);
        return () => clearTimeout(timer);
    }, [syncPausedState]);

    const handleLoad = () => {
        syncPausedState();
        if (rest.onLoad) {
            rest.onLoad();
        }
    };

    return (
        <div ref={containerRef} style={{width: '100%', height: '100%'}}>
            <UnicornSceneLib
                {...rest}
                sdkUrl={sdkUrl}
                paused={!play || !inView}
                lazyLoad={false}
                sceneRef={sceneRef as unknown as UnicornSceneProps['sceneRef']}
                onLoad={handleLoad}
            />
        </div>
    );
};

export type {UnicornSceneProps};
export default UnicornScene;
