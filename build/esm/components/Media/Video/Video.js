import React, { useEffect, useMemo, useRef } from 'react';
import { MediaVideoType } from '../../../models';
import { block, getQaAttrubutes } from '../../../utils';
import { DefaultVideo } from '../../DefaultVideo/DefaultVideo';
import ReactPlayerBlock from '../../ReactPlayer/ReactPlayer';
import './Video.css';
const b = block('media-component-video');
const Video = (props) => {
    const { video, height, analyticsEvents, previewImg, playButton: commonPlayButton, customBarControlsClassName, videoClassName, playVideo, setHasVideoFallback, hasVideoFallback, qa, ratio, } = props;
    const qaAttributes = getQaAttrubutes(qa, 'source');
    const ref = useRef(null);
    useEffect(() => {
        if (ref && ref.current) {
            const { loop } = video;
            if (loop && typeof loop !== 'boolean') {
                const { start = 0, end } = loop;
                ref.current.addEventListener('timeupdate', () => {
                    const videoRef = ref.current;
                    const endTime = end || (videoRef && videoRef.duration);
                    if (videoRef && videoRef.currentTime === endTime) {
                        videoRef.currentTime = start;
                        // videoRef.play().catch(() => setHasVideoFallback(true));
                        videoRef.play();
                    }
                }, { passive: true });
            }
            if (playVideo) {
                // ref.current.play().catch(() => setHasVideoFallback(true));
                ref.current.play();
            }
        }
    }, [playVideo, video, setHasVideoFallback]);
    useEffect(() => {
        const handle = (event) => {
            var _a, _b, _c, _d;
            if (event.persisted) {
                (_b = (_a = ref.current) === null || _a === void 0 ? void 0 : _a.load) === null || _b === void 0 ? void 0 : _b.call(_a);
                if (video.autoplay) {
                    (_d = (_c = ref.current) === null || _c === void 0 ? void 0 : _c.play) === null || _d === void 0 ? void 0 : _d.call(_c);
                }
            }
        };
        window.addEventListener('pageshow', handle);
        return () => {
            window.removeEventListener('pageshow', handle);
        };
    }, [video.autoplay]);
    const reactPlayerBlock = useMemo(() => {
        const { src, loop, controls, muted, autoplay = true, elapsedTime, playButton, ariaLabel, customControlsOptions, contain, } = video;
        return (React.createElement(ReactPlayerBlock, { ref: ref, className: b('react-player', videoClassName), src: src, previewImgUrl: previewImg, loop: Boolean(loop), controls: controls, muted: muted, autoplay: autoplay && playVideo, elapsedTime: elapsedTime, playButton: playButton || commonPlayButton, customBarControlsClassName: customBarControlsClassName, analyticsEvents: analyticsEvents, height: height, ariaLabel: ariaLabel, customControlsOptions: customControlsOptions, ratio: ratio === 'auto' ? undefined : ratio, autoRatio: ratio === 'auto', contain: contain }));
    }, [
        video,
        height,
        videoClassName,
        previewImg,
        playVideo,
        commonPlayButton,
        customBarControlsClassName,
        analyticsEvents,
        ratio,
    ]);
    const defaultVideoBlock = useMemo(() => {
        return video.src.length ? (React.createElement("div", { className: b('wrap', videoClassName), style: { height, display: hasVideoFallback ? 'none' : 'block' }, "data-qa": qaAttributes.default },
            React.createElement(DefaultVideo, { ref: ref, video: video, qa: qaAttributes.source }))) : null;
    }, [
        video,
        hasVideoFallback,
        videoClassName,
        height,
        qaAttributes.default,
        qaAttributes.source,
    ]);
    switch (video.type) {
        case MediaVideoType.Player:
            return reactPlayerBlock;
        case MediaVideoType.Default:
        default:
            return defaultVideoBlock;
    }
};
export default Video;
