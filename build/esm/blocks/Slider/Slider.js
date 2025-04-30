import React, { Fragment, useCallback, useContext, useEffect, useMemo, useRef, useState, } from 'react';
import { useUniqId } from '@gravity-ui/uikit';
import debounce from 'lodash/debounce';
import get from 'lodash/get';
import noop from 'lodash/noop';
import SlickSlider from 'react-slick';
import Anchor from '../../components/Anchor/Anchor';
import AnimateBlock from '../../components/AnimateBlock/AnimateBlock';
import OutsideClick from '../../components/OutsideClick/OutsideClick';
import Title from '../../components/Title/Title';
import { BREAKPOINTS } from '../../constants';
import { MobileContext } from '../../context/mobileContext';
import { SSRContext } from '../../context/ssrContext';
import { StylesContext } from '../../context/stylesContext/StylesContext';
import useFocus from '../../hooks/useFocus';
import { SliderType, } from '../../models';
import { block } from '../../utils';
import Arrow from './Arrow/Arrow';
import { i18n } from './i18n';
import { getSliderResponsiveParams, getSlidesCountByBreakpoint, getSlidesToShowCount, getSlidesToShowWithDefaults, isFocusable, useRovingTabIndex, } from './utils';
import './Slider.css';
const b = block('SliderBlock');
const slick = block('slick-origin');
const DOT_WIDTH = 8;
const DOT_GAP = 16;
export const SliderBlock = (props) => {
    var _a;
    const { animated, title, description, type, anchorId, arrows = true, adaptive, autoplay: autoplaySpeed, infinite = false, dots = true, dotsClassName, disclaimer, children, className, blockClassName, lazyLoad, arrowSize, onAfterChange: handleAfterChange, onBeforeChange: handleBeforeChange, } = props;
    const { isServer } = useContext(SSRContext);
    const isMobile = useContext(MobileContext);
    const [breakpoint, setBreakpoint] = useState(BREAKPOINTS.xl);
    const sliderId = useUniqId();
    const disclosedChildren = useMemo(() => discloseAllNestedChildren(children, sliderId), [children, sliderId]);
    const childrenCount = disclosedChildren.length;
    const isAutoplayEnabled = autoplaySpeed !== undefined && autoplaySpeed > 0;
    const isUserInteractionRef = useRef(false);
    const [slidesToShow] = useState(getSlidesToShowWithDefaults({
        contentLength: childrenCount,
        breakpoints: props.slidesToShow,
        mobileFullscreen: Boolean(props.type && Object.values(SliderType).includes(props.type)),
    }));
    const slidesToShowCount = getSlidesToShowCount(slidesToShow);
    const slidesCountByBreakpoint = getSlidesCountByBreakpoint(breakpoint, slidesToShow);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [childStyles, setChildStyles] = useState({});
    const [slider, setSlider] = useState();
    const prevIndexRef = useRef(0);
    const autoplayTimeId = useRef();
    const { hasFocus, unsetFocus } = useFocus((_a = slider === null || slider === void 0 ? void 0 : slider.innerSlider) === null || _a === void 0 ? void 0 : _a.list);
    const asUserInteraction = (fn) => (...args) => {
        isUserInteractionRef.current = true;
        return fn(...args);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const onResize = useCallback(debounce(() => {
        if (!slider) {
            return;
        }
        const newBreakpoint = get(slider, 'state.breakpoint') || BREAKPOINTS.xl;
        if (newBreakpoint !== breakpoint) {
            setBreakpoint(newBreakpoint);
            setCurrentIndex(0);
            slider.slickGoTo(0);
        }
    }, 100), [slider, breakpoint]);
    const scrollLastSlide = useCallback((current) => {
        const lastSlide = childrenCount - slidesToShowCount;
        if (isAutoplayEnabled && lastSlide === current) {
            // Slick doesn't support autoplay with no infinity scroll
            autoplayTimeId.current = setTimeout(() => {
                if (slider) {
                    slider.slickGoTo(0, false);
                    slider.slickPause();
                }
                setTimeout(() => {
                    if (slider) {
                        slider.slickPlay();
                    }
                }, 500);
            }, autoplaySpeed);
        }
    }, [autoplaySpeed, childrenCount, isAutoplayEnabled, slider, slidesToShowCount]);
    useEffect(() => {
        if (hasFocus && autoplayTimeId.current) {
            if (infinite && slider) {
                slider.slickPause();
            }
            else {
                clearTimeout(autoplayTimeId.current);
            }
        }
        else if (infinite && slider) {
            slider.slickPlay();
        }
        else {
            scrollLastSlide(currentIndex);
        }
    }, [currentIndex, hasFocus, infinite, slider, scrollLastSlide]);
    useEffect(() => {
        onResize();
        window.addEventListener('resize', onResize, { passive: true });
        return () => window.removeEventListener('resize', onResize);
    }, [onResize]);
    const handleArrowClick = (direction) => {
        let nextIndex;
        if (direction === 'right') {
            nextIndex =
                currentIndex === childrenCount - slidesCountByBreakpoint ? 0 : currentIndex + 1;
        }
        else {
            nextIndex =
                currentIndex === 0 ? childrenCount - slidesCountByBreakpoint : currentIndex - 1;
        }
        if (slider) {
            slider.slickGoTo(nextIndex);
        }
    };
    const onBeforeChange = useCallback((current, next) => {
        if (handleBeforeChange) {
            handleBeforeChange(current, next);
        }
        prevIndexRef.current = current;
        setCurrentIndex(Math.ceil(next));
    }, [handleBeforeChange]);
    const onAfterChange = useCallback((current) => {
        if (handleAfterChange) {
            handleAfterChange(current);
        }
        if (autoplayTimeId.current) {
            clearTimeout(autoplayTimeId.current);
        }
        if (!hasFocus) {
            if (infinite && slider) {
                slider.slickPlay();
            }
            else {
                scrollLastSlide(current);
            }
        }
        if (isUserInteractionRef.current) {
            const focusIndex = prevIndexRef.current >= current
                ? current
                : Math.max(current, prevIndexRef.current + slidesCountByBreakpoint);
            const firstNewSlide = document.getElementById(getSlideId(sliderId, focusIndex));
            if (firstNewSlide) {
                const focusableChild = Array.from(firstNewSlide.querySelectorAll('*')).find(isFocusable);
                focusableChild === null || focusableChild === void 0 ? void 0 : focusableChild.focus();
            }
        }
        isUserInteractionRef.current = false;
    }, [
        handleAfterChange,
        hasFocus,
        scrollLastSlide,
        infinite,
        slider,
        sliderId,
        slidesCountByBreakpoint,
    ]);
    const handleDotClick = (index) => {
        const nextIndex = index > currentIndex ? index + 1 - slidesCountByBreakpoint : index;
        if (slider) {
            slider.slickGoTo(nextIndex);
        }
    };
    const barSlidesCount = childrenCount - slidesCountByBreakpoint + 1;
    const barPosition = (DOT_GAP + DOT_WIDTH) * currentIndex;
    const barWidth = DOT_WIDTH + (DOT_GAP + DOT_WIDTH) * (slidesCountByBreakpoint - 1);
    const { getRovingItemProps, rovingListProps } = useRovingTabIndex({
        itemCount: barSlidesCount,
        activeIndex: currentIndex + 1,
        firstIndex: 1,
        uniqId: sliderId,
    });
    const renderBar = () => {
        return (slidesCountByBreakpoint > 1 && (React.createElement("li", { className: b('bar'), style: {
                left: barPosition,
                width: barWidth,
            } })));
    };
    // renders additional bar, not visible in the layout but visible for screenreaders
    const renderAccessibleBar = (index) => {
        return (
        // To have this key differ from keys used in renderDot function, added `-accessible-bar` part
        React.createElement(Fragment, { key: `${index}-accessible-bar` }, slidesCountByBreakpoint > 0 && (React.createElement("li", Object.assign({ className: b('accessible-bar'), role: "menuitemradio", "aria-checked": true, "aria-label": i18n('dot-label', {
                index: currentIndex + 1,
                count: barSlidesCount,
            }), style: {
                left: barPosition,
                width: barWidth,
            } }, getRovingItemProps(currentIndex + 1))))));
    };
    const getCurrentSlideNumber = (index) => {
        const currentIndexDiff = index - currentIndex;
        let currentSlideNumber;
        if (0 <= currentIndexDiff && currentIndexDiff < slidesCountByBreakpoint) {
            currentSlideNumber = currentIndex + 1;
        }
        else if (currentIndexDiff >= slidesCountByBreakpoint) {
            currentSlideNumber = index - slidesCountByBreakpoint + 2;
        }
        else {
            currentSlideNumber = index + 1;
        }
        return currentSlideNumber;
    };
    const isVisibleSlide = (index) => {
        const currentIndexDiff = index - currentIndex;
        const result = slidesCountByBreakpoint > 0 &&
            0 <= currentIndexDiff &&
            currentIndexDiff < slidesCountByBreakpoint;
        return result;
    };
    const renderDot = (index) => {
        const isVisible = isVisibleSlide(index);
        const currentSlideNumber = getCurrentSlideNumber(index);
        const rovingItemProps = isVisible ? undefined : getRovingItemProps(currentSlideNumber);
        return (React.createElement("li", Object.assign({ key: index, className: b('dot', { active: index === currentIndex }), onClick: asUserInteraction(() => handleDotClick(index)), onKeyDown: (e) => {
                const key = e.key.toLowerCase();
                if (key === 'space' || key === 'enter') {
                    e.currentTarget.click();
                }
            }, role: "menuitemradio", "aria-checked": false, tabIndex: -1, "aria-hidden": isVisible, "aria-label": i18n('dot-label', {
                index: currentSlideNumber,
                count: barSlidesCount,
            }) }, rovingItemProps)));
    };
    const renderNavigation = () => {
        if (childrenCount <= slidesCountByBreakpoint || !dots || childrenCount === 1) {
            return null;
        }
        const dotsList = Array(childrenCount)
            .fill(null)
            .map((_item, index) => renderDot(index));
        dotsList.splice(currentIndex, 0, renderAccessibleBar(currentIndex));
        return (React.createElement("div", { className: b('dots', dotsClassName) },
            React.createElement("ul", Object.assign({ className: b('dots-list'), role: "menu", "aria-label": i18n('pagination-label') }, rovingListProps),
                renderBar(),
                dotsList)));
    };
    const renderDisclaimer = () => {
        return disclaimer ? (React.createElement("div", { className: b('disclaimer', { size: disclaimer.size || 'm' }) }, disclaimer.text)) : null;
    };
    const renderSlider = () => {
        /* Disable adding of width in inline styles when SSR to prevent overriding of default styles */
        /* Calculate appropriate breakpoint for mobile devices with user agent */
        const variableWidth = isServer && isMobile;
        const settings = {
            ref: (slickSlider) => setSlider(slickSlider),
            className: slick(null, className),
            arrows,
            variableWidth,
            infinite,
            speed: 1000,
            adaptiveHeight: adaptive,
            autoplay: isAutoplayEnabled,
            autoplaySpeed,
            slidesToShow: slidesToShowCount,
            slidesToScroll: 1,
            responsive: getSliderResponsiveParams(slidesToShow),
            beforeChange: onBeforeChange,
            afterChange: onAfterChange,
            initialSlide: 0,
            nextArrow: (React.createElement(Arrow, { type: "right", handleClick: asUserInteraction(handleArrowClick), size: arrowSize })),
            prevArrow: (React.createElement(Arrow, { type: "left", handleClick: asUserInteraction(handleArrowClick), size: arrowSize })),
            lazyLoad,
            accessibility: false,
        };
        return (React.createElement(OutsideClick, { onOutsideClick: isMobile ? unsetFocus : noop },
            React.createElement(SlickSlider, Object.assign({}, settings), disclosedChildren),
            React.createElement("div", { className: b('footer') },
                renderDisclaimer(),
                renderNavigation())));
    };
    return (React.createElement(StylesContext.Provider, { value: Object.assign(Object.assign({}, childStyles), { setStyles: setChildStyles }) },
        React.createElement("div", { className: b({
                'align-left': childrenCount < slidesCountByBreakpoint,
                'one-slide': childrenCount === 1,
                'only-arrows': !(title === null || title === void 0 ? void 0 : title.text) && !description && arrows,
                mobile: isMobile,
                type,
            }, blockClassName) },
            anchorId && React.createElement(Anchor, { id: anchorId }),
            React.createElement(Title, { title: title, subtitle: description, className: b('header', { 'no-description': !description }) }),
            React.createElement(AnimateBlock, { className: b('animate-slides'), animate: animated }, renderSlider()))));
};
function getSlideId(sliderId, index) {
    return `slider-${sliderId}-child-${index}`;
}
// TODO remove this and rework PriceDetailed CLOUDFRONT-12230
function discloseAllNestedChildren(children, sliderId) {
    if (!children) {
        return [];
    }
    let childIndex = 0;
    const wrapped = (child) => {
        const id = getSlideId(sliderId, childIndex++);
        return (React.createElement("div", { key: id, id: id }, React.cloneElement(child, {
            data: Object.assign({ resetPaddings: true }, child.props.data),
        })));
    };
    return React.Children.map(children, (child) => {
        var _a;
        if (child) {
            // TODO: if child has 'items' then 'items' determinate like nested children for Slider.
            const nestedChildren = (_a = child.props.data) === null || _a === void 0 ? void 0 : _a.items;
            if (nestedChildren) {
                return nestedChildren.map((nestedChild) => {
                    return wrapped(React.cloneElement(child, {
                        data: Object.assign(Object.assign({}, child.props.data), { items: [nestedChild] }),
                    }));
                });
            }
        }
        return child && wrapped(child);
    }).filter(Boolean);
}
export default SliderBlock;
