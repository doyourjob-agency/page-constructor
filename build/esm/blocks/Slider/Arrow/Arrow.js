import React from 'react';
import ToggleArrow from '../../../components/ToggleArrow/ToggleArrow';
import { block } from '../../../utils';
import { i18n } from '../i18n';
import './Arrow.css';
const b = block('slider-block-arrow');
const Arrow = ({ type, handleClick, className, size = 16 }) => (React.createElement("div", { className: b({ type }, className) },
    React.createElement("button", { className: b('button'), onClick: () => handleClick && handleClick(type), "aria-label": i18n(`arrow-${type}`) },
        React.createElement("span", { className: b('icon-wrapper') },
            React.createElement(ToggleArrow, { size: size, type: 'horizontal', iconType: "navigation", className: b('icon') })))));
export default Arrow;
