"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHeight = exports.AUTOPLAY_ATTRIBUTES = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const icons_1 = require("@gravity-ui/icons");
const uikit_1 = require("@gravity-ui/uikit");
const debounce_1 = tslib_1.__importDefault(require("lodash/debounce"));
const uuid_1 = require("uuid");
const useAnalytics_1 = require("../../hooks/useAnalytics");
const common_1 = require("../../models/common");
const utils_1 = require("../../utils");
const Image_1 = tslib_1.__importDefault(require("../Image/Image"));
const i18n_1 = require("./i18n");
const RECORD_URL = 'https://www.youtube.com/embed/';
const STREAM_URL = 'https://www.youtube.com/embed/live_stream?channel=';
const RECORD_RE = /[0-9A-Za-z_-]{11}/;
const STREAM_RE = /[0-9A-Za-z_-]{23,25}/;
const AUTOPLAY_DELAY = 300;
exports.AUTOPLAY_ATTRIBUTES = {
    autoplay: 1,
    mute: 1,
};
const NO_AUTOPLAY_ATTRIBUTES = {
    autoplay: 0,
};
const b = (0, utils_1.block)('VideoBlock');
function getYoutubeVideoSrc(stream, record) {
    if (!stream && !record) {
        return null;
    }
    const [videoLink, url, re] = stream
        ? [stream, STREAM_URL, STREAM_RE]
        : [record, RECORD_URL, RECORD_RE];
    const match = videoLink === null || videoLink === void 0 ? void 0 : videoLink.match(re);
    let src;
    if (match && match.length) {
        src = url + match[0];
    }
    return src;
}
function getHeight(width) {
    return (width / 16) * 9;
}
exports.getHeight = getHeight;
const VideoBlock = (props) => {
    const { stream, record, videoIframe, attributes, className, id, previewImg, playButton, playButtonId, height, fullscreen, analyticsEvents, autoplay, onImageLoad, } = props;
    const handleAnalytics = (0, useAnalytics_1.useAnalytics)(common_1.DefaultEventNames.VideoPreview);
    const src = videoIframe ? videoIframe : getYoutubeVideoSrc(stream, record);
    const ref = (0, react_1.useRef)(null);
    const [hidePreview, setHidePreview] = (0, react_1.useState)(false);
    const [currentHeight, setCurrentHeight] = (0, react_1.useState)(height || undefined);
    const fullId = (0, react_1.useMemo)(() => id || (0, uuid_1.v4)(), [id]);
    const buttonId = (0, uikit_1.useUniqId)();
    const [isPlaying, setIsPlaying] = (0, react_1.useState)(!previewImg);
    const iframeSrc = (0, react_1.useMemo)(() => {
        if (src && isPlaying) {
            try {
                const url = new URL(src);
                const searchParams = (0, utils_1.getPageSearchParams)(Object.assign(Object.assign({}, (attributes || {})), (previewImg || autoplay ? exports.AUTOPLAY_ATTRIBUTES : NO_AUTOPLAY_ATTRIBUTES)));
                searchParams.forEach((value, key) => {
                    url.searchParams.set(key, value);
                });
                return url.href;
            }
            catch (e) {
                return src;
            }
        }
        return undefined;
    }, [attributes, autoplay, isPlaying, previewImg, src]);
    const onPreviewClick = (0, react_1.useCallback)(() => {
        handleAnalytics(analyticsEvents);
        setIsPlaying(true);
        setTimeout(() => setHidePreview(true), AUTOPLAY_DELAY);
    }, [handleAnalytics, analyticsEvents]);
    const { onKeyDown: onPreviewKeyDown } = (0, uikit_1.useActionHandlers)(onPreviewClick);
    (0, react_1.useEffect)(() => {
        const updateSize = (0, debounce_1.default)(() => {
            setCurrentHeight(ref.current ? Math.round(getHeight(ref.current.offsetWidth)) : undefined);
        }, 100);
        updateSize();
        window.addEventListener('resize', updateSize, { passive: true });
        return () => {
            window.removeEventListener('resize', updateSize);
        };
    }, [height]);
    const iframeContent = (0, react_1.useMemo)(() => {
        return (react_1.default.createElement("iframe", { id: fullId, src: iframeSrc, width: "100%", height: "100%", title: (0, i18n_1.i18n)('iframe-title'), frameBorder: "0", allowFullScreen: true, allow: "autoplay; fullscreen; encrypted-media; accelerometer; gyroscope; picture-in-picture; clipboard-write; web-share; screen-wake-lock", loading: "lazy" }));
    }, [fullId, iframeSrc]);
    (0, react_1.useEffect)(() => {
        setHidePreview(false);
    }, [src]);
    if (!src) {
        return null;
    }
    return (react_1.default.createElement("div", { className: b(null, className), style: { height: currentHeight }, ref: ref },
        iframeContent,
        previewImg && !hidePreview && !fullscreen && (react_1.default.createElement("div", { className: b('preview'), onClick: onPreviewClick, onKeyDown: onPreviewKeyDown, role: "button", tabIndex: 0, "aria-labelledby": playButton ? playButtonId : buttonId },
            react_1.default.createElement(Image_1.default, { src: previewImg, className: b('image'), containerClassName: b('image-wrapper'), onLoad: onImageLoad }),
            playButton || (react_1.default.createElement("button", { title: "Play", id: buttonId, className: b('button') },
                react_1.default.createElement(uikit_1.Icon, { className: b('icon'), data: icons_1.PlayFill, size: 24 })))))));
};
exports.default = VideoBlock;
