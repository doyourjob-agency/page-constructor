"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotesItem = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const components_1 = require("../../../components");
const utils_1 = require("../../../utils");
const i18n_1 = require("../i18n");
const b = (0, utils_1.block)('quotes-item');
const QuotesItem = ({ theme = 'light', avatar, logo, name, description, quote, style = 'normal', buttonText, buttonUrl, }) => (react_1.default.createElement("div", { className: b({ theme }) },
    react_1.default.createElement("div", { className: b('header') },
        react_1.default.createElement("div", { className: b('author') },
            avatar && (react_1.default.createElement(components_1.Image, { className: b('author-avatar'), src: avatar, alt: (0, i18n_1.i18n)('avatar') })),
            react_1.default.createElement("div", { className: b('author-wrap') },
                name && react_1.default.createElement("div", { className: b('author-title') }, name),
                description && react_1.default.createElement("div", { className: b('author-text') }, description))),
        logo && react_1.default.createElement(components_1.Image, { className: b('logo'), src: logo, alt: (0, i18n_1.i18n)('logo') })),
    react_1.default.createElement("blockquote", { className: b('body', { style }) }, quote),
    buttonText && (react_1.default.createElement("div", { className: b('footer') },
        react_1.default.createElement(components_1.Button, { theme: theme === 'light' ? 'outlined' : 'outlined-contrast', text: buttonText, size: "xl", url: buttonUrl })))));
exports.QuotesItem = QuotesItem;
exports.default = exports.QuotesItem;
