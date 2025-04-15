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
export const EventsFeedHeaderControls = ({ title, handleLoadData, online = [], types = [], queryParams, }) => {
    const isMobile = useContext(MobileContext);
    const { search: searchInitial, online: onlineInitial, types: typesInitial } = queryParams || {};
    const [search, setSearch] = useState(searchInitial || '');
    const handleSearch = (searchValue) => {
        setSearch(searchValue);
        handleLoadData({ search: searchValue });
    };
    const handleOnlineSelect = (selected) => {
        const isEmptyTag = selected.some((item) => item === 'empty');
        handleLoadData({
            online: isEmptyTag ? '' : selected[0],
        });
    };
    const handleTypesSelect = (selected) => {
        const servicesAsString = selected.join(',');
        handleLoadData({ types: servicesAsString });
    };
    const onlineItems = useMemo(() => [{ value: 'empty', content: i18n('all_status') }, ...online], [online]);
    const typesItems = useMemo(() => (typesInitial ? [...typesInitial.split(',')] : []), [typesInitial]);
    return (React.createElement("div", { className: b() },
        React.createElement("h1", { className: b('title') }, title),
        React.createElement("div", { className: b('filters') },
            React.createElement("div", { className: b('filter-item') },
                React.createElement(EventsFeedHeaderSearch, { className: b('search'), placeholder: i18n('search'), initialValue: search, onSubmit: handleSearch })),
            React.createElement("div", { className: b('filter-item') },
                React.createElement(Select, { className: b('select'), size: "xl", options: onlineItems, defaultValue: [onlineInitial], value: [onlineInitial], onUpdate: handleOnlineSelect, popupClassName: b('popup', { mobile: isMobile }), renderControl: renderSwitcher({
                        initial: [onlineInitial],
                        list: onlineItems,
                        defaultLabel: i18n('all_status'),
                    }), disablePortal: true, virtualizationThreshold: VIRTUALIZATION_THRESHOLD, renderOption: renderOption })),
            React.createElement("div", { className: b('filter-item') },
                React.createElement(Select, { className: b('select'), size: "xl", options: types, defaultValue: [], value: typesItems, onUpdate: handleTypesSelect, popupClassName: b('popup', { mobile: isMobile }), renderControl: renderSwitcher({
                        initial: typesItems,
                        list: types,
                        defaultLabel: i18n('all_types'),
                    }), disablePortal: true, virtualizationThreshold: VIRTUALIZATION_THRESHOLD, renderOption: renderOption, renderFilter: renderFilter, multiple: true, filterable: true, hasClear: true })))));
};
export default EventsFeedHeaderControls;
