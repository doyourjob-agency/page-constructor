import React from 'react';
import { ClassNameProps } from '../../../models';
export type ArrowType = 'left' | 'right';
export interface ArrowProps {
    type: ArrowType;
    onClick?: () => void;
    size?: number;
    extraProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}
declare const Arrow: ({ type, onClick, className, size, extraProps }: ArrowProps & ClassNameProps) => JSX.Element;
export default Arrow;
