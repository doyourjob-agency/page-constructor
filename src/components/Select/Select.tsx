import React, {useCallback} from 'react';

import {SelectProps} from '../../models';
import {block} from '../../utils';

import './Select.scss';

const b = block('select');

interface Props extends SelectProps {
    onChange?: (name: string, value: string) => void;
}

export const Select = ({name, options, onChange}: Props) => {
    const handleChange = useCallback(
        (e: React.SyntheticEvent<HTMLSelectElement, Event>) => {
            onChange?.(name, e.currentTarget.value);
        },
        [name, onChange],
    );
    return (
        <select name={name} className={b()} onChange={handleChange}>
            {options.map(({text, value}) => (
                <option key={value} value={value}>
                    {text}
                </option>
            ))}
        </select>
    );
};

export default Select;
