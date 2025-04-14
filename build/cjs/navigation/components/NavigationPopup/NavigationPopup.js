"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavigationPopup = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const uikit_1 = require("@gravity-ui/uikit");
const utils_1 = require("../../../utils");
const models_1 = require("../../models");
const NavigationItem_1 = tslib_1.__importDefault(require("../NavigationItem"));
const b = (0, utils_1.block)('navigation-popup');
const OFFSET_RESET = [0, 0];
const NavigationPopup = ({ anchorRef, items, onClose, className, open, }) => (react_1.default.createElement(uikit_1.Popup
// Workaround to recalculate position on every opening. Required for valid position calculation for scrolled header links.
, { 
    // Workaround to recalculate position on every opening. Required for valid position calculation for scrolled header links.
    anchorRef: open ? anchorRef : undefined, contentClassName: b(null, className), open: open, onClose: onClose, onOutsideClick: onClose, keepMounted: true, disablePortal: true, strategy: "fixed", placement: "bottom-start", offset: OFFSET_RESET },
    react_1.default.createElement("ul", { className: b('list') }, items.map((item) => (react_1.default.createElement(NavigationItem_1.default, { key: item.text, className: b('link'), data: item, menuLayout: models_1.NavigationLayout.Dropdown }))))));
exports.NavigationPopup = NavigationPopup;
exports.default = exports.NavigationPopup;
