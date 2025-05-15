"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNavigationItemWithIconSize = exports.getItemClickHandler = void 0;
const models_1 = require("../models");
const getItemClickHandler = ({ column, index, onActiveItemChange, activeItemId }) => (e) => {
    const id = `${column}-${index}`;
    if (e) {
        e.stopPropagation();
    }
    onActiveItemChange(id === activeItemId ? undefined : `${column}-${index}`);
};
exports.getItemClickHandler = getItemClickHandler;
const isButtonItem = (item) => item.type === models_1.NavigationItemType.Button;
const isDropdownItem = (item) => item.type === models_1.NavigationItemType.Dropdown;
const iconSizeKey = 'iconSize';
function getNavigationItemWithIconSize(iconSize = 20) {
    const getItem = (item) => {
        const newItem = Object.assign({}, item);
        if ('items' in newItem && isDropdownItem(newItem)) {
            newItem.items = newItem.items.map(getItem);
        }
        if (!(iconSizeKey in newItem) && !isButtonItem(newItem)) {
            newItem.iconSize = iconSize;
        }
        return newItem;
    };
    return getItem;
}
exports.getNavigationItemWithIconSize = getNavigationItemWithIconSize;
