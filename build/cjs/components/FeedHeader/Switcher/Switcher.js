"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Switcher = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const uikit_1 = require("@gravity-ui/uikit");
const CloseIcon_1 = require("../../../icons/CloseIcon");
const DropdownArrowIcon_1 = require("../../../icons/DropdownArrowIcon");
const utils_1 = require("../../../utils");
const b = (0, utils_1.block)('feed-header-switcher');
const ICON_SIZE = 12;
const CLEAR_ICON_SIZE = 11;
const Switcher = ({ initial, defaultLabel, list, onClick, controlRef, onKeyDown, open, renderClear, popupId, activeIndex, }) => {
    const itemsNames = (0, react_1.useMemo)(() => {
        const items = list
            .filter((item) => initial.includes(item.value))
            .map((item) => item.content);
        return items.length ? items : [defaultLabel];
    }, [defaultLabel, initial, list]);
    const hasCounter = itemsNames.length > 1;
    const contentElementId = (0, uikit_1.useUniqId)();
    return (react_1.default.createElement("div", { className: b(), ref: controlRef },
        react_1.default.createElement("button", { onClick: onClick, className: b('element', { overlay: true }), onKeyDown: onKeyDown, "aria-expanded": open, "aria-labelledby": contentElementId, "aria-activedescendant": activeIndex === undefined ? undefined : `${popupId}-item-${activeIndex}` }),
        react_1.default.createElement("div", { id: contentElementId, className: b('element', { content: true }), "aria-hidden": true }, itemsNames === null || itemsNames === void 0 ? void 0 : itemsNames.join(', ')),
        renderClear &&
            renderClear({
                renderIcon: () => (react_1.default.createElement(uikit_1.Icon, { data: CloseIcon_1.CloseIcon, size: CLEAR_ICON_SIZE, className: b('clear') })),
            }),
        hasCounter && react_1.default.createElement("div", { className: b('element', { counter: true }) }, itemsNames.length),
        react_1.default.createElement("div", { className: b('element', { arrow: true }) },
            react_1.default.createElement(uikit_1.Icon, { data: DropdownArrowIcon_1.DropdownArrowIcon, size: ICON_SIZE, className: b('arrow') }))));
};
exports.Switcher = Switcher;
exports.default = exports.Switcher;
