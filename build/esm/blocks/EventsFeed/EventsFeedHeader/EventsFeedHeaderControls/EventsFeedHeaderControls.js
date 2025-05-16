import React, { useCallback, useContext, useMemo } from 'react';
import { Select } from '@gravity-ui/uikit';
import { EventsHeaderFilterContext, EventsHeaderFiltersContext, EventsHeaderFunctionsContext, } from '../../../../context/eventsContext';
import { MobileContext } from '../../../../context/mobileContext';
import { block } from '../../../../utils';
import { EventsFeedHeaderSearch } from '../EventsFeedHeaderSearch/EventsFeedHeaderSearch';
import { renderFilter, renderOption, renderSwitcher } from './customRenders';
import './EventsFeedHeaderControls.css';
const b = block('events-feed-header-controls');
const VIRTUALIZATION_THRESHOLD = 1000;
const FilterInput = ({ value, onChange, label, }) => (React.createElement("div", { className: b('filter-item') },
    React.createElement(EventsFeedHeaderSearch, { className: b('filter-input'), placeholder: label, initialValue: value, onSubmit: onChange })));
const FilterSelect = ({ label, value, onChange, items = [], }) => {
    const isMobile = useContext(MobileContext);
    const handleUpdate = (selected) => {
        const asString = selected.join(',');
        onChange(asString);
    };
    const valueLocal = useMemo(() => (value ? [...value.split(',')] : []), [value]);
    return (React.createElement("div", { className: b('filter-item') },
        React.createElement(Select, { className: b('filter-select'), size: "xl", options: items, defaultValue: [], value: valueLocal, onUpdate: handleUpdate, popupClassName: b('popup', { mobile: isMobile }), renderControl: renderSwitcher({
                initial: valueLocal,
                list: items,
                defaultLabel: label || '',
            }), disablePortal: true, virtualizationThreshold: VIRTUALIZATION_THRESHOLD, renderOption: renderOption, renderFilter: renderFilter, multiple: true, filterable: true, hasClear: true })));
};
const Filter = ({ name, type, value, label, items, }) => {
    const { onChangeFilter } = useContext(EventsHeaderFunctionsContext);
    const handleChangeFilter = useCallback((data) => {
        onChangeFilter === null || onChangeFilter === void 0 ? void 0 : onChangeFilter({ [name]: data });
    }, [name, onChangeFilter]);
    switch (type) {
        case 'input':
            return React.createElement(FilterInput, { label: label, value: value, onChange: handleChangeFilter });
        case 'select':
            return (React.createElement(FilterSelect, { label: label, items: items, value: value, onChange: handleChangeFilter }));
        default:
            return null;
    }
};
const FilterMemo = React.memo(Filter);
export const EventsFeedHeaderControls = ({ title }) => {
    const { filter } = useContext(EventsHeaderFilterContext);
    const { filters } = useContext(EventsHeaderFiltersContext);
    return (React.createElement("div", { className: b() },
        React.createElement("h1", { className: b('title') }, title),
        React.createElement("div", { className: b('filters') }, filters.map((item) => (React.createElement(FilterMemo, { key: item.name, name: item.name, type: item.type, value: filter[item.name], label: item.label, items: item.items }))))));
};
export default React.memo(EventsFeedHeaderControls);
