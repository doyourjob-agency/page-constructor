import React, { PropsWithChildren } from 'react';
import './OverflowScroller.css';
type Arrow = 'left' | 'right';
export interface OverflowScrollerProps {
    className?: string;
    onScrollStart?: () => void;
    onScrollEnd?: () => void;
    arrowSize?: number;
    arrowClassName?: string;
}
export interface OverflowScrollerState {
    arrows: Arrow[];
    scrollValue: number;
}
export default class OverflowScroller extends React.Component<PropsWithChildren<OverflowScrollerProps>, OverflowScrollerState> {
    state: {
        arrows: Arrow[];
        scrollValue: number;
    };
    containerRef: React.RefObject<HTMLDivElement>;
    wrapperRef: React.RefObject<HTMLDivElement>;
    componentDidMount(): void;
    componentDidUpdate(_prepvProps: OverflowScrollerProps, { scrollValue: prevScrollValue }: OverflowScrollerState): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    private checkOverflow;
    private handleScrollClick;
}
export {};
