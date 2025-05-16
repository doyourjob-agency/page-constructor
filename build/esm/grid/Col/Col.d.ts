import React, { CSSProperties } from 'react';
import { QAProps, Refable, Roleable } from '../../models';
import { GridColumnClassParams } from '../types';
export interface GridColumnProps extends GridColumnClassParams, Refable<HTMLDivElement>, QAProps, Roleable {
    style?: CSSProperties;
    children?: React.ReactNode;
}
export declare const Col: React.ForwardRefExoticComponent<Pick<React.PropsWithChildren<GridColumnProps>, "style" | "children" | "hidden" | "sizes" | "className" | "role" | "qa" | "offsets" | "orders" | "visible" | "alignSelf" | "justifyContent" | "reset"> & React.RefAttributes<HTMLDivElement>>;
