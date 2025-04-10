import React from 'react';
import { TextInput } from '@gravity-ui/uikit';
import { block } from '../../../../utils';
import { i18n } from '../../i18n';
import { EventsFeedHeaderSelectOption } from '../EventsFeedHeaderSelectOption/EventsFeedHeaderSelectOption';
import { EventsFeedHeaderSwitcher, } from '../EventsFeedHeaderSwitcher/EventsFeedHeaderSwitcher';
import './EventsFeedHeaderControls.css';
const b = block('events-feed-header-controls');
export const renderSwitcher = ({ initial, list, defaultLabel }) => {
    const Switcher = ({ onClick, ref, onKeyDown, open, renderClear, popupId, activeIndex, }) => {
        return (React.createElement(EventsFeedHeaderSwitcher, { initial: initial, defaultLabel: defaultLabel, list: list, controlRef: ref, onClick: onClick, onKeyDown: onKeyDown, renderClear: renderClear, open: open, popupId: popupId, activeIndex: activeIndex }));
    };
    return Switcher;
};
export const renderFilter = ({ value, onChange, onKeyDown }) => {
    return (React.createElement(TextInput, { controlProps: { size: 1 }, value: value, view: 'clear', placeholder: i18n('search'), onUpdate: onChange, onKeyDown: onKeyDown, className: b('popup-filter') }));
};
export const renderOption = (option) => {
    return React.createElement(EventsFeedHeaderSelectOption, { data: option });
};
