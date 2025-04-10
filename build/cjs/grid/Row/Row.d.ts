import React from 'react';
import { Refable } from '../../models/common';
import { GridAlignItems, GridJustifyContent } from '../types';
export interface RowProps extends Refable<HTMLDivElement> {
    className?: string;
    justifyContent?: GridJustifyContent;
    alignItems?: GridAlignItems;
    noGutter?: boolean;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}
export declare const Row: React.ForwardRefExoticComponent<Pick<RowProps, "style" | "children" | "className" | "justifyContent" | "alignItems" | "noGutter"> & React.RefAttributes<HTMLDivElement>>;
