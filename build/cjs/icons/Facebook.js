"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Facebook = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const svg_1 = require("../utils/svg");
const Facebook = (props) => (react_1.default.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24", height: "24", fill: "currentColor" }, svg_1.a11yHiddenSvgProps, props),
    react_1.default.createElement("path", { d: "M13.79 22H9.93v-9.501H8V9.225h1.93V7.26C9.93 4.589 11.017 3 14.113 3h2.577v3.275h-1.61c-1.206 0-1.285.457-1.285 1.311l-.006 1.639h2.918l-.341 3.274H13.79V22z" })));
exports.Facebook = Facebook;
