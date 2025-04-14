"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const uikit_1 = require("@gravity-ui/uikit");
const components_1 = require("../../components");
const theme_1 = require("../../context/theme");
const sub_blocks_1 = require("../../models/constructor-items/sub-blocks");
const utils_1 = require("../../utils");
const Content_1 = tslib_1.__importDefault(require("../Content/Content"));
const b = (0, utils_1.block)('basic-card');
const BasicCard = (props) => {
    const { title, text, icon, additionalInfo, links, list, buttons, iconPosition = sub_blocks_1.IconPosition.Top, controlPosition = 'content' } = props, cardParams = tslib_1.__rest(props, ["title", "text", "icon", "additionalInfo", "links", "list", "buttons", "iconPosition", "controlPosition"]);
    const titleId = (0, uikit_1.useUniqId)();
    const descriptionId = (0, uikit_1.useUniqId)();
    const areControlsInFooter = controlPosition === 'footer';
    const theme = (0, theme_1.useTheme)();
    const themedIcon = (0, utils_1.getThemedValue)(icon, theme);
    return (react_1.default.createElement(components_1.CardBase, Object.assign({ className: b(), contentClassName: b('content') }, cardParams, { extraProps: { 'aria-describedby': descriptionId, 'aria-labelledby': titleId } }),
        react_1.default.createElement(components_1.CardBase.Content, null,
            react_1.default.createElement(components_1.IconWrapper, { icon: themedIcon ? { value: themedIcon, position: iconPosition } : undefined, className: b('wrapper') },
                react_1.default.createElement(Content_1.default, { title: title, titleId: titleId, text: text, textId: descriptionId, additionalInfo: additionalInfo, links: links, list: list, buttons: buttons, size: "s", colSizes: { all: 12, md: 12 }, controlPosition: areControlsInFooter ? 'bottom' : 'default' })))));
};
exports.default = BasicCard;
