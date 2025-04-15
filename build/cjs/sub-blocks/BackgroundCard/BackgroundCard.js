"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const uikit_1 = require("@gravity-ui/uikit");
const components_1 = require("../../components/");
const theme_1 = require("../../context/theme");
const utils_1 = require("../../utils");
const Content_1 = tslib_1.__importDefault(require("../Content/Content"));
const b = (0, utils_1.block)('background-card');
const BackgroundCard = (props) => {
    const { url, title, text, border, background, backgroundPosition = 'left', paddingBottom, backgroundColor, additionalInfo, theme: cardTheme = 'default', links, buttons, analyticsEvents, urlTitle, controlPosition = 'content', list, } = props;
    const titleId = (0, uikit_1.useUniqId)();
    const theme = (0, theme_1.useTheme)();
    const hasBackgroundColor = backgroundColor || cardTheme !== 'default';
    const borderType = hasBackgroundColor ? 'none' : border;
    const areControlsInFooter = !paddingBottom && controlPosition === 'footer';
    return (react_1.default.createElement(components_1.CardBase, { className: b({
            padding: paddingBottom,
            theme: cardTheme,
            bgPosition: backgroundPosition,
        }), contentClassName: b('content'), url: url, border: borderType, analyticsEvents: analyticsEvents, urlTitle: urlTitle },
        react_1.default.createElement(components_1.CardBase.Content, null,
            react_1.default.createElement(components_1.BackgroundImage, Object.assign({ className: b('image') }, (0, utils_1.getThemedValue)(background, theme), { style: { backgroundColor } })),
            react_1.default.createElement(Content_1.default, { titleId: titleId, title: title, text: text, additionalInfo: additionalInfo, size: "s", theme: cardTheme, links: links, buttons: buttons, list: list, colSizes: { all: 12, md: 12 }, controlPosition: areControlsInFooter ? 'bottom' : 'default' }))));
};
exports.default = BackgroundCard;
