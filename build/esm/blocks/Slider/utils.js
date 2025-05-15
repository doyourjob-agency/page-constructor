import { useEffect, useRef, useState } from 'react';
import pickBy from 'lodash/pickBy';
import { BREAKPOINTS } from '../../constants';
import { SliderBreakpointNames } from './models';
export const DEFAULT_SLIDE_BREAKPOINTS = {
    [SliderBreakpointNames.Xl]: 3,
    [SliderBreakpointNames.Lg]: 2,
    [SliderBreakpointNames.Md]: 2,
    [SliderBreakpointNames.Sm]: 1.15,
};
const BREAKPOINT_NAMES_BY_VALUES = Object.entries(BREAKPOINTS).reduce((acc, [key, value]) => (Object.assign(Object.assign({}, acc), { [value]: key })), {});
export const isFocusable = (element) => {
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
export function getSlidesToShowWithDefaults({ contentLength, breakpoints, mobileFullscreen, }) {
    let result;
    if (typeof breakpoints === 'number') {
        result = Object.keys(DEFAULT_SLIDE_BREAKPOINTS).reduce((acc, breakpointName) => (Object.assign(Object.assign({}, acc), { [breakpointName]: breakpoints })), {});
    }
    else {
        result = breakpoints || DEFAULT_SLIDE_BREAKPOINTS;
    }
    return Object.assign(Object.assign(Object.assign({}, DEFAULT_SLIDE_BREAKPOINTS), pickBy(result, (value) => !isNaN(value))), { sm: !mobileFullscreen && contentLength > 1 ? DEFAULT_SLIDE_BREAKPOINTS.sm : 1 });
}
export function getSliderResponsiveParams(breakpoints) {
    return Object.entries(breakpoints).map(([breakpointName, slidesToShow]) => ({
        breakpoint: BREAKPOINTS[breakpointName],
        settings: { slidesToShow },
    }));
}
export function getSlidesCountByBreakpoint(breakpoint, breakpoints) {
    const breakpointName = BREAKPOINT_NAMES_BY_VALUES[breakpoint];
    return Math.floor(breakpoints[breakpointName]);
}
export function getSlidesToShowCount(breakpoints) {
    return Math.floor(Math.max(...Object.values(breakpoints)));
}
const getRovingListItemId = (uniqId, index) => `${uniqId}-roving-tabindex-item-${index}`;
export function useRovingTabIndex(props) {
    const { itemCount, activeIndex, firstIndex = 0, uniqId } = props;
    const [currentIndex, setCurrentIndex] = useState(firstIndex);
    const hasFocusRef = useRef(false);
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
    useEffect(() => {
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
