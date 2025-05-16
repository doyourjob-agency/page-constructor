"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const ToggleArrow_1 = tslib_1.__importDefault(require("../../../components/ToggleArrow/ToggleArrow"));
const utils_1 = require("../../../utils");
const i18n_1 = require("../i18n");
const b = (0, utils_1.block)('slider-new-block-arrow');
const Arrow = ({ type, onClick, className, size = 16, extraProps }) => (react_1.default.createElement("div", { className: b({ type }, className) },
    react_1.default.createElement("button", Object.assign({ className: b('button'), onClick: onClick, "aria-label": (0, i18n_1.i18n)(`arrow-${type}`) }, extraProps),
        react_1.default.createElement("span", { className: b('icon-wrapper') },
            react_1.default.createElement(ToggleArrow_1.default, { size: size, type: 'horizontal', iconType: "navigation", className: b('icon') })))));
exports.default = Arrow;
