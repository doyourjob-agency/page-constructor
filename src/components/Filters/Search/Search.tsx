import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';

import {Icon, TextInput} from '@gravity-ui/uikit';
import lodashDebounce from 'lodash/debounce';

import {CloseIcon} from '../../../icons/CloseIcon';
import {SearchIcon} from '../../../icons/SearchIcon';
import {block} from '../../../utils';

import './Search.scss';

const b = block('filter-search');

const SEARCH_ICON_SIZE = 16;
const CLOSE_ICON_SIZE = 12;

export type SearchSize = 's' | 'm';

type SearchProps = {
    className?: string;
    initialValue?: string;
    onSubmit: (value: string) => void;
    debounce?: number;
    placeholder?: string;
    size?: SearchSize;
    clearText?: string;
};

export const Search = ({
    className,
    initialValue,
    onSubmit,
    debounce = 300,
    placeholder,
    size = 'm',
    clearText,
}: SearchProps) => {
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
                aria-label={clearText}
                disabled={!value}
            >
                <Icon data={iconData} size={iconSize} />
            </button>
        ),
        [handleClick, value, iconData, iconSize, clearText],
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

export default Search;
