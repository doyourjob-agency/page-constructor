import React from 'react';
import { EditBlockProps } from '../../types';
import './EditBlock.css';
export declare enum EditBlockControls {
    Up = "up",
    Down = "down",
    Copy = "copy",
    Delete = "delete"
}
export type EditBlockActions = {
    [key in EditBlockControls]?: () => void;
};
declare const _default: React.MemoExoticComponent<({ actions, isActive, onSelect, isHeader, children, resetPaddings, }: EditBlockProps) => JSX.Element>;
export default _default;
