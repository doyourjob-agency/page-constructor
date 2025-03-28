import React, {useContext, useMemo, useState} from 'react';

import {Select} from '@gravity-ui/uikit';

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
    handleLoadData: (query: Query) => void;
    online?: SelectItem[];
    types?: SelectItem[];
    queryParams: Query;
};

export const EventsFeedHeaderControls = ({
    title,
    handleLoadData,
    online = [],
    types = [],
    queryParams,
}: EventsFeedHeaderControlsProps) => {
    const isMobile = useContext(MobileContext);

    const {search: searchInitial, online: onlineInitial, types: typesInitial} = queryParams || {};

    const [search, setSearch] = useState<string>((searchInitial as string) || '');

    const handleSearch = (searchValue: string) => {
        setSearch(searchValue);

        handleLoadData({search: searchValue});
    };

    const handleOnlineSelect = (selected: string[]) => {
        const isEmptyTag = selected.some((item) => item === 'empty');

        handleLoadData({
            online: isEmptyTag ? '' : selected[0],
        });
    };

    const handleTypesSelect = (selected: string[]) => {
        const servicesAsString = selected.join(',');

        handleLoadData({types: servicesAsString});
    };

    const onlineItems = useMemo(
        () => [{value: 'empty', content: i18n('all_status')} as unknown as SelectItem, ...online],
        [online],
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
                        options={onlineItems}
                        defaultValue={[onlineInitial] as string[]}
                        value={[onlineInitial] as string[]}
                        onUpdate={handleOnlineSelect}
                        popupClassName={b('popup', {mobile: isMobile})}
                        renderControl={renderSwitcher({
                            initial: [onlineInitial],
                            list: onlineItems,
                            defaultLabel: i18n('all_status'),
                        })}
                        disablePortal
                        virtualizationThreshold={VIRTUALIZATION_THRESHOLD}
                        renderOption={renderOption}
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
            </div>
        </div>
    );
};

export default EventsFeedHeaderControls;
