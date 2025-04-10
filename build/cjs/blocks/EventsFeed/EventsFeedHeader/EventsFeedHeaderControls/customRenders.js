"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderOption = exports.renderFilter = exports.renderSwitcher = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const uikit_1 = require("@gravity-ui/uikit");
const utils_1 = require("../../../../utils");
const i18n_1 = require("../../i18n");
const EventsFeedHeaderSelectOption_1 = require("../EventsFeedHeaderSelectOption/EventsFeedHeaderSelectOption");
const EventsFeedHeaderSwitcher_1 = require("../EventsFeedHeaderSwitcher/EventsFeedHeaderSwitcher");
const b = (0, utils_1.block)('events-feed-header-controls');
const renderSwitcher = ({ initial, list, defaultLabel }) => {
    const Switcher = ({ onClick, ref, onKeyDown, open, renderClear, popupId, activeIndex, }) => {
        return (react_1.default.createElement(EventsFeedHeaderSwitcher_1.EventsFeedHeaderSwitcher, { initial: initial, defaultLabel: defaultLabel, list: list, controlRef: ref, onClick: onClick, onKeyDown: onKeyDown, renderClear: renderClear, open: open, popupId: popupId, activeIndex: activeIndex }));
    };
    return Switcher;
};
exports.renderSwitcher = renderSwitcher;
const renderFilter = ({ value, onChange, onKeyDown }) => {
    return (react_1.default.createElement(uikit_1.TextInput, { controlProps: { size: 1 }, value: value, view: 'clear', placeholder: (0, i18n_1.i18n)('search'), onUpdate: onChange, onKeyDown: onKeyDown, className: b('popup-filter') }));
};
exports.renderFilter = renderFilter;
const renderOption = (option) => {
    return react_1.default.createElement(EventsFeedHeaderSelectOption_1.EventsFeedHeaderSelectOption, { data: option });
};
exports.renderOption = renderOption;
