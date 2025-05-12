"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsFeedHeaderControls = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const uikit_1 = require("@gravity-ui/uikit");
const mobileContext_1 = require("../../../../context/mobileContext");
const utils_1 = require("../../../../utils");
const i18n_1 = require("../../i18n");
const EventsFeedHeaderSearch_1 = require("../EventsFeedHeaderSearch/EventsFeedHeaderSearch");
const customRenders_1 = require("./customRenders");
const b = (0, utils_1.block)('events-feed-header-controls');
const VIRTUALIZATION_THRESHOLD = 1000;
const EventsFeedHeaderControls = ({ title, handleLoadData, countries = [], types = [], queryParams, }) => {
    const isMobile = (0, react_1.useContext)(mobileContext_1.MobileContext);
    const { search: searchInitial, countries: countriesInitial, types: typesInitial, } = queryParams || {};
    const [search, setSearch] = (0, react_1.useState)(searchInitial || '');
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
    const countriesItems = (0, react_1.useMemo)(() => (countriesInitial ? [...countriesInitial.split(',')] : []), [countriesInitial]);
    const typesItems = (0, react_1.useMemo)(() => (typesInitial ? [...typesInitial.split(',')] : []), [typesInitial]);
    return (react_1.default.createElement("div", { className: b() },
        react_1.default.createElement("h1", { className: b('title') }, title),
        react_1.default.createElement("div", { className: b('filters') },
            react_1.default.createElement("div", { className: b('filter-item') },
                react_1.default.createElement(EventsFeedHeaderSearch_1.EventsFeedHeaderSearch, { className: b('search'), placeholder: (0, i18n_1.i18n)('search'), initialValue: search, onSubmit: handleSearch })),
            react_1.default.createElement("div", { className: b('filter-item') },
                react_1.default.createElement(uikit_1.Select, { className: b('select'), size: "xl", options: types, defaultValue: [], value: typesItems, onUpdate: handleTypesSelect, popupClassName: b('popup', { mobile: isMobile }), renderControl: (0, customRenders_1.renderSwitcher)({
                        initial: typesItems,
                        list: types,
                        defaultLabel: (0, i18n_1.i18n)('all_types'),
                    }), disablePortal: true, virtualizationThreshold: VIRTUALIZATION_THRESHOLD, renderOption: customRenders_1.renderOption, renderFilter: customRenders_1.renderFilter, multiple: true, filterable: true, hasClear: true })),
            react_1.default.createElement("div", { className: b('filter-item') },
                react_1.default.createElement(uikit_1.Select, { className: b('select'), size: "xl", options: countries, defaultValue: [], value: countriesItems, onUpdate: handleCountriesSelect, popupClassName: b('popup', { mobile: isMobile }), renderControl: (0, customRenders_1.renderSwitcher)({
                        initial: countriesItems,
                        list: countries,
                        defaultLabel: (0, i18n_1.i18n)('all_countries'),
                    }), disablePortal: true, virtualizationThreshold: VIRTUALIZATION_THRESHOLD, renderOption: customRenders_1.renderOption, renderFilter: customRenders_1.renderFilter, multiple: true, filterable: true, hasClear: true })))));
};
exports.EventsFeedHeaderControls = EventsFeedHeaderControls;
exports.default = exports.EventsFeedHeaderControls;
