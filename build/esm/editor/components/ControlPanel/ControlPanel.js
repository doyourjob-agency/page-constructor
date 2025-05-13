import React from 'react';
import { Code, Display, Eye, Smartphone, SquareDashedText } from '@gravity-ui/icons';
import { RadioButton, Select } from '@gravity-ui/uikit';
import { Theme, themeNames } from '../../../models';
import { block } from '../../../utils';
import { Tablet } from '../../icons/Tablet';
import { EditModeItem, ViewModeItem } from '../../types';
import { i18n } from './i18n';
import './ControlPanel.css';
const ICON_SIZE = 14;
const b = block('control-panel');
const ControlPanelViewModeIcons = {
    [ViewModeItem.Desktop]: Display,
    [ViewModeItem.Tablet]: Tablet,
    [ViewModeItem.Mobile]: Smartphone,
};
const ControlPanelEditModeIcons = {
    [EditModeItem.View]: Eye,
    [EditModeItem.Form]: SquareDashedText,
    [EditModeItem.Code]: Code,
};
const ControlPanel = ({ viewMode = ViewModeItem.Desktop, editMode = EditModeItem.Form, onViewModeChange, onEditModeChange, className, theme, onThemeChange, }) => (React.createElement("div", { className: b(null, className) },
    React.createElement("div", { className: b('switch-container') },
        React.createElement("span", null, i18n('edit_mode')),
        React.createElement(RadioButton, { className: b('radio-button'), value: editMode, onUpdate: (value) => onEditModeChange(value) }, Object.values(EditModeItem).map((item) => {
            const Icon = ControlPanelEditModeIcons[item];
            return (React.createElement(RadioButton.Option, { key: item, value: item },
                React.createElement("span", { className: b('icon') },
                    React.createElement(Icon, { width: ICON_SIZE, height: ICON_SIZE }))));
        }))),
    React.createElement("div", { className: b('switch-container') },
        React.createElement("span", null, i18n('view_mode')),
        React.createElement(RadioButton, { className: b('radio-button'), value: viewMode, onUpdate: (value) => onViewModeChange(value) }, Object.values(ViewModeItem).map((item) => {
            const Icon = ControlPanelViewModeIcons[item];
            return (React.createElement(RadioButton.Option, { key: item, value: item },
                React.createElement("span", { className: b('icon') },
                    React.createElement(Icon, { width: ICON_SIZE, height: ICON_SIZE }))));
        }))),
    React.createElement("div", { className: b('switch-container') },
        React.createElement("span", null, i18n('theme')),
        React.createElement(Select, { value: [theme], onUpdate: (value) => onThemeChange(value[0]) }, Object.values(Theme).map((item) => (React.createElement(Select.Option, { key: item, value: item }, themeNames[item])))))));
export default ControlPanel;
