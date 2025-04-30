import React, { useState } from 'react';
import OutsideClick from '../../../components/OutsideClick/OutsideClick';
import { Col, Grid, Row } from '../../../grid';
import { block } from '../../../utils';
import { useActiveNavItem, useShowBorder } from '../../hooks';
import DesktopNavigation from '../DesktopNavigation/DesktopNavigation';
import MobileNavigation from '../MobileNavigation/MobileNavigation';
import './Navigation.css';
const b = block('navigation');
export const Navigation = ({ data, logo, className }) => {
    const { leftItems, rightItems, customMobileHeaderItems, iconSize = 20, withBorder = false, withBorderOnScroll = true, } = data;
    const [isSidebarOpened, setIsSidebarOpened] = useState(false);
    const [showBorder] = useShowBorder(withBorder, withBorderOnScroll);
    const { activeItemId, leftItemsWithIconSize, rightItemsWithIconSize, onActiveItemChange } = useActiveNavItem(iconSize, leftItems, rightItems);
    const onSidebarOpenedChange = (isOpen) => setIsSidebarOpened(isOpen);
    return (React.createElement(Grid, { className: b({ 'with-border': showBorder }, className) },
        React.createElement(Row, null,
            React.createElement(Col, null,
                React.createElement("nav", null,
                    React.createElement(DesktopNavigation, { logo: logo, activeItemId: activeItemId, onActiveItemChange: onActiveItemChange, leftItemsWithIconSize: leftItemsWithIconSize, rightItemsWithIconSize: rightItemsWithIconSize, customMobileHeaderItems: customMobileHeaderItems, isSidebarOpened: isSidebarOpened, onSidebarOpenedChange: onSidebarOpenedChange }),
                    React.createElement(OutsideClick, { onOutsideClick: () => onSidebarOpenedChange(false) },
                        React.createElement(MobileNavigation, { topItems: leftItemsWithIconSize, bottomItems: rightItemsWithIconSize, isOpened: isSidebarOpened, activeItemId: activeItemId, onActiveItemChange: onActiveItemChange })))))));
};
export default Navigation;
