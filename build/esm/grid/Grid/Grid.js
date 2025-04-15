import React from 'react';
import { block } from '../../utils';
import '../styles/bootstrap.css';
import './Grid.css';
const b = block('Grid');
export const Grid = ({ debug, children, className, style, containerClass = '', }) => (React.createElement("div", { style: style, className: b({ debug }, className) },
    React.createElement("div", { className: `container-fluid ${containerClass}` }, children)));
