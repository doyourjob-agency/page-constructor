import React, {useCallback, useContext, useMemo} from 'react';

import {Select} from '@gravity-ui/uikit';

import {
    EventsHeaderFilterContext,
    EventsHeaderFiltersContext,
    EventsHeaderFunctionsContext,
    EventsOption,
} from '../../../../context/eventsContext';
import {MobileContext} from '../../../../context/mobileContext';
import {block} from '../../../../utils';
import {EventsFeedHeaderSearch} from '../EventsFeedHeaderSearch/EventsFeedHeaderSearch';

import {renderFilter, renderOption, renderSwitcher} from './customRenders';

import './EventsFeedHeaderControls.scss';

const b = block('events-feed-header-controls');

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
        <EventsFeedHeaderSearch
            className={b('filter-input')}
            placeholder={label}
            initialValue={value}
            onSubmit={onChange}
        />
    </div>
);

const FilterSelect = ({
    label,
    value,
    onChange,
    items = [],
}: {
    value: string;
    onChange: (value: string) => void;
    label?: string;
    items?: EventsOption[];
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
    items?: EventsOption[];
}) => {
    const {onChangeFilter} = useContext(EventsHeaderFunctionsContext);

    const handleChangeFilter = useCallback(
        (data: string) => {
            onChangeFilter?.({[name]: data});
        },
        [name, onChangeFilter],
    );

    switch (type) {
        case 'input':
            return <FilterInput label={label} value={value} onChange={handleChangeFilter} />;
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

export type EventsFeedHeaderControlsProps = {
    title?: string;
};

export const EventsFeedHeaderControls = ({title}: EventsFeedHeaderControlsProps) => {
    const {filter} = useContext(EventsHeaderFilterContext);
    const {filters} = useContext(EventsHeaderFiltersContext);

    return (
        <div className={b()}>
            <h1 className={b('title')}>{title}</h1>
            <div className={b('filters')}>
                {filters.map((item) => (
                    <FilterMemo
                        key={item.name}
                        name={item.name}
                        type={item.type}
                        value={filter[item.name]}
                        label={item.label}
                        items={item.items}
                    />
                ))}
            </div>
        </div>
    );
};

export default React.memo(EventsFeedHeaderControls);
