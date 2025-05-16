import React, {useCallback, useContext, useEffect, useMemo, useState} from 'react';

import {Select} from '@gravity-ui/uikit';

import {EventsHeaderContext, EventsOption} from '../../../../context/eventsContext';
import {MobileContext} from '../../../../context/mobileContext';
import {block} from '../../../../utils';
import {EventsFeedHeaderSearch} from '../EventsFeedHeaderSearch/EventsFeedHeaderSearch';

import {renderFilter, renderOption, renderSwitcher} from './customRenders';

import './EventsFeedHeaderControls.scss';

const b = block('events-feed-header-controls');

const VIRTUALIZATION_THRESHOLD = 1000;

const FilterInput = ({name, label}: {name: string; label?: string}) => {
    const {filter, onChangeFilter} = useContext(EventsHeaderContext);

    const initialValue = useMemo(() => filter[name] || '', [filter, name]);

    const [value, setValue] = useState<string>(initialValue);

    useEffect(() => {
        if (initialValue) {
            setValue((prev) => (prev ? prev : initialValue));
        }
    }, [initialValue]);

    const handleSubmit = useCallback(
        (searchValue: string) => {
            setValue(searchValue);

            onChangeFilter?.({[name]: searchValue});
        },
        [name, onChangeFilter],
    );

    return (
        <div className={b('filter-item')}>
            <EventsFeedHeaderSearch
                className={b('filter-input')}
                placeholder={label}
                initialValue={value}
                onSubmit={handleSubmit}
            />
        </div>
    );
};

const FilterSelect = ({
    name,
    label,
    items = [],
}: {
    name: string;
    label?: string;
    items?: EventsOption[];
}) => {
    const {filter, onChangeFilter} = useContext(EventsHeaderContext);
    const isMobile = useContext(MobileContext);

    const initialValue = useMemo(() => filter[name] || '', [filter, name]);

    const handleUpdate = useCallback(
        (selected: string[]) => {
            const asString = selected.join(',');

            onChangeFilter?.({[name]: asString});
        },
        [name, onChangeFilter],
    );

    const value = useMemo(() => (initialValue ? [...initialValue.split(',')] : []), [initialValue]);

    return (
        <div className={b('filter-item')}>
            <Select
                className={b('filter-select')}
                size="xl"
                options={items}
                defaultValue={[]}
                value={value}
                onUpdate={handleUpdate}
                popupClassName={b('popup', {mobile: isMobile})}
                renderControl={renderSwitcher({
                    initial: value,
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
    type,
    name,
    label,
    items,
}: {
    type: string;
    name: string;
    label?: string;
    items?: EventsOption[];
}) => {
    switch (type) {
        case 'input':
            return <FilterInput name={name} label={label} />;
        case 'select':
            return <FilterSelect name={name} label={label} items={items} />;
        default:
            return null;
    }
};

export type EventsFeedHeaderControlsProps = {
    title?: string;
};

export const EventsFeedHeaderControls = ({title}: EventsFeedHeaderControlsProps) => {
    const {filters} = useContext(EventsHeaderContext);

    return (
        <div className={b()}>
            <h1 className={b('title')}>{title}</h1>
            <div className={b('filters')}>
                {filters.map((filter) => (
                    <Filter
                        key={filter.name}
                        type={filter.type}
                        name={filter.name}
                        label={filter.label}
                        items={filter.items}
                    />
                ))}
            </div>
        </div>
    );
};

export default React.memo(EventsFeedHeaderControls);
