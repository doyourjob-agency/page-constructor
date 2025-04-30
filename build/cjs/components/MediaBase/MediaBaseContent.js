"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const sub_blocks_1 = require("../../sub-blocks");
const utils_1 = require("../../utils");
const b = (0, utils_1.block)('media-base-content');
const MediaContent = (props) => {
    const { title, description, subtitle, subtitleLinks, button, links, buttons = [], additionalInfo, size = 'l', list, } = props;
    const allButtons = button ? [Object.assign(Object.assign({}, button), { size: 'xl' }), ...buttons] : buttons;
    return (react_1.default.createElement("div", { className: b() },
        react_1.default.createElement(sub_blocks_1.Content, { title: title, text: description, subtitle: subtitle, subtitleLinks: subtitleLinks, links: links, theme: "default", buttons: allButtons, list: list, additionalInfo: additionalInfo, size: size, colSizes: { all: 12, md: 12 } })));
};
exports.default = MediaContent;
