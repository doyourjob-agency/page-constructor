import React from 'react';
import OverflowScroller from '../../../components/OverflowScroller/OverflowScroller';
import { block } from '../../../utils';
import { ItemColumnName, NavigationLayout } from '../../models';
import Logo from '../Logo/Logo';
import { MobileMenuButton } from '../MobileMenuButton/MobileMenuButton';
import { NavigationList } from '../NavigationList/NavigationList';
import './DesktopNavigation.css';
const b = block('desktop-navigation');
export const DesktopNavigation = ({ logo, leftItemsWithIconSize, rightItemsWithIconSize, customMobileHeaderItems, isSidebarOpened, onSidebarOpenedChange, onActiveItemChange, activeItemId, }) => (React.createElement("div", { className: b('wrapper') },
    logo && (React.createElement("div", { className: b('left') },
        React.createElement(Logo, Object.assign({}, logo, { className: b('logo') })))),
    React.createElement("div", { className: b('navigation-container') },
        React.createElement(OverflowScroller, { className: b('navigation'), onScrollStart: onActiveItemChange },
            React.createElement(NavigationList, { items: leftItemsWithIconSize, onActiveItemChange: onActiveItemChange, className: b('links'), itemClassName: b('item'), column: ItemColumnName.Left, activeItemId: activeItemId, menuLayout: NavigationLayout.Desktop }))),
    React.createElement("div", { className: b('right') },
        customMobileHeaderItems && (React.createElement("div", { className: b('mobile-navigation-container') },
            React.createElement(OverflowScroller, { className: b('mobile-navigation'), onScrollStart: onActiveItemChange, arrowSize: 18 },
                React.createElement(NavigationList, { items: customMobileHeaderItems, onActiveItemChange: onActiveItemChange, className: b('mobile-buttons'), itemClassName: b('item'), column: ItemColumnName.Left, activeItemId: activeItemId, menuLayout: NavigationLayout.Dropdown })))),
        React.createElement(MobileMenuButton, { isSidebarOpened: isSidebarOpened, onSidebarOpenedChange: onSidebarOpenedChange }),
        rightItemsWithIconSize && (React.createElement(NavigationList, { onActiveItemChange: onActiveItemChange, column: ItemColumnName.Right, items: rightItemsWithIconSize, activeItemId: activeItemId, className: b('buttons'), itemClassName: b('item'), menuLayout: NavigationLayout.Desktop })))));
export default DesktopNavigation;
