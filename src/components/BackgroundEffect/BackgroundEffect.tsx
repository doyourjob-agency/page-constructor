import React, {useEffect, useRef} from 'react';

import {block} from '../../utils';
import {parseVideoType} from '../Media/Video/utils';

import './BackgroundEffect.scss';

const b = block('background-effect');

const SYNC_THRESHOLD = 0.03;
const MAX_DESYNC = 0.5;
const FAST_RATE = 1.05;
const SLOW_RATE = 0.95;

type BackgroundEffectProps = {
    firstSrc: string;
    secondSrc: string;
    attachRef: React.RefObject<HTMLElement>;
};

export const BackgroundEffect = ({firstSrc, secondSrc, attachRef}: BackgroundEffectProps) => {
    const master = useRef<HTMLVideoElement>(null);
    const driven = useRef<HTMLVideoElement>(null);
    const drivenWrap = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const m = master.current;
        const d = driven.current;
        let rafId: number;
        if (m && d) {
            const syncMaster: VideoFrameRequestCallback = () => {
                if (m.paused) {
                    m.play().catch(() => {});
                }
                const delta = m.currentTime - d.currentTime;
                if (d.paused) {
                    d.play().catch(() => {});
                }
                if (Math.abs(delta) > MAX_DESYNC) {
                    d.currentTime = m.currentTime;
                    d.playbackRate = 1;
                } else if (Math.abs(delta) > SYNC_THRESHOLD) {
                    d.playbackRate = delta > 0 ? FAST_RATE : SLOW_RATE;
                } else {
                    d.playbackRate = 1;
                }
                rafId = m.requestVideoFrameCallback(syncMaster);
            };

            rafId = m.requestVideoFrameCallback(syncMaster);
        }
        const handleVisibility = () => {
            if (!document.hidden && m && d) {
                m.play().catch(() => {});
                d.play().catch(() => {});
            }
        };
        document.addEventListener('visibilitychange', handleVisibility);
        return () => {
            document.removeEventListener('visibilitychange', handleVisibility);
            if (rafId && m) {
                m.cancelVideoFrameCallback?.(rafId);
            }
        };
    }, []);

    useEffect(() => {
        const el = attachRef.current;
        if (!el) return () => {};

        const wrap = drivenWrap.current;
        if (!wrap) return () => {};

        let target = 99.99;
        let current = 99.99;
        let locked = false;
        let rafId: number | null = null;

        const setClip = (value: number) => {
            if (!wrap) return;
            wrap.style.setProperty('clip-path', `inset(0 0 0 ${value}%)`);
        };

        const update = () => {
            if (!wrap) return;

            const diff = target - current;

            if (Math.abs(diff) < 0.1) {
                current = target;
                setClip(current);
                locked = true;
                rafId = null;
                return;
            }

            if (!locked) {
                current += diff * 0.05;
                setClip(current);
                rafId = requestAnimationFrame(update);
            }
        };

        const handleEnter = (e: MouseEvent) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            target = (x / rect.width) * 100;

            locked = false;
            if (rafId) cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(update);
        };

        const handleMove = (e: MouseEvent) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            target = (x / rect.width) * 100;

            if (locked) {
                current = target;
                setClip(current);
                return;
            }

            if (!rafId) rafId = requestAnimationFrame(update);
        };

        const handleLeave = () => {
            locked = false;
            target = 99.99;
            setClip(target);
            current = target;

            if (rafId) {
                cancelAnimationFrame(rafId);
                rafId = null;
            }
        };

        el.addEventListener('mouseenter', handleEnter);
        el.addEventListener('mousemove', handleMove);
        el.addEventListener('mouseleave', handleLeave);

        return () => {
            el.removeEventListener('mouseenter', handleEnter);
            el.removeEventListener('mousemove', handleMove);
            el.removeEventListener('mouseleave', handleLeave);
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, [attachRef]);

    if (!firstSrc || !secondSrc) return null;

    return (
        <div className={b()}>
            <div className={b('left')}>
                <video
                    ref={master}
                    disablePictureInPicture
                    playsInline
                    // @ts-ignore
                    // eslint-disable-next-line react/no-unknown-property
                    pip="false"
                    autoPlay
                    loop
                    preload="auto"
                    muted
                    className={b('video')}
                >
                    <source src={firstSrc} type={parseVideoType(firstSrc)} />
                </video>
            </div>
            <div className={b('right')} ref={drivenWrap}>
                <video
                    ref={driven}
                    disablePictureInPicture
                    playsInline
                    // @ts-ignore
                    // eslint-disable-next-line react/no-unknown-property
                    pip="false"
                    autoPlay
                    loop
                    preload="auto"
                    muted
                    className={b('video')}
                >
                    <source src={secondSrc} type={parseVideoType(secondSrc)} />
                </video>
            </div>
        </div>
    );
};

export default BackgroundEffect;
