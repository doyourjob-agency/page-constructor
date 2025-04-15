"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const grid_1 = require("../../grid");
const utils_1 = require("../../utils");
const YFMWrapper_1 = tslib_1.__importDefault(require("../YFMWrapper/YFMWrapper"));
const TitleItem_1 = tslib_1.__importDefault(require("./TitleItem"));
const b = (0, utils_1.block)('title');
const Title = ({ title, subtitle, subtitleBold, className, colSizes = { all: 12, sm: 8 }, id, }) => {
    if (!title && !subtitle) {
        return null;
    }
    const _a = !title || typeof title === 'string' ? { text: title } : title, { text } = _a, titleProps = tslib_1.__rest(_a, ["text"]);
    return (react_1.default.createElement("div", { className: b(null, className), id: id },
        text && (react_1.default.createElement(grid_1.Col, { reset: true, sizes: colSizes },
            react_1.default.createElement(TitleItem_1.default, Object.assign({ text: text }, titleProps)))),
        subtitle && (react_1.default.createElement(grid_1.Col, { reset: true, sizes: colSizes },
            react_1.default.createElement("div", { className: b('description', {
                    titleSize: titleProps === null || titleProps === void 0 ? void 0 : titleProps.textSize,
                    bold: subtitleBold,
                }) },
                react_1.default.createElement(YFMWrapper_1.default, { content: subtitle, modifiers: { constructor: true } }))))));
};
exports.default = Title;
