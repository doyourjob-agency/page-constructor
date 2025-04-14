import React, { useCallback } from 'react';
import { Button, TextInput } from '@gravity-ui/uikit';
import { CloseIcon } from '../../../icons/CloseIcon';
import { SearchIcon } from '../../../icons/SearchIcon';
import { block } from '../../../utils';
import { i18n } from '../i18n';
import './ServiceSearch.css';
const b = block('services-search');
export const ServicesSearch = ({ value, setValue }) => {
    const handleChange = useCallback((e) => setValue(e.target.value), [setValue]);
    const handleReset = useCallback(() => setValue(''), [setValue]);
    return (React.createElement("div", { className: b() },
        React.createElement("div", { className: b('suggest-container') },
            React.createElement(TextInput, { className: b('suggest'), size: "l", placeholder: i18n('search'), onChange: handleChange, value: value })),
        value ? (React.createElement(Button, { onClick: handleReset, className: b('button'), view: "flat", size: "s" },
            React.createElement(Button.Icon, null,
                React.createElement(CloseIcon, { width: 12, height: 12 })))) : (React.createElement(Button, { className: b('button'), view: "flat", size: "s" },
            React.createElement(Button.Icon, null,
                React.createElement(SearchIcon, null))))));
};
export default ServicesSearch;
