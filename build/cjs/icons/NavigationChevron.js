"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavigationChevron = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const svg_1 = require("../utils/svg");
const NavigationChevron = (props) => (react_1.default.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 12 12", fill: "currentColor" }, svg_1.a11yHiddenSvgProps, props),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1 3L6 8L11 3L12 4L5.99997 10L-4.37114e-08 4L1 3Z" })));
exports.NavigationChevron = NavigationChevron;
