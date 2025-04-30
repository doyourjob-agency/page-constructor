import React from 'react';
import { Button } from '@gravity-ui/uikit';
import { block } from '../../utils';
import './ErrorWrapper.css';
const b = block('ErrorWrapper');
const ErrorWrapper = ({ text, buttonText, className, handler, isError, children, }) => isError ? (React.createElement("div", { className: b(null, className) },
    React.createElement("div", { className: b('text') }, text),
    handler && (React.createElement(Button, { size: "s", onClick: handler }, buttonText)))) : (React.createElement(React.Fragment, null, children));
export default ErrorWrapper;
