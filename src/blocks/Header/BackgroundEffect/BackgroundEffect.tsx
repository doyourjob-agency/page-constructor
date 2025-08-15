import React, {useEffect, useRef} from 'react';

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
};

export const BackgroundEffect = ({firstSrc, secondSrc}: BackgroundEffectProps) => {
    const master = useRef<HTMLVideoElement>(null);
    const driven = useRef<HTMLVideoElement>(null);

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

    if (!firstSrc || !secondSrc) {
        return null;
    }

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
            <div className={b('right')}>
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
