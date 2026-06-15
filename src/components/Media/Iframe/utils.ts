import {BREAKPOINTS} from '../../../constants';
import {ResponsiveIframeHeight} from '../../../models';

const responsiveHeightBreakpoints: Array<[keyof ResponsiveIframeHeight, number]> = [
    ['all', BREAKPOINTS.xs],
    ['sm', BREAKPOINTS.sm],
    ['md', BREAKPOINTS.md],
    ['lg', BREAKPOINTS.lg],
    ['xl', BREAKPOINTS.xl],
];

export const getIframeHeight = (
    height: number | ResponsiveIframeHeight | undefined,
    viewportWidth: number,
) => {
    if (height === undefined) {
        return 400;
    }

    if (typeof height === 'number') {
        return height;
    }

    let result = height.all ?? 400;

    responsiveHeightBreakpoints.forEach(([breakpoint, minWidth]) => {
        const breakpointHeight = height[breakpoint];

        if (viewportWidth >= minWidth && breakpointHeight !== undefined) {
            result = breakpointHeight;
        }
    });

    return result;
};
