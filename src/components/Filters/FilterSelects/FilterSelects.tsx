import React, {useCallback} from 'react';

import {SelectProps} from '../../../models';
import {block} from '../../../utils';
import FilterSelect from '../FilterSelect/FilterSelect';

import './FilterSelects.scss';

const b = block('filter-selects');

interface FilterSelectsProps {
    selects: SelectProps[];
    filters: Record<string, string>;
    handleChange: (name: string, value: string) => void;
}

const SelectItem = ({
    name,
    value,
    items,
    handleChange,
}: {
    name: string;
    value: string;
    items: SelectProps['options'];
    handleChange: FilterSelectsProps['handleChange'];
}) => {
    const handleChangeLocal = useCallback(
        (data: string) => handleChange(name, data),
        [handleChange, name],
    );
    return <FilterSelect value={value} items={items} onChange={handleChangeLocal} />;
};

export const FilterSelects = ({selects, filters, handleChange}: FilterSelectsProps) => {
    if (!selects.length) return null;

    return (
        <div className={b()}>
            {selects.map(({name, options}) => (
                <div className={b('select')} key={name}>
                    <SelectItem
                        name={name}
                        items={options}
                        value={filters[name]}
                        handleChange={handleChange}
                    />
                </div>
            ))}
        </div>
    );
};

export default FilterSelects;
