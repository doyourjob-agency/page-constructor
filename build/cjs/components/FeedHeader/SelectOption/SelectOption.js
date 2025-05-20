"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectOption = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const utils_1 = require("../../../utils");
const b = (0, utils_1.block)('feed-header-select-option');
const SelectOption = ({ data }) => {
    return (react_1.default.createElement("div", { className: b() },
        react_1.default.createElement("span", null, data.content)));
};
exports.SelectOption = SelectOption;
exports.default = exports.SelectOption;
