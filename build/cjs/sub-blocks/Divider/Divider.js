"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const utils_1 = require("../../utils");
const b = (0, utils_1.block)('divider-block');
const Divider = ({ size = 'm', border }) => react_1.default.createElement("div", { className: b({ size, border }) });
exports.default = Divider;
