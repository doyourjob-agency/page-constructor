"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtendedFeaturesBlock = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const components_1 = require("../../components/");
const Image_1 = tslib_1.__importDefault(require("../../components/Image/Image"));
const utils_1 = require("../../components/Media/Image/utils");
const theme_1 = require("../../context/theme");
const grid_1 = require("../../grid");
const sub_blocks_1 = require("../../sub-blocks");
const utils_2 = require("../../utils");
const b = (0, utils_2.block)('ExtendedFeaturesBlock');
const DEFAULT_SIZES = {
    all: 12,
    sm: 6,
    md: 4,
};
const ExtendedFeaturesBlock = ({ title, description, items, colSizes = DEFAULT_SIZES, animated, }) => {
    const theme = (0, theme_1.useTheme)();
    const itemTitleHeadingTag = title ? 'h3' : 'h2';
    return (react_1.default.createElement(components_1.AnimateBlock, { className: b(), animate: animated },
        react_1.default.createElement(components_1.Title, { title: title, subtitle: description, className: b('header') }),
        react_1.default.createElement("div", { className: b('items') },
            react_1.default.createElement(grid_1.Row, null, items.map(({ title: itemTitle, text, list, link, links, label, icon, buttons, additionalInfo, }) => {
                const itemLinks = links || [];
                const iconThemed = icon && (0, utils_2.getThemedValue)(icon, theme);
                const iconData = iconThemed && (0, utils_1.getMediaImage)(iconThemed);
                if (link) {
                    itemLinks.push(link);
                }
                return (react_1.default.createElement(grid_1.Col, { className: b('item'), key: text || itemTitle, sizes: colSizes },
                    iconData && (react_1.default.createElement("div", { className: b('icon-wrap'), "aria-hidden": true },
                        react_1.default.createElement(Image_1.default, Object.assign({}, iconData, { className: b('icon') })))),
                    react_1.default.createElement("div", { className: b('container') },
                        itemTitle &&
                            react_1.default.createElement(itemTitleHeadingTag, {
                                className: b('item-title'),
                            }, react_1.default.createElement(react_1.default.Fragment, null,
                                react_1.default.createElement(components_1.HTML, null, itemTitle),
                                label && (react_1.default.createElement("span", { className: b('item-label') }, label)))),
                        react_1.default.createElement(sub_blocks_1.Content, { text: text, links: itemLinks, size: "s", list: list, colSizes: { all: 12, md: 12 }, buttons: buttons, additionalInfo: additionalInfo }))));
            })))));
};
exports.ExtendedFeaturesBlock = ExtendedFeaturesBlock;
exports.default = exports.ExtendedFeaturesBlock;
