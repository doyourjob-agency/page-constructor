"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesktopNavigation = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const OverflowScroller_1 = tslib_1.__importDefault(require("../../../components/OverflowScroller/OverflowScroller"));
const utils_1 = require("../../../utils");
const models_1 = require("../../models");
const Logo_1 = tslib_1.__importDefault(require("../Logo/Logo"));
const MobileMenuButton_1 = require("../MobileMenuButton/MobileMenuButton");
const NavigationList_1 = require("../NavigationList/NavigationList");
const b = (0, utils_1.block)('desktop-navigation');
const DesktopNavigation = ({ logo, leftItemsWithIconSize, rightItemsWithIconSize, customMobileHeaderItems, isSidebarOpened, onSidebarOpenedChange, onActiveItemChange, activeItemId, }) => (react_1.default.createElement("div", { className: b('wrapper') },
    logo && (react_1.default.createElement("div", { className: b('left') },
        react_1.default.createElement(Logo_1.default, Object.assign({}, logo, { className: b('logo') })))),
    react_1.default.createElement("div", { className: b('navigation-container') },
        react_1.default.createElement(OverflowScroller_1.default, { className: b('navigation'), onScrollStart: onActiveItemChange },
            react_1.default.createElement(NavigationList_1.NavigationList, { items: leftItemsWithIconSize, onActiveItemChange: onActiveItemChange, className: b('links'), itemClassName: b('item'), column: models_1.ItemColumnName.Left, activeItemId: activeItemId, menuLayout: models_1.NavigationLayout.Desktop }))),
    react_1.default.createElement("div", { className: b('right') },
        customMobileHeaderItems && (react_1.default.createElement("div", { className: b('mobile-navigation-container') },
            react_1.default.createElement(OverflowScroller_1.default, { className: b('mobile-navigation'), onScrollStart: onActiveItemChange, arrowSize: 18 },
                react_1.default.createElement(NavigationList_1.NavigationList, { items: customMobileHeaderItems, onActiveItemChange: onActiveItemChange, className: b('mobile-buttons'), itemClassName: b('item'), column: models_1.ItemColumnName.Left, activeItemId: activeItemId, menuLayout: models_1.NavigationLayout.Dropdown })))),
        react_1.default.createElement(MobileMenuButton_1.MobileMenuButton, { isSidebarOpened: isSidebarOpened, onSidebarOpenedChange: onSidebarOpenedChange }),
        rightItemsWithIconSize && (react_1.default.createElement(NavigationList_1.NavigationList, { onActiveItemChange: onActiveItemChange, column: models_1.ItemColumnName.Right, items: rightItemsWithIconSize, activeItemId: activeItemId, className: b('buttons'), itemClassName: b('item'), menuLayout: models_1.NavigationLayout.Desktop })))));
exports.DesktopNavigation = DesktopNavigation;
exports.default = exports.DesktopNavigation;
