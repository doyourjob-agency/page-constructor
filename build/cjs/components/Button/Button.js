"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const components_1 = require("@gravity-ui/components");
const uikit_1 = require("@gravity-ui/uikit");
const localeContext_1 = require("../../context/localeContext/localeContext");
const hooks_1 = require("../../hooks");
const icons_1 = require("../../icons");
const models_1 = require("../../models");
const utils_1 = require("../../utils");
const i18n_1 = require("./i18n");
const utils_2 = require("./utils");
const b = (0, utils_1.block)('button-block');
const Button = (props) => {
    const { tld } = (0, react_1.useContext)(localeContext_1.LocaleContext);
    const { className, analyticsEvents, size = 'l', theme = 'normal', url, urlTitle, img, onClick: onClickOrigin, text, width } = props, rest = tslib_1.__rest(props, ["className", "analyticsEvents", "size", "theme", "url", "urlTitle", "img", "onClick", "text", "width"]);
    const defaultImgPosition = 'left';
    const handleAnalytics = (0, hooks_1.useAnalytics)(models_1.DefaultEventNames.Button, url);
    const onClick = (0, react_1.useCallback)((e) => {
        handleAnalytics(analyticsEvents);
        if (onClickOrigin) {
            onClickOrigin(e);
        }
    }, [handleAnalytics, analyticsEvents, onClickOrigin]);
    const buttonModifiers = { size, theme, width };
    const buttonImg = img instanceof Object
        ? { url: img.url, position: img.position || defaultImgPosition, alt: img.alt }
        : { url: img, position: defaultImgPosition };
    const buttonClass = img
        ? b(Object.assign({ position: buttonImg.position }, buttonModifiers), className)
        : b(Object.assign({}, buttonModifiers), className);
    const buttonProps = Object.assign(Object.assign({}, rest), { onClick });
    if (theme === 'app-store' || theme === 'google-play') {
        const platform = theme === 'app-store' ? uikit_1.Platform.IOS : uikit_1.Platform.ANDROID;
        return react_1.default.createElement(components_1.StoreBadge, { className: buttonClass, platform: platform, href: url });
    }
    let icon;
    let image = img && (react_1.default.createElement("img", { className: b('image'), src: buttonImg.url, alt: buttonImg.alt || (0, i18n_1.i18n)('image-alt') }));
    if (theme === 'github') {
        icon = react_1.default.createElement(uikit_1.Icon, { className: b('icon'), data: icons_1.Github, size: 24, qa: utils_2.ICON_QA });
        image = undefined;
    }
    const buttonTheme = theme === 'scale' ? 'accent' : theme;
    return (react_1.default.createElement(uikit_1.Button, Object.assign({ className: buttonClass, view: (0, utils_2.toCommonView)(buttonTheme), size: (0, utils_2.toCommonSize)(size), href: url ? (0, utils_1.setUrlTld)(url, tld) : undefined, title: urlTitle, width: width }, buttonProps),
        icon && buttonImg.position === 'left' ? icon : null,
        react_1.default.createElement("span", { className: b('content') },
            image && buttonImg.position === 'left' ? image : null,
            react_1.default.createElement("span", { className: b('text') }, text),
            image && buttonImg.position === 'right' ? image : null),
        icon && buttonImg.position === 'right' ? icon : null));
};
exports.default = Button;
