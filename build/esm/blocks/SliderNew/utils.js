import { useEffect, useState } from 'react';
import isEqual from 'lodash/isEqual';
import pickBy from 'lodash/pickBy';
import { BREAKPOINTS } from '../../constants';
import { SliderBreakpointNames } from './models';
export const DEFAULT_SLIDE_BREAKPOINTS = {
    [SliderBreakpointNames.Lg]: 3,
    [SliderBreakpointNames.Md]: 2,
    [SliderBreakpointNames.Sm]: 2,
    [SliderBreakpointNames.Xs]: 1.15,
};
export function getSliderResponsiveParams({ contentLength, slidesToShow, mobileFullscreen, }) {
    let result;
    if (typeof slidesToShow === 'number') {
        result = Object.keys(DEFAULT_SLIDE_BREAKPOINTS).reduce((acc, breakpointName) => (Object.assign(Object.assign({}, acc), { [breakpointName]: slidesToShow })), {});
    }
    else {
        result = slidesToShow || DEFAULT_SLIDE_BREAKPOINTS;
    }
    const showCount = Object.assign(Object.assign(Object.assign({}, DEFAULT_SLIDE_BREAKPOINTS), pickBy(result, (value) => !isNaN(value))), { xs: !mobileFullscreen && contentLength > 1 ? DEFAULT_SLIDE_BREAKPOINTS.xs : 1 });
    return Object.entries(showCount).reduce((res, [breakpointName, value]) => {
        // eslint-disable-next-line no-param-reassign
        res[BREAKPOINTS[breakpointName] + 1] = {
            slidesPerView: value,
        };
        return res;
    }, {});
}
export const useMemoized = (value) => {
    const [memoizedValue, setMemoizedValue] = useState(value);
    useEffect(() => {
        setMemoizedValue((memoized) => value && typeof value === 'object' && isEqual(memoized, value) ? memoized : value);
    }, [value]);
    return memoizedValue;
};
export const setElementAtrributes = (element, attributes) => Object.entries(attributes).forEach(([attribute, value]) => element.setAttribute(attribute, String(value)));
