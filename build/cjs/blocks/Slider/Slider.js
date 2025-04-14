"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SliderBlock = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const uikit_1 = require("@gravity-ui/uikit");
const debounce_1 = tslib_1.__importDefault(require("lodash/debounce"));
const get_1 = tslib_1.__importDefault(require("lodash/get"));
const noop_1 = tslib_1.__importDefault(require("lodash/noop"));
const react_slick_1 = tslib_1.__importDefault(require("react-slick"));
const Anchor_1 = tslib_1.__importDefault(require("../../components/Anchor/Anchor"));
const AnimateBlock_1 = tslib_1.__importDefault(require("../../components/AnimateBlock/AnimateBlock"));
const OutsideClick_1 = tslib_1.__importDefault(require("../../components/OutsideClick/OutsideClick"));
const Title_1 = tslib_1.__importDefault(require("../../components/Title/Title"));
const constants_1 = require("../../constants");
const mobileContext_1 = require("../../context/mobileContext");
const ssrContext_1 = require("../../context/ssrContext");
const StylesContext_1 = require("../../context/stylesContext/StylesContext");
const useFocus_1 = tslib_1.__importDefault(require("../../hooks/useFocus"));
const models_1 = require("../../models");
const utils_1 = require("../../utils");
const Arrow_1 = tslib_1.__importDefault(require("./Arrow/Arrow"));
const i18n_1 = require("./i18n");
const utils_2 = require("./utils");
const b = (0, utils_1.block)('SliderBlock');
const slick = (0, utils_1.block)('slick-origin');
const DOT_WIDTH = 8;
const DOT_GAP = 16;
const SliderBlock = (props) => {
    var _a;
    const { animated, title, description, type, anchorId, arrows = true, adaptive, autoplay: autoplaySpeed, infinite = false, dots = true, dotsClassName, disclaimer, children, className, blockClassName, lazyLoad, arrowSize, onAfterChange: handleAfterChange, onBeforeChange: handleBeforeChange, } = props;
    const { isServer } = (0, react_1.useContext)(ssrContext_1.SSRContext);
    const isMobile = (0, react_1.useContext)(mobileContext_1.MobileContext);
    const [breakpoint, setBreakpoint] = (0, react_1.useState)(constants_1.BREAKPOINTS.xl);
    const sliderId = (0, uikit_1.useUniqId)();
    const disclosedChildren = (0, react_1.useMemo)(() => discloseAllNestedChildren(children, sliderId), [children, sliderId]);
    const childrenCount = disclosedChildren.length;
    const isAutoplayEnabled = autoplaySpeed !== undefined && autoplaySpeed > 0;
    const isUserInteractionRef = (0, react_1.useRef)(false);
    const [slidesToShow] = (0, react_1.useState)((0, utils_2.getSlidesToShowWithDefaults)({
        contentLength: childrenCount,
        breakpoints: props.slidesToShow,
        mobileFullscreen: Boolean(props.type && Object.values(models_1.SliderType).includes(props.type)),
    }));
    const slidesToShowCount = (0, utils_2.getSlidesToShowCount)(slidesToShow);
    const slidesCountByBreakpoint = (0, utils_2.getSlidesCountByBreakpoint)(breakpoint, slidesToShow);
    const [currentIndex, setCurrentIndex] = (0, react_1.useState)(0);
    const [childStyles, setChildStyles] = (0, react_1.useState)({});
    const [slider, setSlider] = (0, react_1.useState)();
    const prevIndexRef = (0, react_1.useRef)(0);
    const autoplayTimeId = (0, react_1.useRef)();
    const { hasFocus, unsetFocus } = (0, useFocus_1.default)((_a = slider === null || slider === void 0 ? void 0 : slider.innerSlider) === null || _a === void 0 ? void 0 : _a.list);
    const asUserInteraction = (fn) => (...args) => {
        isUserInteractionRef.current = true;
        return fn(...args);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const onResize = (0, react_1.useCallback)((0, debounce_1.default)(() => {
        if (!slider) {
            return;
        }
        const newBreakpoint = (0, get_1.default)(slider, 'state.breakpoint') || constants_1.BREAKPOINTS.xl;
        if (newBreakpoint !== breakpoint) {
            setBreakpoint(newBreakpoint);
            setCurrentIndex(0);
            slider.slickGoTo(0);
        }
    }, 100), [slider, breakpoint]);
    const scrollLastSlide = (0, react_1.useCallback)((current) => {
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
    (0, react_1.useEffect)(() => {
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
    (0, react_1.useEffect)(() => {
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
    const onBeforeChange = (0, react_1.useCallback)((current, next) => {
        if (handleBeforeChange) {
            handleBeforeChange(current, next);
        }
        prevIndexRef.current = current;
        setCurrentIndex(Math.ceil(next));
    }, [handleBeforeChange]);
    const onAfterChange = (0, react_1.useCallback)((current) => {
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
                const focusableChild = Array.from(firstNewSlide.querySelectorAll('*')).find(utils_2.isFocusable);
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
    const { getRovingItemProps, rovingListProps } = (0, utils_2.useRovingTabIndex)({
        itemCount: barSlidesCount,
        activeIndex: currentIndex + 1,
        firstIndex: 1,
        uniqId: sliderId,
    });
    const renderBar = () => {
        return (slidesCountByBreakpoint > 1 && (react_1.default.createElement("li", { className: b('bar'), style: {
                left: barPosition,
                width: barWidth,
            } })));
    };
    // renders additional bar, not visible in the layout but visible for screenreaders
    const renderAccessibleBar = (index) => {
        return (
        // To have this key differ from keys used in renderDot function, added `-accessible-bar` part
        react_1.default.createElement(react_1.Fragment, { key: `${index}-accessible-bar` }, slidesCountByBreakpoint > 0 && (react_1.default.createElement("li", Object.assign({ className: b('accessible-bar'), role: "menuitemradio", "aria-checked": true, "aria-label": (0, i18n_1.i18n)('dot-label', {
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
        return (react_1.default.createElement("li", Object.assign({ key: index, className: b('dot', { active: index === currentIndex }), onClick: asUserInteraction(() => handleDotClick(index)), onKeyDown: (e) => {
                const key = e.key.toLowerCase();
                if (key === 'space' || key === 'enter') {
                    e.currentTarget.click();
                }
            }, role: "menuitemradio", "aria-checked": false, tabIndex: -1, "aria-hidden": isVisible, "aria-label": (0, i18n_1.i18n)('dot-label', {
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
        return (react_1.default.createElement("div", { className: b('dots', dotsClassName) },
            react_1.default.createElement("ul", Object.assign({ className: b('dots-list'), role: "menu", "aria-label": (0, i18n_1.i18n)('pagination-label') }, rovingListProps),
                renderBar(),
                dotsList)));
    };
    const renderDisclaimer = () => {
        return disclaimer ? (react_1.default.createElement("div", { className: b('disclaimer', { size: disclaimer.size || 'm' }) }, disclaimer.text)) : null;
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
            responsive: (0, utils_2.getSliderResponsiveParams)(slidesToShow),
            beforeChange: onBeforeChange,
            afterChange: onAfterChange,
            initialSlide: 0,
            nextArrow: (react_1.default.createElement(Arrow_1.default, { type: "right", handleClick: asUserInteraction(handleArrowClick), size: arrowSize })),
            prevArrow: (react_1.default.createElement(Arrow_1.default, { type: "left", handleClick: asUserInteraction(handleArrowClick), size: arrowSize })),
            lazyLoad,
            accessibility: false,
        };
        return (react_1.default.createElement(OutsideClick_1.default, { onOutsideClick: isMobile ? unsetFocus : noop_1.default },
            react_1.default.createElement(react_slick_1.default, Object.assign({}, settings), disclosedChildren),
            react_1.default.createElement("div", { className: b('footer') },
                renderDisclaimer(),
                renderNavigation())));
    };
    return (react_1.default.createElement(StylesContext_1.StylesContext.Provider, { value: Object.assign(Object.assign({}, childStyles), { setStyles: setChildStyles }) },
        react_1.default.createElement("div", { className: b({
                'align-left': childrenCount < slidesCountByBreakpoint,
                'one-slide': childrenCount === 1,
                'only-arrows': !(title === null || title === void 0 ? void 0 : title.text) && !description && arrows,
                mobile: isMobile,
                type,
            }, blockClassName) },
            anchorId && react_1.default.createElement(Anchor_1.default, { id: anchorId }),
            react_1.default.createElement(Title_1.default, { title: title, subtitle: description, className: b('header', { 'no-description': !description }) }),
            react_1.default.createElement(AnimateBlock_1.default, { className: b('animate-slides'), animate: animated }, renderSlider()))));
};
exports.SliderBlock = SliderBlock;
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
        return (react_1.default.createElement("div", { key: id, id: id }, react_1.default.cloneElement(child, {
            data: Object.assign({ resetPaddings: true }, child.props.data),
        })));
    };
    return react_1.default.Children.map(children, (child) => {
        var _a;
        if (child) {
            // TODO: if child has 'items' then 'items' determinate like nested children for Slider.
            const nestedChildren = (_a = child.props.data) === null || _a === void 0 ? void 0 : _a.items;
            if (nestedChildren) {
                return nestedChildren.map((nestedChild) => {
                    return wrapped(react_1.default.cloneElement(child, {
                        data: Object.assign(Object.assign({}, child.props.data), { items: [nestedChild] }),
                    }));
                });
            }
        }
        return child && wrapped(child);
    }).filter(Boolean);
}
exports.default = exports.SliderBlock;
