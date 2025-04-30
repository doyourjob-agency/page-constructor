import { SliderBreakpointParams, SlidesToShow } from './models';
export declare const DEFAULT_SLIDE_BREAKPOINTS: {
    xl: number;
    lg: number;
    md: number;
    sm: number;
};
export interface GetSlidesToShowParams {
    contentLength: number;
    breakpoints?: SlidesToShow;
    mobileFullscreen?: boolean;
}
export declare const isFocusable: (element: Element) => boolean;
export declare function getSlidesToShowWithDefaults({ contentLength, breakpoints, mobileFullscreen, }: GetSlidesToShowParams): {
    sm: number;
    xl: number;
    lg: number;
    md: number;
};
export declare function getSliderResponsiveParams(breakpoints: SliderBreakpointParams): {
    breakpoint: number;
    settings: {
        slidesToShow: number;
    };
}[];
export declare function getSlidesCountByBreakpoint(breakpoint: number, breakpoints: SliderBreakpointParams): number;
export declare function getSlidesToShowCount(breakpoints: SliderBreakpointParams): number;
export declare function useRovingTabIndex(props: {
    itemCount: number;
    activeIndex: number;
    firstIndex?: number;
    uniqId: string;
}): {
    getRovingItemProps: (index: number) => Pick<React.HTMLAttributes<HTMLElement>, 'id' | 'tabIndex' | 'onFocus'>;
    rovingListProps: import("react").HTMLAttributes<HTMLElement>;
};
