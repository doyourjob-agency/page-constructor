"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chevron = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const svg_1 = require("../utils/svg");
const Chevron = (props) => (react_1.default.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", width: "16", height: "16", stroke: "currentColor" }, svg_1.a11yHiddenSvgProps, props),
    react_1.default.createElement("path", { fill: "none", d: "M3 6l5 5 5-5" })));
exports.Chevron = Chevron;
