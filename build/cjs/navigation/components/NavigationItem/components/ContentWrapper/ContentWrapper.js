"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentWrapper = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const components_1 = require("../../../../../components");
const utils_1 = require("../../../../../utils");
const b = (0, utils_1.block)('content-wrapper');
const ContentWrapper = ({ text, icon, iconSize }) => {
    const iconSizeStyle = (0, react_1.useMemo)(() => (iconSize ? { height: `${iconSize}px`, width: `${iconSize}px` } : {}), [iconSize]);
    return (react_1.default.createElement(react_1.Fragment, null,
        icon && typeof icon !== 'string' && (react_1.default.createElement(components_1.Image, Object.assign({ className: b('icon') }, icon, { style: iconSizeStyle }))),
        react_1.default.createElement("span", { className: b('text') }, text)));
};
exports.ContentWrapper = ContentWrapper;
