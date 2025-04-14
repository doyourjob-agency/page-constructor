"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobileNavigation = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const uikit_1 = require("@gravity-ui/uikit");
const Foldable_1 = tslib_1.__importDefault(require("../../../components/Foldable/Foldable"));
const hooks_1 = require("../../../hooks");
const utils_1 = require("../../../utils");
const models_1 = require("../../models");
const NavigationList_1 = require("../NavigationList/NavigationList");
const b = (0, utils_1.block)('mobile-navigation');
const MobileNavigation = (_a) => {
    var { isOpened, topItems, bottomItems } = _a, props = tslib_1.__rest(_a, ["isOpened", "topItems", "bottomItems"]);
    const [isMounted, setIsMounted] = react_1.default.useState(false);
    (0, hooks_1.useMount)(() => setIsMounted(true));
    if (!isMounted) {
        return null;
    }
    return (react_1.default.createElement(uikit_1.Portal, null,
        react_1.default.createElement(Foldable_1.default, { key: topItems === null || topItems === void 0 ? void 0 : topItems.length, className: b(), isOpened: Boolean(isOpened) },
            react_1.default.createElement("div", { className: b('wrapper') },
                topItems && (react_1.default.createElement(NavigationList_1.NavigationList, Object.assign({ className: b('rows'), items: topItems, column: models_1.ItemColumnName.Top, menuLayout: models_1.NavigationLayout.Mobile }, props))),
                bottomItems && (react_1.default.createElement(NavigationList_1.NavigationList, Object.assign({ className: b('rows'), items: bottomItems, column: models_1.ItemColumnName.Bottom, menuLayout: models_1.NavigationLayout.Mobile }, props)))))));
};
exports.MobileNavigation = MobileNavigation;
exports.default = exports.MobileNavigation;
