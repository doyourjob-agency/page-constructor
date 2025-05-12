import React, { PropsWithChildren } from 'react';
export interface OutsideClickProps {
    onOutsideClick: () => void;
    className?: string;
    onClick?: () => void;
}
export default class OutsideClick extends React.Component<PropsWithChildren<OutsideClickProps>> {
    ref: React.RefObject<HTMLDivElement>;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    handleOutsideClick: (e: MouseEvent) => void;
}
