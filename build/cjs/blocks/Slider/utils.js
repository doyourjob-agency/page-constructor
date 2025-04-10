"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRovingTabIndex = exports.getSlidesToShowCount = exports.getSlidesCountByBreakpoint = exports.getSliderResponsiveParams = exports.getSlidesToShowWithDefaults = exports.isFocusable = exports.DEFAULT_SLIDE_BREAKPOINTS = void 0;
const tslib_1 = require("tslib");
const react_1 = require("react");
const pickBy_1 = tslib_1.__importDefault(require("lodash/pickBy"));
const constants_1 = require("../../constants");
const models_1 = require("./models");
exports.DEFAULT_SLIDE_BREAKPOINTS = {
    [models_1.SliderBreakpointNames.Xl]: 3,
    [models_1.SliderBreakpointNames.Lg]: 2,
    [models_1.SliderBreakpointNames.Md]: 2,
    [models_1.SliderBreakpointNames.Sm]: 1.15,
};
const BREAKPOINT_NAMES_BY_VALUES = Object.entries(constants_1.BREAKPOINTS).reduce((acc, [key, value]) => (Object.assign(Object.assign({}, acc), { [value]: key })), {});
const isFocusable = (element) => {
    if (!(element instanceof HTMLElement)) {
        return false;
    }
    const tabIndexAttr = element.getAttribute('tabindex');
    const hasTabIndex = tabIndexAttr !== null;
    const tabIndex = Number(tabIndexAttr);
    if (element.ariaHidden === 'true' || (hasTabIndex && tabIndex < 0)) {
        return false;
    }
    if (hasTabIndex && tabIndex >= 0) {
        return true;
    }
    // without this jest fails here for some reason
    let htmlElement;
    switch (true) {
        case element instanceof HTMLAnchorElement:
            htmlElement = element;
            return Boolean(htmlElement.href);
        case element instanceof HTMLInputElement:
            htmlElement = element;
            return htmlElement.type !== 'hidden' && !htmlElement.disabled;
        case element instanceof HTMLSelectElement:
        case element instanceof HTMLTextAreaElement:
        case element instanceof HTMLButtonElement:
            htmlElement = element;
            return !htmlElement.disabled;
        default:
            return false;
    }
};
exports.isFocusable = isFocusable;
function getSlidesToShowWithDefaults({ contentLength, breakpoints, mobileFullscreen, }) {
    let result;
    if (typeof breakpoints === 'number') {
        result = Object.keys(exports.DEFAULT_SLIDE_BREAKPOINTS).reduce((acc, breakpointName) => (Object.assign(Object.assign({}, acc), { [breakpointName]: breakpoints })), {});
    }
    else {
        result = breakpoints || exports.DEFAULT_SLIDE_BREAKPOINTS;
    }
    return Object.assign(Object.assign(Object.assign({}, exports.DEFAULT_SLIDE_BREAKPOINTS), (0, pickBy_1.default)(result, (value) => !isNaN(value))), { sm: !mobileFullscreen && contentLength > 1 ? exports.DEFAULT_SLIDE_BREAKPOINTS.sm : 1 });
}
exports.getSlidesToShowWithDefaults = getSlidesToShowWithDefaults;
function getSliderResponsiveParams(breakpoints) {
    return Object.entries(breakpoints).map(([breakpointName, slidesToShow]) => ({
        breakpoint: constants_1.BREAKPOINTS[breakpointName],
        settings: { slidesToShow },
    }));
}
exports.getSliderResponsiveParams = getSliderResponsiveParams;
function getSlidesCountByBreakpoint(breakpoint, breakpoints) {
    const breakpointName = BREAKPOINT_NAMES_BY_VALUES[breakpoint];
    return Math.floor(breakpoints[breakpointName]);
}
exports.getSlidesCountByBreakpoint = getSlidesCountByBreakpoint;
function getSlidesToShowCount(breakpoints) {
    return Math.floor(Math.max(...Object.values(breakpoints)));
}
exports.getSlidesToShowCount = getSlidesToShowCount;
const getRovingListItemId = (uniqId, index) => `${uniqId}-roving-tabindex-item-${index}`;
function useRovingTabIndex(props) {
    const { itemCount, activeIndex, firstIndex = 0, uniqId } = props;
    const [currentIndex, setCurrentIndex] = (0, react_1.useState)(firstIndex);
    const hasFocusRef = (0, react_1.useRef)(false);
    const lastIndex = itemCount + firstIndex - 1;
    const getRovingItemProps = (index) => {
        return {
            id: getRovingListItemId(uniqId, index),
            tabIndex: index === activeIndex ? 0 : -1,
            onFocus: () => {
                setCurrentIndex(index);
                hasFocusRef.current = true;
            },
        };
    };
    (0, react_1.useEffect)(() => {
        var _a;
        if (!hasFocusRef.current) {
            return;
        }
        (_a = document.getElementById(getRovingListItemId(uniqId, currentIndex))) === null || _a === void 0 ? void 0 : _a.focus();
    }, [activeIndex, currentIndex, uniqId]);
    const setNextIndex = () => setCurrentIndex((prev) => (prev >= lastIndex ? firstIndex : prev + 1));
    const setPrevIndex = () => setCurrentIndex((prev) => (prev <= firstIndex ? lastIndex : prev - 1));
    const onRovingListKeyDown = (e) => {
        const key = e.key.toLowerCase();
        if (key !== 'tab' && key !== 'enter') {
            e.preventDefault();
        }
        switch (key) {
            case 'arrowleft':
            case 'arrowup':
                setPrevIndex();
                return;
            case 'arrowright':
            case 'arrowdown':
                setNextIndex();
                return;
        }
    };
    const onRovingListBlur = () => {
        hasFocusRef.current = false;
    };
    const rovingListProps = {
        onKeyDown: onRovingListKeyDown,
        onBlur: onRovingListBlur,
    };
    return { getRovingItemProps, rovingListProps };
}
exports.useRovingTabIndex = useRovingTabIndex;
