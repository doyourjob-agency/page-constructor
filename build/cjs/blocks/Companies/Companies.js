"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompaniesBlock = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const components_1 = require("../../components");
const AnimateBlock_1 = tslib_1.__importDefault(require("../../components/AnimateBlock/AnimateBlock"));
const theme_1 = require("../../context/theme");
const utils_1 = require("../../utils");
const b = (0, utils_1.block)('companies-block');
const CompaniesBlock = ({ title, description, images, animated }) => {
    const theme = (0, theme_1.useTheme)();
    const themedImages = (0, utils_1.getThemedValue)(images, theme) || {};
    return (react_1.default.createElement(AnimateBlock_1.default, { className: b(), offset: 150, animate: animated },
        react_1.default.createElement("div", { className: b('content') },
            react_1.default.createElement(components_1.Title, { title: title, subtitle: description, colSizes: { all: 12, sm: 12 } }),
            react_1.default.createElement("div", { className: b('images') },
                react_1.default.createElement(components_1.Image, Object.assign({}, themedImages, { className: b('image') }))))));
};
exports.CompaniesBlock = CompaniesBlock;
exports.default = exports.CompaniesBlock;
