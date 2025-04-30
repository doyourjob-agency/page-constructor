"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Col = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const utils_1 = require("../utils");
exports.Col = (0, react_1.forwardRef)((props, ref) => {
    const { children, style, qa, role } = props, rest = tslib_1.__rest(props, ["children", "style", "qa", "role"]);
    return (react_1.default.createElement("div", { ref: ref, className: (0, utils_1.getColClass)(rest), style: style, "data-qa": qa, role: role }, children));
});
exports.Col.displayName = 'Col';
