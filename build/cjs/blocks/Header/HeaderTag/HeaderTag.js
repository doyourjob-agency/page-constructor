"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderTag = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const utils_1 = require("../../../utils");
const b = (0, utils_1.block)('header-block-tag');
const HeaderTag = ({ tag }) => {
    if (!tag)
        return null;
    return react_1.default.createElement("div", { className: b() }, tag);
};
exports.HeaderTag = HeaderTag;
exports.default = exports.HeaderTag;
