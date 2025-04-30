import React from 'react';
import { Settings } from 'react-slick';
import { ClassNameProps, Refable, SliderProps as SliderParams } from '../../models';
export interface SliderProps extends Omit<SliderParams, 'children'>, Refable<HTMLDivElement>, ClassNameProps, Pick<Settings, 'lazyLoad'> {
    type?: string;
    anchorId?: string;
    onAfterChange?: (index: number) => void;
    onBeforeChange?: (current: number, next: number) => void;
    dotsClassName?: string;
    blockClassName?: string;
    arrowSize?: number;
}
export declare const SliderBlock: (props: React.PropsWithChildren<SliderProps>) => JSX.Element;
export default SliderBlock;
