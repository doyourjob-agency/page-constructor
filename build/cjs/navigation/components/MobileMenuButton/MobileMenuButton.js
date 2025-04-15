"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobileMenuButton = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const icons_1 = require("@gravity-ui/icons");
const components_1 = require("../../../components");
const utils_1 = require("../../../utils");
const b = (0, utils_1.block)('mobile-menu-button');
const ICON_SIZE = 24;
const MobileMenuButton = ({ isSidebarOpened, onSidebarOpenedChange, }) => (react_1.default.createElement(components_1.Control, { className: b(), onClick: (e) => {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        onSidebarOpenedChange(!isSidebarOpened);
    }, size: "l", icon: isSidebarOpened ? icons_1.Xmark : icons_1.Bars, iconSize: ICON_SIZE }));
exports.MobileMenuButton = MobileMenuButton;
