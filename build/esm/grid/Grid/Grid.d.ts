import React from 'react';
import '../styles/bootstrap.css';
import './Grid.css';
export interface GridProps {
    debug?: boolean;
    className?: string;
    containerClass?: string;
    style?: React.CSSProperties;
}
export declare const Grid: ({ debug, children, className, style, containerClass, }: React.PropsWithChildren<GridProps>) => JSX.Element;
