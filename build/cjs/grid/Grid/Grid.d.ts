import React from 'react';
export interface GridProps {
    debug?: boolean;
    className?: string;
    containerClass?: string;
    style?: React.CSSProperties;
}
export declare const Grid: ({ debug, children, className, style, containerClass, }: React.PropsWithChildren<GridProps>) => JSX.Element;
