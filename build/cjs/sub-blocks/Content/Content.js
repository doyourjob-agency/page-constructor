"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const uikit_1 = require("@gravity-ui/uikit");
const components_1 = require("../../components");
const grid_1 = require("../../grid");
const utils_1 = require("../../utils");
const blocks_1 = require("../../utils/blocks");
const b = (0, utils_1.block)('content');
function getTextSize(size) {
    switch (size) {
        case 's':
            return 's';
        case 'l':
        default:
            return 'm';
    }
}
const Content = (props) => {
    const { title, subtitle, subtitleLinks, titleId: titleIdFromProps, text, textId, additionalInfo, size = 'l', links, buttons, colSizes = { all: 12, sm: 8 }, centered, theme, className, list, qa, controlPosition, } = props;
    const qaAttributes = (0, blocks_1.getQaAttrubutes)(qa, ['links', 'link', 'buttons', 'button', 'list']);
    const titleProps = !title || typeof title === 'string'
        ? { text: title, textSize: getTextSize(size) }
        : title;
    const hasTitle = Boolean(title);
    const defaultTitleId = (0, uikit_1.useUniqId)();
    const titleId = titleIdFromProps || defaultTitleId;
    return (react_1.default.createElement(grid_1.Col, { className: b({ size, centered, theme, 'control-position': controlPosition }, className), reset: true, sizes: colSizes, qa: qaAttributes.container },
        title && (react_1.default.createElement(components_1.Title, { className: b('title'), title: titleProps, subtitle: subtitle, subtitleBold: true, colSizes: { all: 12 }, id: titleId })),
        subtitleLinks && (react_1.default.createElement(components_1.Links, { className: b('subtitle-links', { size }), size: size, links: subtitleLinks, titleId: titleId, qa: qaAttributes.links, linkQa: qaAttributes.link })),
        text && (react_1.default.createElement("div", { className: b('text', { ['without-title']: !hasTitle }) },
            react_1.default.createElement(components_1.YFMWrapper, { content: text, modifiers: { constructor: true, [`constructor-size-${size}`]: true }, id: textId }))),
        (list === null || list === void 0 ? void 0 : list.length) ? (react_1.default.createElement("div", { className: b('list') },
            react_1.default.createElement(components_1.ContentList, { list: list, size: size, qa: qaAttributes.list, theme: theme }))) : null,
        additionalInfo && (react_1.default.createElement("div", { className: b('notice') },
            react_1.default.createElement(components_1.YFMWrapper, { content: additionalInfo, modifiers: {
                    constructor: true,
                    'constructor-notice': true,
                    [`constructor-size-${size}`]: true,
                } }))),
        links && (react_1.default.createElement(components_1.Links, { className: b('links', { size }), size: size, links: links, titleId: titleId, qa: qaAttributes.links, linkQa: qaAttributes.link })),
        buttons && (react_1.default.createElement(components_1.Buttons, { className: b('buttons', { size }), size: size, buttons: buttons, titleId: titleId, qa: qaAttributes.buttons, buttonQa: qaAttributes.button }))));
};
exports.default = Content;
