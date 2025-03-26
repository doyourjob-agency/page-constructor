import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';

import {Icon, TextInput} from '@gravity-ui/uikit';
import lodashDebounce from 'lodash/debounce';

import {block} from '../../../../utils';
import {i18n} from '../../i18n';
import {CloseIcon} from '../CloseIcon';
import {SearchIcon} from '../SearchIcon';

import './EventsFeedHeaderSearch.scss';

const b = block('events-feed-header-search');

const SEARCH_ICON_SIZE = 16;
const CLOSE_ICON_SIZE = 12;

export type SearchSize = 's' | 'm';

type EventsFeedHeaderSearchProps = {
    className?: string;
    initialValue?: string;
    onSubmit: (value: string) => void;
    debounce?: number;
    placeholder?: string;
    size?: SearchSize;
};

export const EventsFeedHeaderSearch = ({
    className,
    initialValue,
    onSubmit,
    debounce = 300,
    placeholder,
    size = 'm',
}: EventsFeedHeaderSearchProps) => {
    const handleChange = lodashDebounce(onSubmit, debounce);
    const [isSetInitValue, setIsSetInitValue] = useState(false);
    const [value, setValue] = useState(initialValue);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (!isSetInitValue && !value && initialValue) {
            setIsSetInitValue(true);
            setValue(initialValue);
        }
    }, [isSetInitValue, value, initialValue]);

    const iconData = value ? CloseIcon : SearchIcon;
    const iconSize = value ? CLOSE_ICON_SIZE : SEARCH_ICON_SIZE;

    const handleClick = useCallback(() => {
        if (value) {
            handleChange.cancel();
            setValue('');
            onSubmit('');
            inputRef.current?.focus();
        }
    }, [value, handleChange, onSubmit]);

    const rightContent = useMemo(
        () => (
            <button
                className={b('input-icon')}
                onClick={handleClick}
                aria-label={i18n('clear')}
                disabled={!value}
            >
                <Icon data={iconData} size={iconSize} />
            </button>
        ),
        [handleClick, value, iconData, iconSize],
    );

    const handleUpdate = useCallback(
        (query: string) => {
            setValue(query);
            handleChange(query);
        },
        [handleChange],
    );

    return (
        <div className={b({size}, className)}>
            <TextInput
                className={b('suggest')}
                value={value}
                onUpdate={handleUpdate}
                placeholder={placeholder}
                size={size === 'm' ? 'xl' : 'l'}
                controlRef={inputRef}
                view="clear"
                controlProps={{
                    className: b('control'),
                }}
                rightContent={rightContent}
            />
        </div>
    );
};

export default EventsFeedHeaderSearch;
