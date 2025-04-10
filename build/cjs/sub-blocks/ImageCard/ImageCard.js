"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const uikit_1 = require("@gravity-ui/uikit");
const components_1 = require("../../components");
const utils_1 = require("../../components/Media/Image/utils");
const theme_1 = require("../../context/theme");
const models_1 = require("../../models");
const utils_2 = require("../../utils");
const Content_1 = tslib_1.__importDefault(require("../Content/Content"));
const b = (0, utils_2.block)('image-card');
const CONTENT_COL_SIZES = { all: 12, md: 12 };
const ImageCard = (props) => {
    const { border = 'shadow', title, text, image, enableImageBorderRadius = false, direction = models_1.ImageCardDirection.Direct, margins, backgroundColor, url, target, urlTitle, additionalInfo, links, buttons, list, theme: cardTheme = 'default', size = 's', controlPosition = 'content', } = props;
    const globalTheme = (0, theme_1.useTheme)();
    const areControlsInFooter = controlPosition === 'footer';
    const hasContent = Boolean(text || title || buttons || links || list);
    const themedImage = (0, utils_2.getThemedValue)(image, globalTheme);
    const imageProps = (0, utils_1.getMediaImage)(themedImage);
    const titleId = (0, uikit_1.useUniqId)();
    const cardContent = (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: b('image', { margins }) },
            react_1.default.createElement(components_1.Image, Object.assign({ className: b('image_inner', { radius: enableImageBorderRadius }) }, imageProps))),
        hasContent && (react_1.default.createElement("div", { className: b('content') },
            react_1.default.createElement(Content_1.default, { titleId: titleId, title: title, text: text, links: links, buttons: buttons, list: list, theme: cardTheme, additionalInfo: additionalInfo, size: size, colSizes: CONTENT_COL_SIZES, controlPosition: areControlsInFooter ? 'bottom' : 'default' })))));
    return url ? (react_1.default.createElement(uikit_1.Link, { href: url, target: target, rel: target === '_blank' ? 'noopener noreferrer' : undefined, className: b({ border, 'with-content': hasContent, direction }), title: urlTitle, style: { backgroundColor }, extraProps: {
            draggable: false,
            onDragStart: (e) => e.preventDefault(),
        } }, cardContent)) : (react_1.default.createElement("div", { className: b({ border, 'with-content': hasContent, direction }), style: { backgroundColor } }, cardContent));
};
exports.default = ImageCard;
