import React from 'react';
import ToggleArrow from '../../../components/ToggleArrow/ToggleArrow';
import { block } from '../../../utils';
import { i18n } from '../i18n';
import './Arrow.css';
const b = block('slider-new-block-arrow');
const Arrow = ({ type, onClick, className, size = 16, extraProps }) => (React.createElement("div", { className: b({ type }, className) },
    React.createElement("button", Object.assign({ className: b('button'), onClick: onClick, "aria-label": i18n(`arrow-${type}`) }, extraProps),
        React.createElement("span", { className: b('icon-wrapper') },
            React.createElement(ToggleArrow, { size: size, type: 'horizontal', iconType: "navigation", className: b('icon') })))));
export default Arrow;
