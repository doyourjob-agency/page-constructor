"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicesMobileMenu = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const icons_1 = require("@gravity-ui/icons");
const uikit_1 = require("@gravity-ui/uikit");
const utils_1 = require("../../../utils");
const i18n_1 = require("../i18n");
const b = (0, utils_1.block)('services-mobile-menu');
const ServicesMobileMenu = ({ items }) => {
    const [isActive, setIsActive] = (0, react_1.useState)(false);
    const toggleActive = () => {
        setIsActive(!isActive);
    };
    return (react_1.default.createElement("div", { className: b() },
        react_1.default.createElement("button", { className: b('title'), onClick: toggleActive },
            react_1.default.createElement("h5", { className: b('title-text') }, (0, i18n_1.i18n)('menuTitle')),
            react_1.default.createElement("div", { className: b('rotated-box', { rotate: isActive }) },
                react_1.default.createElement(icons_1.ChevronDown, { height: 22, width: 22 }))),
        react_1.default.createElement("div", { className: b('list-container', { 'zero-height': !isActive }) },
            react_1.default.createElement("menu", { className: b('list') }, items.map(({ name, slug }) => (react_1.default.createElement("li", { key: slug, className: b('elem') },
                react_1.default.createElement(uikit_1.Link, { className: b('link'), href: `#${slug}`, target: "_self", view: "primary", onClick: toggleActive }, name))))))));
};
exports.ServicesMobileMenu = ServicesMobileMenu;
exports.default = exports.ServicesMobileMenu;
