import React, { useContext, useMemo, useState } from 'react';
import { Select } from '@gravity-ui/uikit';
import { MobileContext } from '../../../../context/mobileContext';
import { block } from '../../../../utils';
import { i18n } from '../../i18n';
import { EventsFeedHeaderSearch } from '../EventsFeedHeaderSearch/EventsFeedHeaderSearch';
import { renderFilter, renderOption, renderSwitcher } from './customRenders';
import './EventsFeedHeaderControls.css';
const b = block('events-feed-header-controls');
const VIRTUALIZATION_THRESHOLD = 1000;
export const EventsFeedHeaderControls = ({ title, handleLoadData, countries = [], types = [], queryParams, }) => {
    const isMobile = useContext(MobileContext);
    const { search: searchInitial, countries: countriesInitial, types: typesInitial, } = queryParams || {};
    const [search, setSearch] = useState(searchInitial || '');
    const handleSearch = (searchValue) => {
        setSearch(searchValue);
        handleLoadData({ search: searchValue });
    };
    const handleCountriesSelect = (selected) => {
        const countriesAsString = selected.join(',');
        handleLoadData({ countries: countriesAsString });
    };
    const handleTypesSelect = (selected) => {
        const servicesAsString = selected.join(',');
        handleLoadData({ types: servicesAsString });
    };
    const countriesItems = useMemo(() => (countriesInitial ? [...countriesInitial.split(',')] : []), [countriesInitial]);
    const typesItems = useMemo(() => (typesInitial ? [...typesInitial.split(',')] : []), [typesInitial]);
    return (React.createElement("div", { className: b() },
        React.createElement("h1", { className: b('title') }, title),
        React.createElement("div", { className: b('filters') },
            React.createElement("div", { className: b('filter-item') },
                React.createElement(EventsFeedHeaderSearch, { className: b('search'), placeholder: i18n('search'), initialValue: search, onSubmit: handleSearch })),
            React.createElement("div", { className: b('filter-item') },
                React.createElement(Select, { className: b('select'), size: "xl", options: types, defaultValue: [], value: typesItems, onUpdate: handleTypesSelect, popupClassName: b('popup', { mobile: isMobile }), renderControl: renderSwitcher({
                        initial: typesItems,
                        list: types,
                        defaultLabel: i18n('all_types'),
                    }), disablePortal: true, virtualizationThreshold: VIRTUALIZATION_THRESHOLD, renderOption: renderOption, renderFilter: renderFilter, multiple: true, filterable: true, hasClear: true })),
            React.createElement("div", { className: b('filter-item') },
                React.createElement(Select, { className: b('select'), size: "xl", options: countries, defaultValue: [], value: countriesItems, onUpdate: handleCountriesSelect, popupClassName: b('popup', { mobile: isMobile }), renderControl: renderSwitcher({
                        initial: countriesItems,
                        list: countries,
                        defaultLabel: i18n('all_countries'),
                    }), disablePortal: true, virtualizationThreshold: VIRTUALIZATION_THRESHOLD, renderOption: renderOption, renderFilter: renderFilter, multiple: true, filterable: true, hasClear: true })))));
};
export default EventsFeedHeaderControls;
