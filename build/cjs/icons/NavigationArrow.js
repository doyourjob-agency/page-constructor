"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavigationArrow = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const svg_1 = require("../utils/svg");
const NavigationArrow = (props) => (react_1.default.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "9", height: "9", fill: "none", viewBox: "0 0 9 9" }, svg_1.a11yHiddenSvgProps, props),
    react_1.default.createElement("path", { d: "M3 1H8M8 1V6M8 1L1 8", stroke: "currentColor", strokeOpacity: "0.7", strokeWidth: "1.2", strokeLinecap: "square" })));
exports.NavigationArrow = NavigationArrow;
