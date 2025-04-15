"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setElementAtrributes = exports.useMemoized = exports.getSliderResponsiveParams = exports.DEFAULT_SLIDE_BREAKPOINTS = void 0;
const tslib_1 = require("tslib");
const react_1 = require("react");
const isEqual_1 = tslib_1.__importDefault(require("lodash/isEqual"));
const pickBy_1 = tslib_1.__importDefault(require("lodash/pickBy"));
const constants_1 = require("../../constants");
const models_1 = require("./models");
exports.DEFAULT_SLIDE_BREAKPOINTS = {
    [models_1.SliderBreakpointNames.Lg]: 3,
    [models_1.SliderBreakpointNames.Md]: 2,
    [models_1.SliderBreakpointNames.Sm]: 2,
    [models_1.SliderBreakpointNames.Xs]: 1.15,
};
function getSliderResponsiveParams({ contentLength, slidesToShow, mobileFullscreen, }) {
    let result;
    if (typeof slidesToShow === 'number') {
        result = Object.keys(exports.DEFAULT_SLIDE_BREAKPOINTS).reduce((acc, breakpointName) => (Object.assign(Object.assign({}, acc), { [breakpointName]: slidesToShow })), {});
    }
    else {
        result = slidesToShow || exports.DEFAULT_SLIDE_BREAKPOINTS;
    }
    const showCount = Object.assign(Object.assign(Object.assign({}, exports.DEFAULT_SLIDE_BREAKPOINTS), (0, pickBy_1.default)(result, (value) => !isNaN(value))), { xs: !mobileFullscreen && contentLength > 1 ? exports.DEFAULT_SLIDE_BREAKPOINTS.xs : 1 });
    return Object.entries(showCount).reduce((res, [breakpointName, value]) => {
        // eslint-disable-next-line no-param-reassign
        res[constants_1.BREAKPOINTS[breakpointName] + 1] = {
            slidesPerView: value,
        };
        return res;
    }, {});
}
exports.getSliderResponsiveParams = getSliderResponsiveParams;
const useMemoized = (value) => {
    const [memoizedValue, setMemoizedValue] = (0, react_1.useState)(value);
    (0, react_1.useEffect)(() => {
        setMemoizedValue((memoized) => value && typeof value === 'object' && (0, isEqual_1.default)(memoized, value) ? memoized : value);
    }, [value]);
    return memoizedValue;
};
exports.useMemoized = useMemoized;
const setElementAtrributes = (element, attributes) => Object.entries(attributes).forEach(([attribute, value]) => element.setAttribute(attribute, String(value)));
exports.setElementAtrributes = setElementAtrributes;
