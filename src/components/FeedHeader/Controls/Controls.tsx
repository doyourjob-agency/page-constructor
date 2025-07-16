import React, {useCallback, useContext} from 'react';

import {
    FeedHeaderFilterContext,
    FeedHeaderFiltersContext,
    FeedHeaderFunctionsContext,
    FeedHeaderOption,
} from '../../../context/feedHeaderContext';
import {block} from '../../../utils';
import FilterInput from '../../Filters/FilterInput/FilterInput';
import FilterMultipleSelect from '../../Filters/FilterMultipleSelect/FilterMultipleSelect';
import FilterSelect from '../../Filters/FilterSelect/FilterSelect';
import {i18n} from '../i18n';

import './Controls.scss';

const b = block('feed-header-controls');

const Filter = ({
    name,
    type,
    value,
    label,
    items,
}: {
    name: string;
    type: string;
    value: string;
    label?: string;
    items?: FeedHeaderOption[];
}) => {
    const {onChangeFilter} = useContext(FeedHeaderFunctionsContext);

    const handleChangeFilter = useCallback(
        (data: string) => {
            onChangeFilter?.({[name]: data});
        },
        [name, onChangeFilter],
    );

    switch (type) {
        case 'input':
            return (
                <div className={b('filter-item')}>
                    <FilterInput
                        label={label}
                        value={value}
                        onChange={handleChangeFilter}
                        clearText={i18n('clear')}
                    />
                </div>
            );
        case 'multiple-select':
            return (
                <div className={b('filter-item')}>
                    <FilterMultipleSelect
                        label={label}
                        items={items}
                        value={value}
                        onChange={handleChangeFilter}
                        filterText={i18n('search')}
                    />
                </div>
            );
        case 'select':
            return (
                <div className={b('filter-item')}>
                    <FilterSelect
                        label={label}
                        items={items}
                        value={value}
                        onChange={handleChangeFilter}
                    />
                </div>
            );
        default:
            return null;
    }
};

const FilterMemo = React.memo(Filter);

export type ControlsProps = {
    title?: string;
};

export const Controls = ({title}: ControlsProps) => {
    const {filters} = useContext(FeedHeaderFiltersContext);
    const {filter} = useContext(FeedHeaderFilterContext);

    return (
        <div className={b()}>
            <h1 className={b('title')}>{title}</h1>
            <div className={b('filters')}>
                {filters.map((item) => (
                    <FilterMemo
                        key={item.name}
                        name={item.name}
                        value={filter[item.name]}
                        type={item.type}
                        label={item.label}
                        items={item.items}
                    />
                ))}
            </div>
        </div>
    );
};

export default React.memo(Controls);
