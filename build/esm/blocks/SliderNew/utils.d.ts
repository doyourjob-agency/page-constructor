import type { SwiperOptions } from 'swiper/types/swiper-options';
import { SlidesToShow } from './models';
export declare const DEFAULT_SLIDE_BREAKPOINTS: {
    lg: number;
    md: number;
    sm: number;
    xs: number;
};
export interface GetSlidesToShowParams {
    contentLength: number;
    slidesToShow?: SlidesToShow;
    mobileFullscreen?: boolean;
}
export declare function getSliderResponsiveParams({ contentLength, slidesToShow, mobileFullscreen, }: GetSlidesToShowParams): Record<number, SwiperOptions>;
export declare const useMemoized: <T>(value: T) => T;
export declare const setElementAtrributes: (element: Element, attributes: Record<string, unknown>) => void;
