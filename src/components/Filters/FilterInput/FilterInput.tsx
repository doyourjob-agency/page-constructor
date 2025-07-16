import React from 'react';

import {block} from '../../../utils';
import {Search} from '../Search/Search';

import './FilterInput.scss';

const b = block('filter-input');

const FilterInput = ({
    value,
    onChange,
    label,
    clearText,
}: {
    value: string;
    onChange: (value: string) => void;
    label?: string;
    clearText?: string;
}) => (
    <Search
        className={b('filter-input')}
        placeholder={label}
        initialValue={value}
        onSubmit={onChange}
        clearText={clearText}
    />
);

export default React.memo(FilterInput);
