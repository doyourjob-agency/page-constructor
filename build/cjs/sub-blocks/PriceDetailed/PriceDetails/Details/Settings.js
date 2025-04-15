"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const components_1 = require("../../../../components");
const utils_1 = require("../../../../utils");
const b = (0, utils_1.block)('settings-list');
const Settings = (props) => {
    const { items = [], titleSize = 's', descriptionSize = 'm' } = props;
    return (react_1.default.createElement(react_1.Fragment, null, items.map((item, id) => (react_1.default.createElement("div", { key: id },
        react_1.default.createElement("div", { className: b('title', { size: titleSize }) }, item.title),
        react_1.default.createElement("div", { className: b('description', { size: descriptionSize }) },
            react_1.default.createElement(components_1.YFMWrapper, { content: item.description, modifiers: { constructor: true } })))))));
};
exports.default = Settings;
