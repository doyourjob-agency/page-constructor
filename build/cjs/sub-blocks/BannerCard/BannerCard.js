"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BannerCard = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const components_1 = require("../../components");
const theme_1 = require("../../context/theme");
const utils_1 = require("../../utils");
const b = (0, utils_1.block)('banner-card');
const BannerCard = (props) => {
    const { title, subtitle, button: { url, text, target, theme: buttonTheme = 'raised' } = {}, color, theme: textTheme = 'light', image, disableCompress, mediaView = 'full', } = props;
    const theme = (0, theme_1.useTheme)();
    const contentStyle = {};
    if (color) {
        contentStyle.backgroundColor = (0, utils_1.getThemedValue)(color, theme);
    }
    return (react_1.default.createElement("div", { className: b({ theme: textTheme, ['media-view']: mediaView }) },
        react_1.default.createElement("div", { className: b('content'), style: contentStyle },
            react_1.default.createElement("div", { className: b('info') },
                react_1.default.createElement("div", { className: b('text') },
                    react_1.default.createElement("h2", { className: b('title') },
                        react_1.default.createElement(components_1.HTML, null, title)),
                    subtitle && (react_1.default.createElement(components_1.YFMWrapper, { className: b('subtitle'), content: subtitle, modifiers: { constructor: true } }))),
                url && (react_1.default.createElement(components_1.RouterLink, { href: url },
                    react_1.default.createElement(components_1.Button, { className: b('button'), theme: buttonTheme, size: "xl", text: text !== null && text !== void 0 ? text : '', url: url, target: target })))),
            react_1.default.createElement(components_1.BackgroundImage, { className: b('image'), src: (0, utils_1.getThemedValue)(image, theme), disableCompress: disableCompress }))));
};
exports.BannerCard = BannerCard;
exports.default = exports.BannerCard;
