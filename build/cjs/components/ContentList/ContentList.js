"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const uuid_1 = require("uuid");
const utils_1 = require("../../utils");
const blocks_1 = require("../../utils/blocks");
const YFMWrapper_1 = tslib_1.__importDefault(require("../YFMWrapper/YFMWrapper"));
const ContentListItemIcon_1 = tslib_1.__importDefault(require("./ContentListItemIcon"));
const b = (0, utils_1.block)('content-list');
function getHeadingLevel(size) {
    switch (size) {
        case 's':
            return 'h4';
        case 'l':
        default:
            return 'h3';
    }
}
const ContentList = ({ list, size = 'l', qa, theme }) => {
    const qaAttributes = (0, blocks_1.getQaAttrubutes)(qa, ['image', 'title', 'text']);
    return (react_1.default.createElement("div", { className: b({ size, theme }), "data-qa": qa }, list === null || list === void 0 ? void 0 : list.map((item) => {
        const { icon, title, text } = item;
        return (react_1.default.createElement("div", { className: b('item', { 'without-title': !title }), key: (0, uuid_1.v4)() },
            react_1.default.createElement(ContentListItemIcon_1.default, { icon: icon, className: b('icon'), qa: qaAttributes.image }),
            react_1.default.createElement("div", null,
                title &&
                    react_1.default.createElement(getHeadingLevel(size), { className: b('title'), 'data-qa': qaAttributes.title }, react_1.default.createElement(YFMWrapper_1.default, { content: title, modifiers: { constructor: true } })),
                text && (react_1.default.createElement(YFMWrapper_1.default, { className: b('text'), content: text, modifiers: { constructor: true }, qa: qaAttributes.text })))));
    })));
};
exports.default = ContentList;
