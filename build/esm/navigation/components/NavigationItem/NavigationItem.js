import { __rest } from "tslib";
import React, { useMemo } from 'react';
import omit from 'lodash/omit';
import { BlockIdContext } from '../../../context/blockIdContext';
import { NavigationItemType, NavigationItemTypes } from '../../../models';
import { block } from '../../../utils';
import { useNavigationItemMap } from './hooks/useNavigationItemMap';
import './NavigationItem.css';
const b = block('navigation-item');
const ANALYTICS_ID = 'navigation';
const nonComplexNavigationItemTypes = NavigationItemTypes.filter((type) => type !== NavigationItemType.Dropdown);
export const NavigationItem = (_a) => {
    var { data, className, menuLayout } = _a, props = __rest(_a, ["data", "className", "menuLayout"]);
    const { type = NavigationItemType.Link } = data;
    const navItemMap = useNavigationItemMap();
    const Component = navItemMap[type];
    const componentProps = useMemo(() => {
        const componentProperties = Object.assign(Object.assign({}, data), props);
        if (nonComplexNavigationItemTypes.includes(type)) {
            return omit(componentProperties, 'hidePopup', 'isActive');
        }
        return NavigationItemTypes.includes(type)
            ? componentProperties
            : Object.assign(Object.assign({}, componentProperties), { menuLayout });
    }, [data, props, type, menuLayout]);
    return (React.createElement(BlockIdContext.Provider, { value: ANALYTICS_ID },
        React.createElement("li", { className: b({ 'menu-layout': menuLayout }, className) },
            React.createElement(Component, Object.assign({}, componentProps, { className: b('content', { type }) })))));
};
export default NavigationItem;
