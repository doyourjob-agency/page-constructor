"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const uikit_1 = require("@gravity-ui/uikit");
const locationContext_1 = require("../../context/locationContext");
const hooks_1 = require("../../hooks");
const Facebook_1 = require("../../icons/Facebook");
const Linkedin_1 = require("../../icons/Linkedin");
const Telegram_1 = require("../../icons/Telegram");
const Twitter_1 = require("../../icons/Twitter");
const Vk_1 = require("../../icons/Vk");
const models_1 = require("../../models");
const utils_1 = require("../../utils");
const i18n_1 = require("./i18n");
const icons = {
    facebook: Facebook_1.Facebook,
    twitter: Twitter_1.Twitter,
    linkedin: Linkedin_1.Linkedin,
    vk: Vk_1.Vk,
    telegram: Telegram_1.Telegram,
};
const b = (0, utils_1.block)('share-block');
const Share = ({ items, title }) => {
    const { pathname, hostname } = (0, react_1.useContext)(locationContext_1.LocationContext);
    const handleAnalytics = (0, hooks_1.useAnalytics)(models_1.DefaultEventNames.ShareButton);
    const handleButtonClick = (0, react_1.useCallback)(() => handleAnalytics(), [handleAnalytics]);
    return (react_1.default.createElement("div", { className: b() },
        react_1.default.createElement("h5", { className: b('title') }, title || (0, i18n_1.i18n)('constructor-share')),
        react_1.default.createElement("div", { className: b('items') }, items.map((type) => {
            const url = (0, utils_1.getAbsolutePath)(hostname, pathname);
            const socialUrl = (0, utils_1.getShareLink)(url, type);
            const icon = icons[type];
            const urlTitle = (0, i18n_1.i18n)(`${type}-title`);
            const buttonLabel = (0, i18n_1.i18n)(`${type}-label`);
            return (react_1.default.createElement(uikit_1.Button, { key: type, view: "flat", size: "l", target: "_blank", href: socialUrl, className: b('item', { type: type.toLowerCase() }), onClick: handleButtonClick, title: urlTitle, extraProps: {
                    'aria-label': buttonLabel,
                } }, icon && react_1.default.createElement(uikit_1.Icon, { data: icon, size: 24, className: b('icon', { type }) })));
        }))));
};
exports.default = Share;
