"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const theme_1 = require("../../context/theme");
const utils_1 = require("../../utils");
const RootCn = ({ className, children }) => {
    const theme = (0, theme_1.useTheme)();
    return react_1.default.createElement("div", { className: (0, utils_1.rootCn)({ theme }, className) }, children);
};
exports.default = RootCn;
