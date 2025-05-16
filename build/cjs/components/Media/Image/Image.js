"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultAnimatedDivQa = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const web_1 = require("@react-spring/web");
const debounce_1 = tslib_1.__importDefault(require("lodash/debounce"));
const Slider_1 = tslib_1.__importDefault(require("../../../blocks/Slider/Slider"));
const models_1 = require("../../../models");
const utils_1 = require("../../../utils");
const BackgroundImage_1 = tslib_1.__importDefault(require("../../BackgroundImage/BackgroundImage"));
const FullscreenImage_1 = tslib_1.__importDefault(require("../../FullscreenImage/FullscreenImage"));
const Image_1 = tslib_1.__importDefault(require("../../Image/Image"));
const utils_2 = require("./utils");
const b = (0, utils_1.block)('media-component-image');
exports.defaultAnimatedDivQa = 'animated-div';
const Image = (props) => {
    const { parallax, height, imageClassName, isBackground, hasVideoFallback, video, fullscreen, disableImageSliderForArrayInput, qa, onLoad, } = props;
    const image = Array.isArray(props.image) && disableImageSliderForArrayInput
        ? props.image[0]
        : props.image;
    const qaAttributes = (0, utils_1.getQaAttrubutes)(qa, 'fullscreen-image', 'animate', 'background-image', 'image-view', 'slider-block');
    const [scrollY, setScrollY] = (0, react_1.useState)(0);
    const [{ springScrollY }, springSetScrollY] = (0, web_1.useSpring)(() => ({
        springScrollY: 0,
        config: web_1.config.molasses,
    }));
    let parallaxInterpolate = '';
    (0, react_1.useEffect)(() => {
        if (parallax) {
            const handleScroll = () => setScrollY(window.scrollY);
            const debouncedHandler = (0, debounce_1.default)(handleScroll, 5);
            window.addEventListener('scroll', debouncedHandler, { passive: true });
            return () => window.removeEventListener('scroll', debouncedHandler);
        }
        return () => { };
    });
    if (parallax) {
        const parallaxLevel = 2;
        springSetScrollY.start({ springScrollY: height && scrollY > height ? height : scrollY });
        parallaxInterpolate = springScrollY.to((value) => `translateY(-${Number(value) / parallaxLevel}px)`);
    }
    const imageClass = b('item', { withVideo: Boolean(video) && !hasVideoFallback }, imageClassName);
    const renderFullscreenImage = (item) => {
        const itemData = (0, utils_2.getMediaImage)(item);
        return (react_1.default.createElement(FullscreenImage_1.default, Object.assign({ key: itemData.alt }, itemData, { imageClassName: imageClass, imageStyle: { height }, qa: qaAttributes.fullscreenImage })));
    };
    const imageBackground = (oneImage) => {
        const imageData = (0, utils_2.getMediaImage)(oneImage);
        return (react_1.default.createElement(web_1.animated.div, { style: { transform: parallaxInterpolate }, "data-qa": qaAttributes.animate },
            react_1.default.createElement(BackgroundImage_1.default, Object.assign({}, imageData, { className: imageClass, style: { height }, qa: qaAttributes.backgroundImage }))));
    };
    const imageOnly = (oneImage) => {
        const imageData = (0, utils_2.getMediaImage)(oneImage);
        return (react_1.default.createElement(Image_1.default, Object.assign({}, imageData, { className: imageClass, style: { height }, qa: qaAttributes.imageView, onLoad: onLoad })));
    };
    const imageSlider = (imageArray) => {
        const fullscreenItem = fullscreen === undefined || fullscreen;
        return (react_1.default.createElement(Slider_1.default, { slidesToShow: 1, type: models_1.SliderType.MediaCard }, imageArray.map((item, index) => (react_1.default.createElement(react_1.Fragment, { key: index }, fullscreenItem ? renderFullscreenImage(item) : imageOnly(item))))));
    };
    if (Array.isArray(image)) {
        return imageSlider(image);
    }
    if (fullscreen) {
        return renderFullscreenImage(image);
    }
    return isBackground ? imageBackground(image) : imageOnly(image);
};
exports.default = Image;
