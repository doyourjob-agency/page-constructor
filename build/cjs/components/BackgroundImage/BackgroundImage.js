"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.qaIdByDefault = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const utils_1 = require("../../utils");
const Image_1 = tslib_1.__importDefault(require("../Image/Image"));
exports.qaIdByDefault = 'background-image';
const b = (0, utils_1.block)('storage-background-image');
const BackgroundImage = (props) => {
    const { children, src, desktop, className, imageClassName, style, hide, qa } = props;
    const qaAttributes = (0, utils_1.getQaAttrubutes)(qa || exports.qaIdByDefault);
    return (react_1.default.createElement("div", { className: b(null, className), style: style, "data-qa": qa || exports.qaIdByDefault },
        (src || desktop) && !hide && (react_1.default.createElement(Image_1.default, Object.assign({}, props, { className: b('img', imageClassName), qa: qaAttributes.image }))),
        children && react_1.default.createElement("div", { className: b('container') }, children)));
};
exports.default = BackgroundImage;
