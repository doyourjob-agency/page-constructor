import { PropsWithChildren } from 'react';
import { Swiper } from 'swiper/react';
import { ClassNameProps, Refable, SliderProps as SliderParams } from '../../models';
import 'swiper/swiper-bundle.css';
export interface SliderNewProps extends Omit<SliderParams, 'children'>, Partial<Pick<Swiper, 'onSlideChange' | 'onSlideChangeTransitionStart' | 'onSlideChangeTransitionEnd' | 'onActiveIndexChange' | 'onBreakpoint'>>, Refable<HTMLDivElement>, ClassNameProps {
    type?: string;
    anchorId?: string;
    dotsClassName?: string;
    blockClassName?: string;
    arrowSize?: number;
}
export declare const SliderNewBlock: ({ animated, title, description, type, anchorId, arrows, adaptive, autoplay: autoplayMs, dots, className, dotsClassName, disclaimer, children, blockClassName, arrowSize, slidesToShow, onSlideChange, onSlideChangeTransitionStart, onSlideChangeTransitionEnd, onActiveIndexChange, onBreakpoint, }: PropsWithChildren<SliderNewProps>) => JSX.Element;
export default SliderNewBlock;
