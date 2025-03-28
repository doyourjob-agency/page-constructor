import { __rest } from "tslib";
import React from 'react';
import NavigationListItem from '../NavigationListItem/NavigationListItem';
export const NavigationList = (_a) => {
    var { className, itemClassName, items } = _a, props = __rest(_a, ["className", "itemClassName", "items"]);
    return (React.createElement("ul", { className: className }, items.map((item, index) => (React.createElement(NavigationListItem, Object.assign({ key: index, index: index, data: item, className: itemClassName }, props))))));
};
