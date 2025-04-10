"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavigationList = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const NavigationListItem_1 = tslib_1.__importDefault(require("../NavigationListItem/NavigationListItem"));
const NavigationList = (_a) => {
    var { className, itemClassName, items } = _a, props = tslib_1.__rest(_a, ["className", "itemClassName", "items"]);
    return (react_1.default.createElement("ul", { className: className }, items.map((item, index) => (react_1.default.createElement(NavigationListItem_1.default, Object.assign({ key: index, index: index, data: item, className: itemClassName }, props))))));
};
exports.NavigationList = NavigationList;
