"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controls = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const uikit_1 = require("@gravity-ui/uikit");
const feedHeaderContext_1 = require("../../../context/feedHeaderContext");
const mobileContext_1 = require("../../../context/mobileContext");
const utils_1 = require("../../../utils");
const Search_1 = require("../Search/Search");
const customRenders_1 = require("./customRenders");
const b = (0, utils_1.block)('feed-header-controls');
const VIRTUALIZATION_THRESHOLD = 1000;
const FilterInput = ({ value, onChange, label, }) => (react_1.default.createElement("div", { className: b('filter-item') },
    react_1.default.createElement(Search_1.Search, { className: b('filter-input'), placeholder: label, initialValue: value, onSubmit: onChange })));
const FilterMultipleSelect = ({ label, value, onChange, items = [], }) => {
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
const FilterSelect = ({ label, value, onChange, items = [], }) => {
    const isMobile = (0, react_1.useContext)(mobileContext_1.MobileContext);
    const handleUpdate = (selected) => {
        const isEmpty = selected.some((tag) => tag === 'empty');
        onChange(isEmpty ? '' : selected[0]);
    };
    const valueLocal = (0, react_1.useMemo)(() => (value ? [value] : []), [value]);
    return (react_1.default.createElement("div", { className: b('filter-item') },
        react_1.default.createElement(uikit_1.Select, { className: b('filter-select'), size: "xl", options: items, defaultValue: [], value: valueLocal, onUpdate: handleUpdate, popupClassName: b('popup', { mobile: isMobile }), renderControl: (0, customRenders_1.renderSwitcher)({
                initial: valueLocal,
                list: items,
                defaultLabel: label || '',
            }), disablePortal: true, virtualizationThreshold: VIRTUALIZATION_THRESHOLD, renderOption: customRenders_1.renderOption })));
};
const Filter = ({ name, type, value, label, items, }) => {
    const { onChangeFilter } = (0, react_1.useContext)(feedHeaderContext_1.FeedHeaderFunctionsContext);
    const handleChangeFilter = (0, react_1.useCallback)((data) => {
        onChangeFilter === null || onChangeFilter === void 0 ? void 0 : onChangeFilter({ [name]: data });
    }, [name, onChangeFilter]);
    switch (type) {
        case 'input':
            return react_1.default.createElement(FilterInput, { label: label, value: value, onChange: handleChangeFilter });
        case 'multiple-select':
            return (react_1.default.createElement(FilterMultipleSelect, { label: label, items: items, value: value, onChange: handleChangeFilter }));
        case 'select':
            return (react_1.default.createElement(FilterSelect, { label: label, items: items, value: value, onChange: handleChangeFilter }));
        default:
            return null;
    }
};
const FilterMemo = react_1.default.memo(Filter);
const Controls = ({ title }) => {
    const { filters } = (0, react_1.useContext)(feedHeaderContext_1.FeedHeaderFiltersContext);
    const { filter } = (0, react_1.useContext)(feedHeaderContext_1.FeedHeaderFilterContext);
    return (react_1.default.createElement("div", { className: b() },
        react_1.default.createElement("h1", { className: b('title') }, title),
        react_1.default.createElement("div", { className: b('filters') }, filters.map((item) => (react_1.default.createElement(FilterMemo, { key: item.name, name: item.name, value: filter[item.name], type: item.type, label: item.label, items: item.items }))))));
};
exports.Controls = Controls;
exports.default = react_1.default.memo(exports.Controls);
