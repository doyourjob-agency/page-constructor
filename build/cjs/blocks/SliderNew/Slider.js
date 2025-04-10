"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SliderNewBlock = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const swiper_1 = tslib_1.__importStar(require("swiper"));
const react_2 = require("swiper/react");
const Anchor_1 = tslib_1.__importDefault(require("../../components/Anchor/Anchor"));
const AnimateBlock_1 = tslib_1.__importDefault(require("../../components/AnimateBlock/AnimateBlock"));
const Title_1 = tslib_1.__importDefault(require("../../components/Title/Title"));
const utils_1 = require("../../utils");
const Arrow_1 = tslib_1.__importDefault(require("./Arrow/Arrow"));
const i18n_1 = require("./i18n");
const useSlider_1 = require("./useSlider");
const useSliderPagination_1 = require("./useSliderPagination");
require("swiper/swiper-bundle.css");
const b = (0, utils_1.block)('SliderNewBlock');
swiper_1.default.use([swiper_1.Autoplay, swiper_1.A11y, swiper_1.Pagination]);
const SliderNewBlock = ({ animated, title, description, type, anchorId, arrows = true, adaptive, autoplay: autoplayMs, dots = true, className, dotsClassName, disclaimer, children, blockClassName, arrowSize, slidesToShow, onSlideChange, onSlideChangeTransitionStart, onSlideChangeTransitionEnd, onActiveIndexChange, onBreakpoint, }) => {
    const { autoplay, isLocked, childrenCount, breakpoints, onSwiper, onPrev, onNext, setIsLocked } = (0, useSlider_1.useSlider)({
        slidesToShow,
        children,
        type,
        autoplayMs,
    });
    const isA11yControlHidden = Boolean(autoplay);
    const controlTabIndex = isA11yControlHidden ? -1 : 0;
    const paginationProps = (0, useSliderPagination_1.useSliderPagination)({
        enabled: dots,
        isA11yControlHidden,
        controlTabIndex,
        bulletClass: b('dot', dotsClassName),
        bulletActiveClass: b('dot_active'),
        paginationLabel: (0, i18n_1.i18n)('pagination-label'),
    });
    return (react_1.default.createElement("div", { className: b({
            'one-slide': childrenCount === 1,
            'only-arrows': !(title === null || title === void 0 ? void 0 : title.text) && !description && arrows,
            'without-dots': !dots || isLocked,
            type,
        }, blockClassName) },
        anchorId && react_1.default.createElement(Anchor_1.default, { id: anchorId }),
        react_1.default.createElement(Title_1.default, { title: title, subtitle: description, className: b('header', { 'no-description': !description }) }),
        react_1.default.createElement(AnimateBlock_1.default, { className: b('animate-slides'), animate: animated },
            react_1.default.createElement(react_2.Swiper, Object.assign({ className: b('slider', className), onSwiper: onSwiper, speed: 1000, autoplay: autoplay, autoHeight: adaptive, initialSlide: 0, noSwiping: false, breakpoints: breakpoints, onSlideChange: onSlideChange, onSlideChangeTransitionStart: onSlideChangeTransitionStart, onSlideChangeTransitionEnd: onSlideChangeTransitionEnd, onActiveIndexChange: onActiveIndexChange, onBreakpoint: onBreakpoint, onLock: () => setIsLocked(true), onUnlock: () => setIsLocked(false), watchSlidesVisibility: true, watchOverflow: true, a11y: {
                    slideLabelMessage: '',
                    paginationBulletMessage: (0, i18n_1.i18n)('dot-label', { index: '{{index}}' }),
                } }, paginationProps), react_1.default.Children.map(children, (elem, index) => (react_1.default.createElement(react_2.SwiperSlide, { className: b('slide'), key: index }, ({ isVisible }) => (react_1.default.createElement("div", { className: b('slide-item'), "aria-hidden": !isA11yControlHidden && !isVisible }, elem)))))),
            arrows && !isLocked && (react_1.default.createElement(react_1.Fragment, null,
                react_1.default.createElement("div", { "aria-hidden": isA11yControlHidden },
                    react_1.default.createElement(Arrow_1.default, { className: b('arrow', { prev: true }), type: "left", onClick: onPrev, size: arrowSize, extraProps: { tabIndex: controlTabIndex } }),
                    react_1.default.createElement(Arrow_1.default, { className: b('arrow', { next: true }), type: "right", onClick: onNext, size: arrowSize, extraProps: { tabIndex: controlTabIndex } })))),
            react_1.default.createElement("div", { className: b('footer') }, disclaimer ? (react_1.default.createElement("div", { className: b('disclaimer', { size: (disclaimer === null || disclaimer === void 0 ? void 0 : disclaimer.size) || 'm' }) }, disclaimer === null || disclaimer === void 0 ? void 0 : disclaimer.text)) : null))));
};
exports.SliderNewBlock = SliderNewBlock;
exports.default = exports.SliderNewBlock;
