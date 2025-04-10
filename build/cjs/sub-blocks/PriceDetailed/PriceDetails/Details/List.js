"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const components_1 = require("../../../../components");
const utils_1 = require("../../../../utils");
const b = (0, utils_1.block)('marked-list');
const List = (props) => {
    const { items = [], titleSize = 's' } = props;
    return (react_1.default.createElement(react_1.Fragment, null, items.map((item, id) => (react_1.default.createElement("div", { key: id, className: b('list-item') },
        react_1.default.createElement("img", { className: b('img'), alt: "" }),
        react_1.default.createElement("div", { className: b('text', { size: titleSize }) },
            react_1.default.createElement(components_1.YFMWrapper, { content: item.text, modifiers: { constructor: true } })))))));
};
exports.default = List;
