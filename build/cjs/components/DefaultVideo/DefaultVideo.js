"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultVideo = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const models_1 = require("../../models");
const utils_1 = require("../../utils");
const utils_2 = require("../Media/Video/utils");
const CustomBarControls_1 = tslib_1.__importDefault(require("../ReactPlayer/CustomBarControls"));
const b = (0, utils_1.block)('default-video');
exports.DefaultVideo = react_1.default.forwardRef((props, ref) => {
    const { video, qa, customBarControlsClassName } = props;
    const { controls, customControlsOptions, muted: initiallyMuted = true } = video;
    const { muteButtonShown, positioning, type: customControlsType, } = customControlsOptions || {};
    const [isPaused, setIsPaused] = (0, react_1.useState)(false);
    const [isMuted, setIsMuted] = (0, react_1.useState)(initiallyMuted);
    const videoRef = (0, react_1.useRef)(null);
    // one may not use this hook and work with `ref` variable only, but
    // in this case one should support both function type and object type,
    // according to ForwardedRef type.
    // Currently used way with extra ref and useImperativeHandle is more
    // convenient and allows us to work with object typed ref only,
    // avoiding typeof ref === 'function' statements
    (0, react_1.useImperativeHandle)(ref, () => {
        if (!(videoRef === null || videoRef === void 0 ? void 0 : videoRef.current)) {
            return undefined;
        }
        return videoRef.current;
    }, [videoRef]);
    const onPlayToggle = (0, react_1.useCallback)(() => {
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
    const onMuteToggle = (0, react_1.useCallback)(() => {
        setIsMuted((value) => !value);
    }, []);
    const onClick = (0, react_1.useCallback)(() => {
        if (customControlsType === models_1.CustomControlsType.WithPlayPauseButton) {
            onPlayToggle();
        }
    }, [onPlayToggle, customControlsType]);
    return (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement("video", { disablePictureInPicture: true, playsInline: true, 
            // @ts-ignore
            // eslint-disable-next-line react/no-unknown-property
            pip: "false", autoPlay: video.autoplay, loop: Boolean(video.loop), className: b(), ref: videoRef, preload: "metadata", muted: isMuted, "aria-label": video.ariaLabel, onClick: onClick },
            (0, utils_2.getVideoTypesWithPriority)(video.src)
                .filter(({ type }) => Boolean(type))
                .map(({ src, type }, index) => (react_1.default.createElement("source", { key: index, src: src, type: type, "data-qa": qa }))),
            !video.autoplay && react_1.default.createElement("track", { default: true, kind: "captions" })),
        controls === models_1.MediaVideoControlsType.Custom && (react_1.default.createElement(CustomBarControls_1.default, { className: customBarControlsClassName, type: customControlsType, isPaused: isPaused, onPlayClick: onPlayToggle, muteButtonShown: muteButtonShown, shown: true, positioning: positioning, mute: {
                isMuted: Boolean(isMuted),
                changeMute: onMuteToggle,
            } }))));
});
exports.DefaultVideo.displayName = 'DefaultVideo';
