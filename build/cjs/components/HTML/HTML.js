"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const utils_1 = require("../../utils");
const HTML = ({ children, block = false, className, itemProp, id, qa, }) => {
    if (!children) {
        return null;
    }
    return react_1.default.createElement(block || (0, utils_1.hasBlockTag)(children) ? 'div' : 'span', {
        dangerouslySetInnerHTML: { __html: children },
        className,
        itemProp,
        id,
        'data-qa': qa,
    });
};
exports.default = HTML;
