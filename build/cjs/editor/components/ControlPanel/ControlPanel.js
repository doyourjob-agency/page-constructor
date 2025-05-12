"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const icons_1 = require("@gravity-ui/icons");
const uikit_1 = require("@gravity-ui/uikit");
const models_1 = require("../../../models");
const utils_1 = require("../../../utils");
const Tablet_1 = require("../../icons/Tablet");
const types_1 = require("../../types");
const i18n_1 = require("./i18n");
const ICON_SIZE = 14;
const b = (0, utils_1.block)('control-panel');
const ControlPanelViewModeIcons = {
    [types_1.ViewModeItem.Desktop]: icons_1.Display,
    [types_1.ViewModeItem.Tablet]: Tablet_1.Tablet,
    [types_1.ViewModeItem.Mobile]: icons_1.Smartphone,
};
const ControlPanelEditModeIcons = {
    [types_1.EditModeItem.View]: icons_1.Eye,
    [types_1.EditModeItem.Form]: icons_1.SquareDashedText,
    [types_1.EditModeItem.Code]: icons_1.Code,
};
const ControlPanel = ({ viewMode = types_1.ViewModeItem.Desktop, editMode = types_1.EditModeItem.Form, onViewModeChange, onEditModeChange, className, theme, onThemeChange, }) => (react_1.default.createElement("div", { className: b(null, className) },
    react_1.default.createElement("div", { className: b('switch-container') },
        react_1.default.createElement("span", null, (0, i18n_1.i18n)('edit_mode')),
        react_1.default.createElement(uikit_1.RadioButton, { className: b('radio-button'), value: editMode, onUpdate: (value) => onEditModeChange(value) }, Object.values(types_1.EditModeItem).map((item) => {
            const Icon = ControlPanelEditModeIcons[item];
            return (react_1.default.createElement(uikit_1.RadioButton.Option, { key: item, value: item },
                react_1.default.createElement("span", { className: b('icon') },
                    react_1.default.createElement(Icon, { width: ICON_SIZE, height: ICON_SIZE }))));
        }))),
    react_1.default.createElement("div", { className: b('switch-container') },
        react_1.default.createElement("span", null, (0, i18n_1.i18n)('view_mode')),
        react_1.default.createElement(uikit_1.RadioButton, { className: b('radio-button'), value: viewMode, onUpdate: (value) => onViewModeChange(value) }, Object.values(types_1.ViewModeItem).map((item) => {
            const Icon = ControlPanelViewModeIcons[item];
            return (react_1.default.createElement(uikit_1.RadioButton.Option, { key: item, value: item },
                react_1.default.createElement("span", { className: b('icon') },
                    react_1.default.createElement(Icon, { width: ICON_SIZE, height: ICON_SIZE }))));
        }))),
    react_1.default.createElement("div", { className: b('switch-container') },
        react_1.default.createElement("span", null, (0, i18n_1.i18n)('theme')),
        react_1.default.createElement(uikit_1.Select, { value: [theme], onUpdate: (value) => onThemeChange(value[0]) }, Object.values(models_1.Theme).map((item) => (react_1.default.createElement(uikit_1.Select.Option, { key: item, value: item }, models_1.themeNames[item])))))));
exports.default = ControlPanel;
