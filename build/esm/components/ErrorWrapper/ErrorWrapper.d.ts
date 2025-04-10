import React from 'react';
import { ClassNameProps } from '../../models';
import './ErrorWrapper.css';
export interface ErrorWrapperProps extends ClassNameProps {
    text: string;
    handler: () => void;
    isError: boolean;
    buttonText: string;
    children: React.ReactNode;
}
declare const ErrorWrapper: ({ text, buttonText, className, handler, isError, children, }: React.PropsWithChildren<ErrorWrapperProps>) => JSX.Element;
export default ErrorWrapper;
