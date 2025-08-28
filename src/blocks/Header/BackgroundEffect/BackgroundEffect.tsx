import React, {useEffect, useMemo, useRef, useState} from 'react';

import {parseVideoType} from '../../../components/Media/Video/utils';
import {block} from '../../../utils';

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
    const [clip, setClip] = useState('inset(0 0 0 99.99%)'); // по умолчанию невидимо

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

        const handleMove = (e: MouseEvent) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const percent = (x / rect.width) * 100;
            setClip(`inset(0 0 0 ${percent}%)`);
        };

        const handleLeave = () => setClip('inset(0 0 0 99.99%)');

        el.addEventListener('mousemove', handleMove);
        el.addEventListener('mouseleave', handleLeave);

        return () => {
            el.removeEventListener('mousemove', handleMove);
            el.removeEventListener('mouseleave', handleLeave);
        };
    }, [attachRef]);

    const style = useMemo(() => ({clipPath: clip}), [clip]);

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
            <div className={b('right')} style={style}>
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
