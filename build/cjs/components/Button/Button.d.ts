import React from 'react';
import { ButtonProps as ButtonParams, QAProps } from '../../models';
export interface ButtonProps extends Omit<ButtonParams, 'url'>, QAProps {
    className?: string;
    url?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}
declare const Button: (props: ButtonProps) => JSX.Element;
export default Button;
