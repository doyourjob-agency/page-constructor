"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
/* we won't use 'pc' class prefix here to let you opportunity to define yfm styles
in your project via global 'yfm' class */
const react_1 = tslib_1.__importDefault(require("react"));
const snakecase_keys_1 = tslib_1.__importDefault(require("snakecase-keys"));
const components_1 = require("../../components");
const utils_1 = require("../../utils");
const yfm = (0, utils_1.cn)('yfm');
const YFMWrapper = ({ content, modifiers, className, itemProp, id, qa }) => (react_1.default.createElement(components_1.HTML, { className: yfm(modifiers ? (0, snakecase_keys_1.default)(modifiers) : {}, className), itemProp: itemProp, id: id, qa: qa }, content));
exports.default = YFMWrapper;
