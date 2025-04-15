"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavigationDropdown = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const components_1 = require("../../../../../components");
const utils_1 = require("../../../../../components/Media/Image/utils");
const utils_2 = require("../../../../../utils");
const NavigationPopup_1 = tslib_1.__importDefault(require("../../../NavigationPopup/NavigationPopup"));
const ContentWrapper_1 = require("../ContentWrapper/ContentWrapper");
const b = (0, utils_2.block)('navigation-dropdown');
const TOGGLE_ARROW_SIZE = 12;
const NavigationDropdown = (_a) => {
    var { text, icon, className, iconSize, hidePopup, items, isActive } = _a, props = tslib_1.__rest(_a, ["text", "icon", "className", "iconSize", "hidePopup", "items", "isActive"]);
    const iconData = icon && (0, utils_1.getMediaImage)(icon);
    const anchorRef = (0, react_1.useRef)(null);
    return (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement("button", Object.assign({ ref: anchorRef }, props, { type: "button", className: b(null, className), "aria-expanded": isActive }),
            react_1.default.createElement(ContentWrapper_1.ContentWrapper, { text: text, icon: iconData, iconSize: iconSize, "aria-expanded": isActive }),
            react_1.default.createElement(components_1.ToggleArrow, { className: b('arrow'), size: TOGGLE_ARROW_SIZE, type: 'vertical', iconType: "navigation", open: isActive })),
        react_1.default.createElement(NavigationPopup_1.default, { open: isActive, onClose: hidePopup, items: items, anchorRef: anchorRef })));
};
exports.NavigationDropdown = NavigationDropdown;
