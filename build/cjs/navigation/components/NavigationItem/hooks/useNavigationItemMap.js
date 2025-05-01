"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useNavigationItemMap = void 0;
const tslib_1 = require("tslib");
const react_1 = require("react");
const isEmpty_1 = tslib_1.__importDefault(require("lodash/isEmpty"));
const constructor_items_1 = require("../../../../constructor-items");
const innerContext_1 = require("../../../../context/innerContext");
const useNavigationItemMap = () => {
    const { navItemMap } = (0, react_1.useContext)(innerContext_1.InnerContext);
    return (0, isEmpty_1.default)(navItemMap) ? constructor_items_1.navItemMap : navItemMap;
};
exports.useNavigationItemMap = useNavigationItemMap;
