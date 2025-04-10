"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const grid_1 = require("../../grid");
const utils_1 = require("../../utils");
const Anchor_1 = tslib_1.__importDefault(require("../Anchor/Anchor"));
const b = (0, utils_1.block)('block-base');
const BlockBase = (props) => {
    const { anchor, indent, backgroundFull, visible, children, className, resetPaddings, qa } = props;
    const { top, bottom } = indent || (resetPaddings ? { top: '0', bottom: '0' } : { top: 'l', bottom: 'l' });
    const isBackgroundUrl = /^https?:\/\/[^\s/$.?#].[^\s]*$/i.test(backgroundFull || '');
    return (react_1.default.createElement(grid_1.Col, { className: b({ ['reset-paddings']: resetPaddings, indentTop: top, indentBottom: bottom }, className), visible: visible, reset: true, qa: qa },
        anchor && react_1.default.createElement(Anchor_1.default, { id: anchor.url, className: b('anchor') }),
        backgroundFull && (react_1.default.createElement("div", { className: b('background-full', { top }), style: isBackgroundUrl
                ? { backgroundImage: `url(${backgroundFull})` }
                : { backgroundColor: backgroundFull } })),
        children));
};
exports.default = BlockBase;
