"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grid = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const utils_1 = require("../../utils");
const b = (0, utils_1.block)('Grid');
const Grid = ({ debug, children, className, style, containerClass = '', }) => (react_1.default.createElement("div", { style: style, className: b({ debug }, className) },
    react_1.default.createElement("div", { className: `container-fluid ${containerClass}` }, children)));
exports.Grid = Grid;
