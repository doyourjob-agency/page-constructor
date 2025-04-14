"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Navigation = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const OutsideClick_1 = tslib_1.__importDefault(require("../../../components/OutsideClick/OutsideClick"));
const grid_1 = require("../../../grid");
const utils_1 = require("../../../utils");
const hooks_1 = require("../../hooks");
const DesktopNavigation_1 = tslib_1.__importDefault(require("../DesktopNavigation/DesktopNavigation"));
const MobileNavigation_1 = tslib_1.__importDefault(require("../MobileNavigation/MobileNavigation"));
const b = (0, utils_1.block)('navigation');
const Navigation = ({ data, logo, className }) => {
    const { leftItems, rightItems, customMobileHeaderItems, iconSize = 20, withBorder = false, withBorderOnScroll = true, } = data;
    const [isSidebarOpened, setIsSidebarOpened] = (0, react_1.useState)(false);
    const [showBorder] = (0, hooks_1.useShowBorder)(withBorder, withBorderOnScroll);
    const { activeItemId, leftItemsWithIconSize, rightItemsWithIconSize, onActiveItemChange } = (0, hooks_1.useActiveNavItem)(iconSize, leftItems, rightItems);
    const onSidebarOpenedChange = (isOpen) => setIsSidebarOpened(isOpen);
    return (react_1.default.createElement(grid_1.Grid, { className: b({ 'with-border': showBorder }, className) },
        react_1.default.createElement(grid_1.Row, null,
            react_1.default.createElement(grid_1.Col, null,
                react_1.default.createElement("nav", null,
                    react_1.default.createElement(DesktopNavigation_1.default, { logo: logo, activeItemId: activeItemId, onActiveItemChange: onActiveItemChange, leftItemsWithIconSize: leftItemsWithIconSize, rightItemsWithIconSize: rightItemsWithIconSize, customMobileHeaderItems: customMobileHeaderItems, isSidebarOpened: isSidebarOpened, onSidebarOpenedChange: onSidebarOpenedChange }),
                    react_1.default.createElement(OutsideClick_1.default, { onOutsideClick: () => onSidebarOpenedChange(false) },
                        react_1.default.createElement(MobileNavigation_1.default, { topItems: leftItemsWithIconSize, bottomItems: rightItemsWithIconSize, isOpened: isSidebarOpened, activeItemId: activeItemId, onActiveItemChange: onActiveItemChange })))))));
};
exports.Navigation = Navigation;
exports.default = exports.Navigation;
