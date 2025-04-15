import React, { Fragment, useCallback, useImperativeHandle, useRef, useState } from 'react';
import { CustomControlsType, MediaVideoControlsType } from '../../models';
import { block } from '../../utils';
import { getVideoTypesWithPriority } from '../Media/Video/utils';
import CustomBarControls from '../ReactPlayer/CustomBarControls';
import './DefaultVideo.css';
const b = block('default-video');
export const DefaultVideo = React.forwardRef((props, ref) => {
    const { video, qa, customBarControlsClassName } = props;
    const { controls, customControlsOptions, muted: initiallyMuted = true } = video;
    const { muteButtonShown, positioning, type: customControlsType, } = customControlsOptions || {};
    const [isPaused, setIsPaused] = useState(false);
    const [isMuted, setIsMuted] = useState(initiallyMuted);
    const videoRef = useRef(null);
    // one may not use this hook and work with `ref` variable only, but
    // in this case one should support both function type and object type,
    // according to ForwardedRef type.
    // Currently used way with extra ref and useImperativeHandle is more
    // convenient and allows us to work with object typed ref only,
    // avoiding typeof ref === 'function' statements
    useImperativeHandle(ref, () => {
        if (!(videoRef === null || videoRef === void 0 ? void 0 : videoRef.current)) {
            return undefined;
        }
        return videoRef.current;
    }, [videoRef]);
    const onPlayToggle = useCallback(() => {
        setIsPaused((value) => {
            var _a, _b;
            if (value) {
                (_a = videoRef === null || videoRef === void 0 ? void 0 : videoRef.current) === null || _a === void 0 ? void 0 : _a.play();
            }
            else {
                (_b = videoRef === null || videoRef === void 0 ? void 0 : videoRef.current) === null || _b === void 0 ? void 0 : _b.pause();
            }
            return !value;
        });
    }, [videoRef]);
    const onMuteToggle = useCallback(() => {
        setIsMuted((value) => !value);
    }, []);
    const onClick = useCallback(() => {
        if (customControlsType === CustomControlsType.WithPlayPauseButton) {
            onPlayToggle();
        }
    }, [onPlayToggle, customControlsType]);
    return (React.createElement(Fragment, null,
        React.createElement("video", { disablePictureInPicture: true, playsInline: true, 
            // @ts-ignore
            // eslint-disable-next-line react/no-unknown-property
            pip: "false", autoPlay: video.autoplay, loop: Boolean(video.loop), className: b(), ref: videoRef, preload: "metadata", muted: isMuted, "aria-label": video.ariaLabel, onClick: onClick },
            getVideoTypesWithPriority(video.src)
                .filter(({ type }) => Boolean(type))
                .map(({ src, type }, index) => (React.createElement("source", { key: index, src: src, type: type, "data-qa": qa }))),
            !video.autoplay && React.createElement("track", { default: true, kind: "captions" })),
        controls === MediaVideoControlsType.Custom && (React.createElement(CustomBarControls, { className: customBarControlsClassName, type: customControlsType, isPaused: isPaused, onPlayClick: onPlayToggle, muteButtonShown: muteButtonShown, shown: true, positioning: positioning, mute: {
                isMuted: Boolean(isMuted),
                changeMute: onMuteToggle,
            } }))));
});
DefaultVideo.displayName = 'DefaultVideo';
