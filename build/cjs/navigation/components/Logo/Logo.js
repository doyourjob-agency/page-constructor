"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logo = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const components_1 = require("../../../components");
const utils_1 = require("../../../components/Media/Image/utils");
const RouterLink_1 = tslib_1.__importDefault(require("../../../components/RouterLink/RouterLink"));
const locationContext_1 = require("../../../context/locationContext");
const theme_1 = require("../../../context/theme");
const utils_2 = require("../../../utils");
const i18n_1 = require("./i18n");
const b = (0, utils_2.block)('logo');
const Logo = (_a) => {
    var { alt = (0, i18n_1.i18n)('image-alt') } = _a, restProps = tslib_1.__rest(_a, ["alt"]);
    const props = Object.assign(Object.assign({}, restProps), { alt });
    const { hostname, Link } = (0, react_1.useContext)(locationContext_1.LocationContext);
    const theme = (0, theme_1.useTheme)();
    const themedLogoProps = (0, utils_2.getThemedValue)(props, theme) || props;
    const imageData = (0, utils_1.getMediaImage)(themedLogoProps.icon || props.icon);
    imageData.alt = alt;
    const textData = themedLogoProps.text || props.text;
    const url = themedLogoProps.url || props.url || '/';
    const urlTitle = themedLogoProps.urlTitle || props.urlTitle || textData;
    const linkExtraProps = (0, utils_2.getLinkProps)(url, hostname);
    const content = (react_1.default.createElement(react_1.Fragment, null,
        imageData && react_1.default.createElement(components_1.Image, Object.assign({ className: b('icon') }, imageData)),
        react_1.default.createElement("span", { className: b('text') }, textData)));
    return (react_1.default.createElement(RouterLink_1.default, { href: url, passHref: true }, Link ? (react_1.default.createElement("span", { className: b(null, props.className) }, content)) : (react_1.default.createElement("a", Object.assign({ className: b(null, props.className), href: url, title: urlTitle }, linkExtraProps), content))));
};
exports.Logo = Logo;
exports.default = exports.Logo;
