"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const utils_1 = require("../utils");
const useActiveNavItem = (iconSize, leftItems, rightItems) => {
    const [activeItemId, setActiveItemId] = (0, react_1.useState)(undefined);
    const getNavigationItem = (0, utils_1.getNavigationItemWithIconSize)(iconSize);
    const leftItemsWithIconSize = (0, react_1.useMemo)(() => leftItems.map(getNavigationItem), [getNavigationItem, leftItems]);
    const rightItemsWithIconSize = (0, react_1.useMemo)(() => rightItems === null || rightItems === void 0 ? void 0 : rightItems.map(getNavigationItem), [getNavigationItem, rightItems]);
    const onActiveItemChange = (id) => {
        setActiveItemId(id);
    };
    return { activeItemId, leftItemsWithIconSize, rightItemsWithIconSize, onActiveItemChange };
};
exports.default = useActiveNavItem;
