import { __rest } from "tslib";
import React from 'react';
import { Portal } from '@gravity-ui/uikit';
import Foldable from '../../../components/Foldable/Foldable';
import { useMount } from '../../../hooks';
import { block } from '../../../utils';
import { ItemColumnName, NavigationLayout } from '../../models';
import { NavigationList } from '../NavigationList/NavigationList';
import './MobileNavigation.css';
const b = block('mobile-navigation');
export const MobileNavigation = (_a) => {
    var { isOpened, topItems, bottomItems } = _a, props = __rest(_a, ["isOpened", "topItems", "bottomItems"]);
    const [isMounted, setIsMounted] = React.useState(false);
    useMount(() => setIsMounted(true));
    if (!isMounted) {
        return null;
    }
    return (React.createElement(Portal, null,
        React.createElement(Foldable, { key: topItems === null || topItems === void 0 ? void 0 : topItems.length, className: b(), isOpened: Boolean(isOpened) },
            React.createElement("div", { className: b('wrapper') },
                topItems && (React.createElement(NavigationList, Object.assign({ className: b('rows'), items: topItems, column: ItemColumnName.Top, menuLayout: NavigationLayout.Mobile }, props))),
                bottomItems && (React.createElement(NavigationList, Object.assign({ className: b('rows'), items: bottomItems, column: ItemColumnName.Bottom, menuLayout: NavigationLayout.Mobile }, props)))))));
};
export default MobileNavigation;
