"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const uikit_1 = require("@gravity-ui/uikit");
const theme_1 = require("../../context/theme");
const BrandIconDark_1 = require("../../icons/BrandIconDark");
const BrandIconLight_1 = require("../../icons/BrandIconLight");
const BrandName_1 = require("../../icons/BrandName");
const models_1 = require("../../models");
const utils_1 = require("../../utils");
const i18n_1 = require("./i18n");
const b = (0, utils_1.block)('brand-footer');
const BrandFooter = ({ className }) => {
    const theme = (0, theme_1.useTheme)();
    return (react_1.default.createElement(uikit_1.Link, { className: b({ theme }, className), href: "https://gravity-ui.com" },
        react_1.default.createElement("div", { className: b('content') },
            react_1.default.createElement("span", { className: b('text') }, (0, i18n_1.i18n)('created-on')),
            react_1.default.createElement("div", { className: b('brand-icon') }, theme === models_1.Theme.Light ? react_1.default.createElement(BrandIconLight_1.BrandIconLight, null) : react_1.default.createElement(BrandIconDark_1.BrandIconDark, null)),
            react_1.default.createElement("div", { className: b('brand-name') },
                react_1.default.createElement(BrandName_1.BrandName, null)))));
};
exports.default = BrandFooter;
