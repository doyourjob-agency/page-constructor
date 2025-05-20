import React from 'react';
import { TextInput } from '@gravity-ui/uikit';
import { block } from '../../../utils';
import { SelectOption } from '../SelectOption/SelectOption';
import { Switcher } from '../Switcher/Switcher';
import { i18n } from '../i18n';
import './Controls.css';
const b = block('feed-header-controls');
export const renderSwitcher = ({ initial, list, defaultLabel }) => {
    const WrapSwitcher = ({ onClick, ref, onKeyDown, open, renderClear, popupId, activeIndex, }) => {
        return (React.createElement(Switcher, { initial: initial, defaultLabel: defaultLabel, list: list, controlRef: ref, onClick: onClick, onKeyDown: onKeyDown, renderClear: renderClear, open: open, popupId: popupId, activeIndex: activeIndex }));
    };
    return WrapSwitcher;
};
export const renderFilter = ({ value, onChange, onKeyDown }) => {
    return (React.createElement(TextInput, { controlProps: { size: 1 }, value: value, view: 'clear', placeholder: i18n('search'), onUpdate: onChange, onKeyDown: onKeyDown, className: b('popup-filter') }));
};
export const renderOption = (option) => {
    return React.createElement(SelectOption, { data: option });
};
