// Audio.tsx — все исправления помечены комментарием // FIX
import React, {PropsWithChildren, useCallback, useEffect, useMemo, useRef, useState} from 'react';

import {AudioBlockProps} from '../../models';
import {block} from '../../utils/cn';

import './Audio.scss';

const b = block('audio-block');

function formatTime(seconds: number): string {
    if (!isFinite(seconds) || isNaN(seconds)) return '0:00';
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
}

export const Audio = ({url}: PropsWithChildren<AudioBlockProps>) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);
    const volumeSliderRef = useRef<HTMLInputElement>(null); // FIX: нужен ref для --volume-pct

    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);
    const [isDragging, setIsDragging] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // FIX: сброс состояния при смене url
    useEffect(() => {
        setIsLoading(true);
        setCurrentTime(0);
        setDuration(0);
        setIsPlaying(false);
    }, [url]);

    // FIX: обновление CSS-переменной --volume-pct для градиента слайдера
    useEffect(() => {
        const el = volumeSliderRef.current;
        if (!el) return;
        const pct = isMuted ? 0 : volume * 100;
        el.style.setProperty('--volume-pct', `${pct}%`);
    }, [volume, isMuted]);

    const togglePlay = useCallback(() => {
        const audio = audioRef.current;
        if (!audio) return;
        if (isPlaying) {
            audio.pause();
        } else {
            // FIX: обрабатываем Promise от audio.play()
            audio.play().catch(() => {
                // autoplay заблокирован браузером — просто игнорируем
            });
        }
    }, [isPlaying]);

    const toggleMute = useCallback(() => {
        const audio = audioRef.current;
        if (!audio) return;
        audio.muted = !isMuted;
        setIsMuted(!isMuted);
    }, [isMuted]);

    const handleVolumeChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const audio = audioRef.current;
        if (!audio) return;
        const val = parseFloat(e.target.value);
        audio.volume = val;
        setVolume(val);
        setIsMuted(val === 0);
    }, []);

    const seekTo = useCallback(
        (clientX: number) => {
            const audio = audioRef.current;
            const bar = progressRef.current;
            if (!audio || !bar || !duration) return;
            const rect = bar.getBoundingClientRect();
            const ratio = Math.min(Math.max((clientX - rect.left) / rect.width, 0), 1);
            audio.currentTime = ratio * duration;
            setCurrentTime(ratio * duration);
        },
        [duration],
    );

    // FIX: убираем handleProgressClick — onMouseDown уже покрывает одиночный клик,
    // двойной вызов seekTo при клике был багом (onClick + onMouseDown оба срабатывали).

    const handleProgressMouseDown = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            setIsDragging(true);
            seekTo(e.clientX);
        },
        [seekTo],
    );

    // FIX: keyboard-навигация для role="slider"
    const handleProgressKeyDown = useCallback(
        (e: React.KeyboardEvent<HTMLDivElement>) => {
            const audio = audioRef.current;
            if (!audio || !duration) return;
            const STEP = 5; // секунд
            if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
                e.preventDefault();
                const next = Math.min(audio.currentTime + STEP, duration);
                audio.currentTime = next;
                setCurrentTime(next);
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
                e.preventDefault();
                const next = Math.max(audio.currentTime - STEP, 0);
                audio.currentTime = next;
                setCurrentTime(next);
            } else if (e.key === 'Home') {
                e.preventDefault();
                audio.currentTime = 0;
                setCurrentTime(0);
            } else if (e.key === 'End') {
                e.preventDefault();
                audio.currentTime = duration;
                setCurrentTime(duration);
            }
        },
        [duration],
    );

    useEffect(() => {
        if (!isDragging) return;
        const onMove = (e: MouseEvent) => seekTo(e.clientX);
        const onUp = () => setIsDragging(false);
        window.addEventListener('mousemove', onMove);
        window.addEventListener('mouseup', onUp);
        // eslint-disable-next-line consistent-return
        return () => {
            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('mouseup', onUp);
        };
    }, [isDragging, seekTo]);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const onPlay = () => setIsPlaying(true);
        const onPause = () => setIsPlaying(false);
        const onEnded = () => setIsPlaying(false);
        // FIX: игнорируем timeupdate во время drag — seekTo уже ставит точное значение,
        // а timeupdate с задержкой вызывал "прыжок" ползунка назад
        const onTimeUpdate = () => {
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            if (!isDraggingRef.current) {
                setCurrentTime(audio.currentTime);
            }
        };
        const onDurationChange = () => setDuration(audio.duration);
        const onCanPlay = () => setIsLoading(false);
        const onWaiting = () => setIsLoading(true);

        audio.addEventListener('play', onPlay);
        audio.addEventListener('pause', onPause);
        audio.addEventListener('ended', onEnded);
        audio.addEventListener('timeupdate', onTimeUpdate);
        audio.addEventListener('durationchange', onDurationChange);
        audio.addEventListener('canplay', onCanPlay);
        audio.addEventListener('waiting', onWaiting);

        // eslint-disable-next-line consistent-return
        return () => {
            audio.removeEventListener('play', onPlay);
            audio.removeEventListener('pause', onPause);
            audio.removeEventListener('ended', onEnded);
            audio.removeEventListener('timeupdate', onTimeUpdate);
            audio.removeEventListener('durationchange', onDurationChange);
            audio.removeEventListener('canplay', onCanPlay);
            audio.removeEventListener('waiting', onWaiting);
        };
    }, []);

    // FIX: ref-копия isDragging для замыкания в timeupdate (без перепривязки слушателей)
    const isDraggingRef = useRef(false);
    useEffect(() => {
        isDraggingRef.current = isDragging;
    }, [isDragging]);

    const progress = duration ? (currentTime / duration) * 100 : 0;

    const volumeIcon = useMemo(() => {
        if (isMuted || volume === 0) {
            return 'M18.5 12a8.46 8.46 0 0 0-2.08-5.58l1.1-1.1A10 10 0 0 1 20.5 12a10 10 0 0 1-2.98 7.08l-1.1-1.1A8.46 8.46 0 0 0 18.5 12zM3 9h4l5-5v16l-5-5H3V9zm13.46 3-2.3-2.3 1.07-1.07L17.54 11H20v2h-2.46l-2.31 2.31-1.07-1.07L16.46 12z';
        }
        if (volume < 0.5) {
            return 'M18.5 12a8.46 8.46 0 0 0-2.08-5.58l1.1-1.1A10 10 0 0 1 20.5 12a10 10 0 0 1-2.98 7.08l-1.1-1.1A8.46 8.46 0 0 0 18.5 12zM3 9h4l5-5v16l-5-5H3V9zm11.47.53 1.06-1.06A6 6 0 0 1 18 12a6 6 0 0 1-2.47 4.87l-1.06-1.06A4.5 4.5 0 0 0 16.5 12a4.5 4.5 0 0 0-2.03-3.47z';
        }
        return 'M3 9h4l5-5v16l-5-5H3V9zm13.5 3a4.5 4.5 0 0 0-2.5-4v8a4.5 4.5 0 0 0 2.5-4zm-2.5-7a7 7 0 0 1 0 14V14a5 5 0 0 0 0-10V5z';
    }, [isMuted, volume]);

    return (
        <div className={b()}>
            {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
            <audio ref={audioRef} src={url} preload="auto" />

            <button
                className={b('play-btn', {loading: isLoading})}
                onClick={togglePlay}
                aria-label={isPlaying ? 'Pause' : 'Play'}
                type="button"
            >
                {isLoading && <span className={b('spinner')} />}
                {!isLoading &&
                    (isPlaying ? (
                        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                        </svg>
                    ) : (
                        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    ))}
            </button>

            <div className={b('timeline')}>
                <div
                    ref={progressRef}
                    className={b('progress-bar')}
                    // FIX: убран onClick — onMouseDown уже обрабатывает клик без дублирования
                    onMouseDown={handleProgressMouseDown}
                    onKeyDown={handleProgressKeyDown} // FIX: keyboard seek
                    role="slider"
                    aria-label="Seek"
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={Math.round(progress)}
                    tabIndex={0}
                >
                    <div className={b('progress-track')}>
                        <div className={b('progress-fill')} style={{width: `${progress}%`}}>
                            <div className={b('progress-thumb')} />
                        </div>
                    </div>
                </div>

                <div className={b('time')}>
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                </div>
            </div>

            <div className={b('volume')}>
                <button
                    className={b('mute-btn')}
                    onClick={toggleMute}
                    aria-label={isMuted ? 'Unmute' : 'Mute'}
                    type="button"
                >
                    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                        <path d={volumeIcon} />
                    </svg>
                </button>
                <input
                    ref={volumeSliderRef} // FIX: ref для обновления --volume-pct
                    className={b('volume-slider')}
                    type="range"
                    min={0}
                    max={1}
                    step={0.02}
                    value={isMuted ? 0 : volume}
                    onChange={handleVolumeChange}
                    aria-label="Volume"
                />
            </div>
        </div>
    );
};

export default Audio;
