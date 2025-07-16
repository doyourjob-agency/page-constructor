import React from 'react';

import {SelectOption as PcSelectOption, SelectProps, TextInput} from '@gravity-ui/uikit';

import SelectOption from './SelectOption/SelectOption';
import Switcher, {SwitcherProps} from './Switcher/Switcher';

type RenderSwitcherType = ({
    initial,
    list,
    defaultLabel,
}: {
    initial: SwitcherProps['initial'];
    list: SwitcherProps['list'];
    defaultLabel: string;
}) => SelectProps['renderControl'];

type RenderFilterType = ({
    placeholder,
    className,
}: {
    placeholder?: string;
    className?: string;
}) => SelectProps['renderFilter'];

export const renderSwitcher: RenderSwitcherType = ({initial, list, defaultLabel}) => {
    const WrapSwitcher: SelectProps['renderControl'] = ({
        onClick,
        ref,
        onKeyDown,
        open,
        renderClear,
        popupId,
        activeIndex,
    }) => {
        return (
            <Switcher
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
    return WrapSwitcher;
};

export const renderFilter: RenderFilterType = ({placeholder, className}) => {
    const WrapFilter: SelectProps['renderFilter'] = ({value, onChange, onKeyDown}) => {
        return (
            <TextInput
                controlProps={{size: 1}}
                value={value}
                view={'clear'}
                placeholder={placeholder}
                onUpdate={onChange}
                onKeyDown={onKeyDown}
                className={className}
            />
        );
    };
    return WrapFilter;
};

export const renderOption = (option: PcSelectOption) => {
    return <SelectOption data={option} />;
};
