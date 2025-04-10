import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Icon, TextInput } from '@gravity-ui/uikit';
import lodashDebounce from 'lodash/debounce';
import { block } from '../../../../utils';
import { i18n } from '../../i18n';
import { CloseIcon } from '../CloseIcon';
import { SearchIcon } from '../SearchIcon';
import './EventsFeedHeaderSearch.css';
const b = block('events-feed-header-search');
const SEARCH_ICON_SIZE = 16;
const CLOSE_ICON_SIZE = 12;
export const EventsFeedHeaderSearch = ({ className, initialValue, onSubmit, debounce = 300, placeholder, size = 'm', }) => {
    const handleChange = lodashDebounce(onSubmit, debounce);
    const [isSetInitValue, setIsSetInitValue] = useState(false);
    const [value, setValue] = useState(initialValue);
    const inputRef = useRef(null);
    useEffect(() => {
        if (!isSetInitValue && !value && initialValue) {
            setIsSetInitValue(true);
            setValue(initialValue);
        }
    }, [isSetInitValue, value, initialValue]);
    const iconData = value ? CloseIcon : SearchIcon;
    const iconSize = value ? CLOSE_ICON_SIZE : SEARCH_ICON_SIZE;
    const handleClick = useCallback(() => {
        var _a;
        if (value) {
            handleChange.cancel();
            setValue('');
            onSubmit('');
            (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        }
    }, [value, handleChange, onSubmit]);
    const rightContent = useMemo(() => (React.createElement("button", { className: b('input-icon'), onClick: handleClick, "aria-label": i18n('clear'), disabled: !value },
        React.createElement(Icon, { data: iconData, size: iconSize }))), [handleClick, value, iconData, iconSize]);
    const handleUpdate = useCallback((query) => {
        setValue(query);
        handleChange(query);
    }, [handleChange]);
    return (React.createElement("div", { className: b({ size }, className) },
        React.createElement(TextInput, { className: b('suggest'), value: value, onUpdate: handleUpdate, placeholder: placeholder, size: size === 'm' ? 'xl' : 'l', controlRef: inputRef, view: "clear", controlProps: {
                className: b('control'),
            }, rightContent: rightContent })));
};
export default EventsFeedHeaderSearch;
