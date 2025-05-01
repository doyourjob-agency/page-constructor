import React from 'react';
import { SVGIconData } from '@gravity-ui/uikit/build/esm/components/Icon/types';
export declare const defaultIconId = "icon-test-id";
export interface ControlProps {
    icon: SVGIconData;
    theme?: 'primary' | 'secondary' | 'link' | 'accent';
    size?: 'xs' | 's' | 'm' | 'l';
    iconSize?: number;
    disabled?: boolean;
    className?: string;
    onClick?: (event: React.MouseEvent) => void;
    qa?: string;
}
declare const Control: (props: ControlProps) => JSX.Element;
export default Control;
