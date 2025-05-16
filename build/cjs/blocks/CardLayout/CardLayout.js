"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const isEmpty_1 = tslib_1.__importDefault(require("lodash/isEmpty"));
const components_1 = require("../../components");
const theme_1 = require("../../context/theme");
const grid_1 = require("../../grid");
const utils_1 = require("../../utils");
const DEFAULT_SIZES = {
    all: 12,
    sm: 6,
    md: 4,
};
const b = (0, utils_1.block)('card-layout-block');
const CardLayout = ({ title, description, animated, colSizes = DEFAULT_SIZES, children, className, titleClassName, background, }) => {
    const theme = (0, theme_1.useTheme)();
    const _a = (0, utils_1.getThemedValue)(background || {}, theme), { border } = _a, backgroundImageProps = tslib_1.__rest(_a, ["border"]);
    return (react_1.default.createElement(components_1.AnimateBlock, { className: b(null, className), animate: animated },
        (title || description) && (react_1.default.createElement(components_1.Title, { title: title, subtitle: description, className: titleClassName })),
        react_1.default.createElement("div", { className: b('content', {
                'with-background': !(0, isEmpty_1.default)(background),
            }) },
            react_1.default.createElement(components_1.BackgroundImage, Object.assign({ className: b('image', { border }) }, backgroundImageProps)),
            react_1.default.createElement(grid_1.Row, null, react_1.default.Children.map(children, (child, index) => (react_1.default.createElement(grid_1.Col, { key: index, sizes: colSizes, className: b('item') }, child)))))));
};
exports.default = CardLayout;
