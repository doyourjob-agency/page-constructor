"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabsTextContent = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const grid_1 = require("../../../grid");
const sub_blocks_1 = require("../../../sub-blocks");
const utils_1 = require("../../../utils");
const b = (0, utils_1.block)('tabs-block-text-content');
const TabsTextContent = ({ centered, contentSize = 's', showMedia, data, imageProps, isReverse, }) => {
    if (!data) {
        return null;
    }
    const { media, title, text, additionalInfo, link, links, buttons, list } = data;
    return (react_1.default.createElement(grid_1.Col, { sizes: { all: 12, md: showMedia ? 4 : 8 }, className: b({ centered: centered }) },
        react_1.default.createElement("div", { className: b('wrapper', {
                reverse: isReverse,
                'no-image': !(media || imageProps),
            }) },
            react_1.default.createElement(sub_blocks_1.Content, { title: title, text: text, additionalInfo: additionalInfo, size: contentSize, list: list, links: [...(link ? [link] : []), ...(links || [])], buttons: buttons, colSizes: { all: 12 } }))));
};
exports.TabsTextContent = TabsTextContent;
exports.default = exports.TabsTextContent;
