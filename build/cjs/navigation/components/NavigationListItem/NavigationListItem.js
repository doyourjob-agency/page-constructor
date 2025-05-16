"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavigationListItem = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const utils_1 = require("../../utils");
const NavigationItem_1 = tslib_1.__importDefault(require("../NavigationItem"));
const NavigationListItem = (_a) => {
    var { column, index, activeItemId, onActiveItemChange } = _a, props = tslib_1.__rest(_a, ["column", "index", "activeItemId", "onActiveItemChange"]);
    const id = `${column}-${index}`;
    const isActive = id === activeItemId;
    const onClick = (0, utils_1.getItemClickHandler)({
        column,
        index,
        activeItemId,
        onActiveItemChange,
    });
    return (react_1.default.createElement(NavigationItem_1.default, Object.assign({ isActive: isActive, onClick: onClick, hidePopup: onActiveItemChange }, props)));
};
exports.NavigationListItem = NavigationListItem;
exports.default = exports.NavigationListItem;
