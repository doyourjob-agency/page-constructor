"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavigationItem = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const omit_1 = tslib_1.__importDefault(require("lodash/omit"));
const blockIdContext_1 = require("../../../context/blockIdContext");
const models_1 = require("../../../models");
const utils_1 = require("../../../utils");
const useNavigationItemMap_1 = require("./hooks/useNavigationItemMap");
const b = (0, utils_1.block)('navigation-item');
const ANALYTICS_ID = 'navigation';
const nonComplexNavigationItemTypes = models_1.NavigationItemTypes.filter((type) => type !== models_1.NavigationItemType.Dropdown);
const NavigationItem = (_a) => {
    var { data, className, menuLayout } = _a, props = tslib_1.__rest(_a, ["data", "className", "menuLayout"]);
    const { type = models_1.NavigationItemType.Link } = data;
    const navItemMap = (0, useNavigationItemMap_1.useNavigationItemMap)();
    const Component = navItemMap[type];
    const componentProps = (0, react_1.useMemo)(() => {
        const componentProperties = Object.assign(Object.assign({}, data), props);
        if (nonComplexNavigationItemTypes.includes(type)) {
            return (0, omit_1.default)(componentProperties, 'hidePopup', 'isActive');
        }
        return models_1.NavigationItemTypes.includes(type)
            ? componentProperties
            : Object.assign(Object.assign({}, componentProperties), { menuLayout });
    }, [data, props, type, menuLayout]);
    return (react_1.default.createElement(blockIdContext_1.BlockIdContext.Provider, { value: ANALYTICS_ID },
        react_1.default.createElement("li", { className: b({ 'menu-layout': menuLayout }, className) },
            react_1.default.createElement(Component, Object.assign({}, componentProps, { className: b('content', { type }) })))));
};
exports.NavigationItem = NavigationItem;
exports.default = exports.NavigationItem;
