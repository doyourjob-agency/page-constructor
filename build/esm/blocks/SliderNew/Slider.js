import React, { Fragment } from 'react';
import SwiperCore, { A11y, Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Anchor from '../../components/Anchor/Anchor';
import AnimateBlock from '../../components/AnimateBlock/AnimateBlock';
import Title from '../../components/Title/Title';
import { block } from '../../utils';
import Arrow from './Arrow/Arrow';
import { i18n } from './i18n';
import { useSlider } from './useSlider';
import { useSliderPagination } from './useSliderPagination';
import './Slider.css';
import 'swiper/swiper-bundle.css';
const b = block('SliderNewBlock');
SwiperCore.use([Autoplay, A11y, Pagination]);
export const SliderNewBlock = ({ animated, title, description, type, anchorId, arrows = true, adaptive, autoplay: autoplayMs, dots = true, className, dotsClassName, disclaimer, children, blockClassName, arrowSize, slidesToShow, onSlideChange, onSlideChangeTransitionStart, onSlideChangeTransitionEnd, onActiveIndexChange, onBreakpoint, }) => {
    const { autoplay, isLocked, childrenCount, breakpoints, onSwiper, onPrev, onNext, setIsLocked } = useSlider({
        slidesToShow,
        children,
        type,
        autoplayMs,
    });
    const isA11yControlHidden = Boolean(autoplay);
    const controlTabIndex = isA11yControlHidden ? -1 : 0;
    const paginationProps = useSliderPagination({
        enabled: dots,
        isA11yControlHidden,
        controlTabIndex,
        bulletClass: b('dot', dotsClassName),
        bulletActiveClass: b('dot_active'),
        paginationLabel: i18n('pagination-label'),
    });
    return (React.createElement("div", { className: b({
            'one-slide': childrenCount === 1,
            'only-arrows': !(title === null || title === void 0 ? void 0 : title.text) && !description && arrows,
            'without-dots': !dots || isLocked,
            type,
        }, blockClassName) },
        anchorId && React.createElement(Anchor, { id: anchorId }),
        React.createElement(Title, { title: title, subtitle: description, className: b('header', { 'no-description': !description }) }),
        React.createElement(AnimateBlock, { className: b('animate-slides'), animate: animated },
            React.createElement(Swiper, Object.assign({ className: b('slider', className), onSwiper: onSwiper, speed: 1000, autoplay: autoplay, autoHeight: adaptive, initialSlide: 0, noSwiping: false, breakpoints: breakpoints, onSlideChange: onSlideChange, onSlideChangeTransitionStart: onSlideChangeTransitionStart, onSlideChangeTransitionEnd: onSlideChangeTransitionEnd, onActiveIndexChange: onActiveIndexChange, onBreakpoint: onBreakpoint, onLock: () => setIsLocked(true), onUnlock: () => setIsLocked(false), watchSlidesVisibility: true, watchOverflow: true, a11y: {
                    slideLabelMessage: '',
                    paginationBulletMessage: i18n('dot-label', { index: '{{index}}' }),
                } }, paginationProps), React.Children.map(children, (elem, index) => (React.createElement(SwiperSlide, { className: b('slide'), key: index }, ({ isVisible }) => (React.createElement("div", { className: b('slide-item'), "aria-hidden": !isA11yControlHidden && !isVisible }, elem)))))),
            arrows && !isLocked && (React.createElement(Fragment, null,
                React.createElement("div", { "aria-hidden": isA11yControlHidden },
                    React.createElement(Arrow, { className: b('arrow', { prev: true }), type: "left", onClick: onPrev, size: arrowSize, extraProps: { tabIndex: controlTabIndex } }),
                    React.createElement(Arrow, { className: b('arrow', { next: true }), type: "right", onClick: onNext, size: arrowSize, extraProps: { tabIndex: controlTabIndex } })))),
            React.createElement("div", { className: b('footer') }, disclaimer ? (React.createElement("div", { className: b('disclaimer', { size: (disclaimer === null || disclaimer === void 0 ? void 0 : disclaimer.size) || 'm' }) }, disclaimer === null || disclaimer === void 0 ? void 0 : disclaimer.text)) : null))));
};
export default SliderNewBlock;
