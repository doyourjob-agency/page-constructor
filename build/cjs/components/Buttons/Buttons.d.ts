import React from 'react';
import { ButtonProps, ContentSize } from '../../models';
type ButtonsProps = {
    className?: string;
    buttons?: ButtonProps[];
    size?: ContentSize;
    titleId?: string;
    qa?: string;
    buttonQa?: string;
};
declare const Buttons: React.FC<ButtonsProps>;
export default Buttons;
