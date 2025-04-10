import { __rest } from "tslib";
import React from 'react';
import { getItemClickHandler } from '../../utils';
import NavigationItem from '../NavigationItem';
export const NavigationListItem = (_a) => {
    var { column, index, activeItemId, onActiveItemChange } = _a, props = __rest(_a, ["column", "index", "activeItemId", "onActiveItemChange"]);
    const id = `${column}-${index}`;
    const isActive = id === activeItemId;
    const onClick = getItemClickHandler({
        column,
        index,
        activeItemId,
        onActiveItemChange,
    });
    return (React.createElement(NavigationItem, Object.assign({ isActive: isActive, onClick: onClick, hidePopup: onActiveItemChange }, props)));
};
export default NavigationListItem;
