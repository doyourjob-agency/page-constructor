import React, {useContext, useMemo, useState} from 'react';

import {Select} from '@gravity-ui/uikit';

import {EventsFilter} from '../../../../context/eventsContext';
import {MobileContext} from '../../../../context/mobileContext';
import {Query, block} from '../../../../utils';
import {i18n} from '../../i18n';
import {EventsFeedHeaderSearch} from '../EventsFeedHeaderSearch/EventsFeedHeaderSearch';

import {renderFilter, renderOption, renderSwitcher} from './customRenders';

import './EventsFeedHeaderControls.scss';

const b = block('events-feed-header-controls');

const VIRTUALIZATION_THRESHOLD = 1000;

export type SelectItem = {
    content: string;
    value: string;
};

export type EventsFeedHeaderControlsProps = {
    title?: string;
    onChangeFilter?: (filter: EventsFilter) => void;
    countries?: SelectItem[];
    types?: SelectItem[];
    queryParams: Query;
};

export const EventsFeedHeaderControls = ({
    title,
    onChangeFilter,
    countries = [],
    types = [],
    queryParams,
}: EventsFeedHeaderControlsProps) => {
    const isMobile = useContext(MobileContext);

    const {
        search: searchInitial,
        countries: countriesInitial,
        types: typesInitial,
    } = queryParams || {};

    const [search, setSearch] = useState<string>((searchInitial as string) || '');

    const handleSearch = (searchValue: string) => {
        setSearch(searchValue);

        onChangeFilter?.({search: searchValue});
    };

    const handleCountriesSelect = (selected: string[]) => {
        const countriesAsString = selected.join(',');

        onChangeFilter?.({countries: countriesAsString});
    };

    const handleTypesSelect = (selected: string[]) => {
        const servicesAsString = selected.join(',');

        onChangeFilter?.({types: servicesAsString});
    };

    const countriesItems = useMemo(
        () => (countriesInitial ? [...(countriesInitial as string).split(',')] : []),
        [countriesInitial],
    );

    const typesItems = useMemo(
        () => (typesInitial ? [...(typesInitial as string).split(',')] : []),
        [typesInitial],
    );

    return (
        <div className={b()}>
            <h1 className={b('title')}>{title}</h1>
            <div className={b('filters')}>
                <div className={b('filter-item')}>
                    <EventsFeedHeaderSearch
                        className={b('search')}
                        placeholder={i18n('search')}
                        initialValue={search}
                        onSubmit={handleSearch}
                    />
                </div>
                <div className={b('filter-item')}>
                    <Select
                        className={b('select')}
                        size="xl"
                        options={types}
                        defaultValue={[]}
                        value={typesItems}
                        onUpdate={handleTypesSelect}
                        popupClassName={b('popup', {mobile: isMobile})}
                        renderControl={renderSwitcher({
                            initial: typesItems,
                            list: types,
                            defaultLabel: i18n('all_types'),
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
                <div className={b('filter-item')}>
                    <Select
                        className={b('select')}
                        size="xl"
                        options={countries}
                        defaultValue={[]}
                        value={countriesItems}
                        onUpdate={handleCountriesSelect}
                        popupClassName={b('popup', {mobile: isMobile})}
                        renderControl={renderSwitcher({
                            initial: countriesItems,
                            list: countries,
                            defaultLabel: i18n('all_countries'),
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
            </div>
        </div>
    );
};

export default EventsFeedHeaderControls;
