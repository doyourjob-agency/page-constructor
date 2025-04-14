import React, { PropsWithChildren } from 'react';
import type { Swiper } from 'swiper';
import { SlidesToShow } from '../../models';
type UseSliderProps = PropsWithChildren<{
    autoplayMs?: number;
    type?: string;
    slidesToShow?: SlidesToShow;
}>;
export declare const useSlider: ({ children, autoplayMs, type, ...props }: UseSliderProps) => {
    slider: Swiper | undefined;
    onSwiper: React.Dispatch<React.SetStateAction<Swiper | undefined>>;
    onNext: () => void;
    onPrev: () => void;
    breakpoints: Record<number, import("swiper").SwiperOptions>;
    childrenCount: number;
    isLocked: boolean;
    setIsLocked: React.Dispatch<React.SetStateAction<boolean>>;
    autoplay: false | {
        delay: number;
        disableOnInteraction: boolean;
    };
};
export {};
