import React, { ErrorInfo, PropsWithChildren } from 'react';
import { BlockDecorationProps } from '../../../models';
interface ErrorBoundaryProps extends PropsWithChildren, Partial<BlockDecorationProps> {
}
interface ErrorBoundaryState {
    error?: string;
}
export declare class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    state: ErrorBoundaryState;
    componentDidCatch(error: Error, info: ErrorInfo): void;
    render(): string | number | boolean | React.ReactFragment | JSX.Element | null | undefined;
}
export {};
