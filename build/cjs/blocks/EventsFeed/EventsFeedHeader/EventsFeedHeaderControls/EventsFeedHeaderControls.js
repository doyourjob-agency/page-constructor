"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsFeedHeaderControls = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const uikit_1 = require("@gravity-ui/uikit");
const eventsContext_1 = require("../../../../context/eventsContext");
const mobileContext_1 = require("../../../../context/mobileContext");
const utils_1 = require("../../../../utils");
const EventsFeedHeaderSearch_1 = require("../EventsFeedHeaderSearch/EventsFeedHeaderSearch");
const customRenders_1 = require("./customRenders");
const b = (0, utils_1.block)('events-feed-header-controls');
const VIRTUALIZATION_THRESHOLD = 1000;
const FilterInput = ({ value, onChange, label, }) => (react_1.default.createElement("div", { className: b('filter-item') },
    react_1.default.createElement(EventsFeedHeaderSearch_1.EventsFeedHeaderSearch, { className: b('filter-input'), placeholder: label, initialValue: value, onSubmit: onChange })));
const FilterSelect = ({ label, value, onChange, items = [], }) => {
    const isMobile = (0, react_1.useContext)(mobileContext_1.MobileContext);
    const handleUpdate = (selected) => {
        const asString = selected.join(',');
        onChange(asString);
    };
    const valueLocal = (0, react_1.useMemo)(() => (value ? [...value.split(',')] : []), [value]);
    return (react_1.default.createElement("div", { className: b('filter-item') },
        react_1.default.createElement(uikit_1.Select, { className: b('filter-select'), size: "xl", options: items, defaultValue: [], value: valueLocal, onUpdate: handleUpdate, popupClassName: b('popup', { mobile: isMobile }), renderControl: (0, customRenders_1.renderSwitcher)({
                initial: valueLocal,
                list: items,
                defaultLabel: label || '',
            }), disablePortal: true, virtualizationThreshold: VIRTUALIZATION_THRESHOLD, renderOption: customRenders_1.renderOption, renderFilter: customRenders_1.renderFilter, multiple: true, filterable: true, hasClear: true })));
};
const Filter = ({ name, type, value, label, items, }) => {
    const { onChangeFilter } = (0, react_1.useContext)(eventsContext_1.EventsHeaderFunctionsContext);
    const handleChangeFilter = (0, react_1.useCallback)((data) => {
        onChangeFilter === null || onChangeFilter === void 0 ? void 0 : onChangeFilter({ [name]: data });
    }, [name, onChangeFilter]);
    switch (type) {
        case 'input':
            return react_1.default.createElement(FilterInput, { label: label, value: value, onChange: handleChangeFilter });
        case 'select':
            return (react_1.default.createElement(FilterSelect, { label: label, items: items, value: value, onChange: handleChangeFilter }));
        default:
            return null;
    }
};
const FilterMemo = react_1.default.memo(Filter);
const EventsFeedHeaderControls = ({ title }) => {
    const { filter } = (0, react_1.useContext)(eventsContext_1.EventsHeaderFilterContext);
    const { filters } = (0, react_1.useContext)(eventsContext_1.EventsHeaderFiltersContext);
    return (react_1.default.createElement("div", { className: b() },
        react_1.default.createElement("h1", { className: b('title') }, title),
        react_1.default.createElement("div", { className: b('filters') }, filters.map((item) => (react_1.default.createElement(FilterMemo, { key: item.name, name: item.name, type: item.type, value: filter[item.name], label: item.label, items: item.items }))))));
};
exports.EventsFeedHeaderControls = EventsFeedHeaderControls;
exports.default = react_1.default.memo(exports.EventsFeedHeaderControls);
