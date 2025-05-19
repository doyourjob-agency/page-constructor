import React, {useCallback, useContext, useMemo} from 'react';

import {Select} from '@gravity-ui/uikit';

import {
    FeedHeaderFilterContext,
    FeedHeaderFiltersContext,
    FeedHeaderFunctionsContext,
    FeedHeaderOption,
} from '../../../context/feedHeaderContext';
import {MobileContext} from '../../../context/mobileContext';
import {block} from '../../../utils';
import {Search} from '../Search/Search';

import {renderFilter, renderOption, renderSwitcher} from './customRenders';

import './Controls.scss';

const b = block('feed-header-controls');

const VIRTUALIZATION_THRESHOLD = 1000;

const FilterInput = ({
    value,
    onChange,
    label,
}: {
    value: string;
    onChange: (value: string) => void;
    label?: string;
}) => (
    <div className={b('filter-item')}>
        <Search
            className={b('filter-input')}
            placeholder={label}
            initialValue={value}
            onSubmit={onChange}
        />
    </div>
);

const FilterMultipleSelect = ({
    label,
    value,
    onChange,
    items = [],
}: {
    value: string;
    onChange: (value: string) => void;
    label?: string;
    items?: FeedHeaderOption[];
}) => {
    const isMobile = useContext(MobileContext);

    const handleUpdate = (selected: string[]) => {
        const asString = selected.join(',');

        onChange(asString);
    };

    const valueLocal = useMemo(() => (value ? [...value.split(',')] : []), [value]);

    return (
        <div className={b('filter-item')}>
            <Select
                className={b('filter-select')}
                size="xl"
                options={items}
                defaultValue={[]}
                value={valueLocal}
                onUpdate={handleUpdate}
                popupClassName={b('popup', {mobile: isMobile})}
                renderControl={renderSwitcher({
                    initial: valueLocal,
                    list: items,
                    defaultLabel: label || '',
                })}
                disablePortal
                virtualizationThreshold={VIRTUALIZATION_THRESHOLD}
                renderOption={renderOption}
                renderFilter={renderFilter}
                multiple
                filterable
                hasClear
            />
        </div>
    );
};

const FilterSelect = ({
    label,
    value,
    onChange,
    items = [],
}: {
    value: string;
    onChange: (value: string) => void;
    label?: string;
    items?: FeedHeaderOption[];
}) => {
    const isMobile = useContext(MobileContext);

    const handleUpdate = (selected: string[]) => {
        const isEmpty = selected.some((tag) => tag === 'empty');

        onChange(isEmpty ? '' : selected[0]);
    };

    const valueLocal = useMemo(() => (value ? [value] : []), [value]);

    return (
        <div className={b('filter-item')}>
            <Select
                className={b('filter-select')}
                size="xl"
                options={items}
                defaultValue={[]}
                value={valueLocal}
                onUpdate={handleUpdate}
                popupClassName={b('popup', {mobile: isMobile})}
                renderControl={renderSwitcher({
                    initial: valueLocal,
                    list: items,
                    defaultLabel: label || '',
                })}
                disablePortal
                virtualizationThreshold={VIRTUALIZATION_THRESHOLD}
                renderOption={renderOption}
            />
        </div>
    );
};

const Filter = ({
    name,
    type,
    label,
    items,
}: {
    name: string;
    type: string;
    label?: string;
    items?: FeedHeaderOption[];
}) => {
    const {onChangeFilter} = useContext(FeedHeaderFunctionsContext);
    const {filter} = useContext(FeedHeaderFilterContext);

    const value = useMemo(() => filter[name], [filter, name]);

    const handleChangeFilter = useCallback(
        (data: string) => {
            onChangeFilter?.({[name]: data});
        },
        [name, onChangeFilter],
    );

    switch (type) {
        case 'input':
            return <FilterInput label={label} value={value} onChange={handleChangeFilter} />;
        case 'multiple-select':
            return (
                <FilterMultipleSelect
                    label={label}
                    items={items}
                    value={value}
                    onChange={handleChangeFilter}
                />
            );
        case 'select':
            return (
                <FilterSelect
                    label={label}
                    items={items}
                    value={value}
                    onChange={handleChangeFilter}
                />
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

    return (
        <div className={b()}>
            <h1 className={b('title')}>{title}</h1>
            <div className={b('filters')}>
                {filters.map((item) => (
                    <FilterMemo
                        key={item.name}
                        name={item.name}
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
