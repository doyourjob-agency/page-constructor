"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const models_1 = require("../../../models");
const utils_1 = require("../../../utils");
const DefaultVideo_1 = require("../../DefaultVideo/DefaultVideo");
const ReactPlayer_1 = tslib_1.__importDefault(require("../../ReactPlayer/ReactPlayer"));
const b = (0, utils_1.block)('media-component-video');
const Video = (props) => {
    const { video, height, analyticsEvents, previewImg, playButton: commonPlayButton, customBarControlsClassName, videoClassName, playVideo, setHasVideoFallback, hasVideoFallback, qa, ratio, } = props;
    const qaAttributes = (0, utils_1.getQaAttrubutes)(qa, 'source');
    const ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
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
    (0, react_1.useEffect)(() => {
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
    const reactPlayerBlock = (0, react_1.useMemo)(() => {
        const { src, loop, controls, muted, autoplay = true, elapsedTime, playButton, ariaLabel, customControlsOptions, contain, } = video;
        return (react_1.default.createElement(ReactPlayer_1.default, { ref: ref, className: b('react-player', videoClassName), src: src, previewImgUrl: previewImg, loop: Boolean(loop), controls: controls, muted: muted, autoplay: autoplay && playVideo, elapsedTime: elapsedTime, playButton: playButton || commonPlayButton, customBarControlsClassName: customBarControlsClassName, analyticsEvents: analyticsEvents, height: height, ariaLabel: ariaLabel, customControlsOptions: customControlsOptions, ratio: ratio === 'auto' ? undefined : ratio, autoRatio: ratio === 'auto', contain: contain }));
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
    const defaultVideoBlock = (0, react_1.useMemo)(() => {
        return video.src.length ? (react_1.default.createElement("div", { className: b('wrap', videoClassName), style: { height, display: hasVideoFallback ? 'none' : 'block' }, "data-qa": qaAttributes.default },
            react_1.default.createElement(DefaultVideo_1.DefaultVideo, { ref: ref, video: video, qa: qaAttributes.source }))) : null;
    }, [
        video,
        hasVideoFallback,
        videoClassName,
        height,
        qaAttributes.default,
        qaAttributes.source,
    ]);
    switch (video.type) {
        case models_1.MediaVideoType.Player:
            return reactPlayerBlock;
        case models_1.MediaVideoType.Default:
        default:
            return defaultVideoBlock;
    }
};
exports.default = Video;
