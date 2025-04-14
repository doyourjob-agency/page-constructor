import React from 'react';

import {SelectOption, SelectProps, TextInput} from '@gravity-ui/uikit';

import {block} from '../../../../utils';
import {i18n} from '../../i18n';
import {EventsFeedHeaderSelectOption} from '../EventsFeedHeaderSelectOption/EventsFeedHeaderSelectOption';
import {
    EventsFeedHeaderSwitcher,
    EventsFeedHeaderSwitcherProps,
} from '../EventsFeedHeaderSwitcher/EventsFeedHeaderSwitcher';

import './EventsFeedHeaderControls.scss';

const b = block('events-feed-header-controls');

type RenderSwitcherType = ({
    initial,
    list,
    defaultLabel,
}: {
    initial: EventsFeedHeaderSwitcherProps['initial'];
    list: EventsFeedHeaderSwitcherProps['list'];
    defaultLabel: string;
}) => SelectProps['renderControl'];

export const renderSwitcher: RenderSwitcherType = ({initial, list, defaultLabel}) => {
    const Switcher: SelectProps['renderControl'] = ({
        onClick,
        ref,
        onKeyDown,
        open,
        renderClear,
        popupId,
        activeIndex,
    }) => {
        return (
            <EventsFeedHeaderSwitcher
                initial={initial}
                defaultLabel={defaultLabel}
                list={list}
                controlRef={ref}
                onClick={onClick}
                onKeyDown={onKeyDown}
                renderClear={renderClear}
                open={open}
                popupId={popupId}
                activeIndex={activeIndex}
            />
        );
    };
    return Switcher;
};

export const renderFilter: SelectProps['renderFilter'] = ({value, onChange, onKeyDown}) => {
    return (
        <TextInput
            controlProps={{size: 1}}
            value={value}
            view={'clear'}
            placeholder={i18n('search')}
            onUpdate={onChange}
            onKeyDown={onKeyDown}
            className={b('popup-filter')}
        />
    );
};

export const renderOption = (option: SelectOption) => {
    return <EventsFeedHeaderSelectOption data={option} />;
};
