"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Media = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const innerContext_1 = require("../../context/innerContext");
const utils_1 = require("../../utils");
const microdata_1 = require("../../utils/microdata");
const VideoBlock_1 = tslib_1.__importDefault(require("../VideoBlock/VideoBlock"));
const DataLens_1 = tslib_1.__importDefault(require("./DataLens/DataLens"));
const FullscreenVideo_1 = tslib_1.__importDefault(require("./FullscreenVideo/FullscreenVideo"));
const Iframe_1 = tslib_1.__importDefault(require("./Iframe/Iframe"));
const Image_1 = tslib_1.__importDefault(require("./Image/Image"));
const Video_1 = tslib_1.__importDefault(require("./Video/Video"));
const b = (0, utils_1.block)('Media');
const Media = (props) => {
    const { image, video, youtube, videoIframe, dataLens, color, height, previewImg, parallax = false, fullscreen, analyticsEvents, className, imageClassName, videoClassName, youtubeClassName, disableImageSliderForArrayInput, playVideo = true, isBackground, playButton, customBarControlsClassName, qa, ratio, autoplay, onImageLoad, iframe, margins, videoMicrodata, } = props;
    const [hasVideoFallback, setHasVideoFallback] = (0, react_1.useState)(false);
    const { microdata } = (0, react_1.useContext)(innerContext_1.InnerContext);
    const qaAttributes = (0, utils_1.getQaAttrubutes)(qa, 'video');
    const content = (0, react_1.useMemo)(() => {
        let result = [];
        if (image) {
            result.push(react_1.default.createElement(Image_1.default, { key: "image", parallax: parallax, image: image, disableImageSliderForArrayInput: disableImageSliderForArrayInput, height: height, imageClassName: imageClassName, isBackground: isBackground, video: video, hasVideoFallback: hasVideoFallback, fullscreen: fullscreen, qa: qaAttributes.image, onLoad: onImageLoad }));
        }
        if (video) {
            const videoProps = {
                key: 'video',
                video,
                videoClassName,
                height,
                analyticsEvents,
                playVideo,
                previewImg,
                playButton,
                customBarControlsClassName,
                hasVideoFallback,
                setHasVideoFallback,
                ratio,
            };
            if (fullscreen) {
                result.push(react_1.default.createElement(FullscreenVideo_1.default, Object.assign({}, videoProps, { qa: qaAttributes.video })));
            }
            else {
                result.push(react_1.default.createElement(Video_1.default, Object.assign({}, videoProps, { qa: qaAttributes.video })));
            }
        }
        if (youtube || videoIframe) {
            result = (react_1.default.createElement(VideoBlock_1.default, { className: b('youtube', youtubeClassName), record: youtube, videoIframe: videoIframe, attributes: { color: 'white', rel: '0' }, previewImg: previewImg, height: height, fullscreen: fullscreen, analyticsEvents: analyticsEvents, autoplay: autoplay, onImageLoad: onImageLoad }));
        }
        if (dataLens) {
            result = react_1.default.createElement(DataLens_1.default, { dataLens: dataLens });
        }
        if (iframe) {
            result = react_1.default.createElement(Iframe_1.default, { iframe: iframe, margins: margins });
        }
        return result;
    }, [
        image,
        video,
        videoIframe,
        youtube,
        dataLens,
        iframe,
        parallax,
        disableImageSliderForArrayInput,
        height,
        imageClassName,
        isBackground,
        hasVideoFallback,
        fullscreen,
        qaAttributes.image,
        qaAttributes.video,
        onImageLoad,
        videoClassName,
        analyticsEvents,
        playVideo,
        previewImg,
        playButton,
        customBarControlsClassName,
        ratio,
        youtubeClassName,
        autoplay,
        margins,
    ]);
    const videoMicrodataScript = (0, react_1.useMemo)(() => {
        var _a;
        const { name, description } = videoMicrodata || {};
        const json = JSON.stringify(Object.assign(Object.assign({ '@context': 'http://schema.org/', '@type': 'VideoObject', uploadDate: microdata === null || microdata === void 0 ? void 0 : microdata.contentUpdatedDate, contentUrl: ((_a = video === null || video === void 0 ? void 0 : video.src) === null || _a === void 0 ? void 0 : _a[0]) || videoIframe || youtube, thumbnailUrl: previewImg }, (videoMicrodata || {})), { name: name ? (0, microdata_1.sanitizeMicrodata)(name) : name, description: description ? (0, microdata_1.sanitizeMicrodata)(description) : description }));
        return video || youtube || videoIframe ? (react_1.default.createElement("script", { type: "application/ld+json", dangerouslySetInnerHTML: { __html: json } })) : null;
    }, [microdata === null || microdata === void 0 ? void 0 : microdata.contentUpdatedDate, previewImg, video, videoIframe, videoMicrodata, youtube]);
    return (react_1.default.createElement("div", { className: b(null, className), style: { backgroundColor: color }, "data-qa": qa },
        videoMicrodataScript,
        content));
};
exports.Media = Media;
exports.default = exports.Media;
