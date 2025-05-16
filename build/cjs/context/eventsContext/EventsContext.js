"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsRecentContext = exports.EventsUpcomingContext = exports.EventsHeaderFunctionsContext = exports.EventsHeaderFiltersContext = exports.EventsHeaderFilterContext = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
exports.EventsHeaderFilterContext = react_1.default.createContext({
    filter: {},
});
exports.EventsHeaderFiltersContext = react_1.default.createContext({
    filters: [],
});
exports.EventsHeaderFunctionsContext = react_1.default.createContext({
    onChangeFilter: () => { },
});
exports.EventsUpcomingContext = react_1.default.createContext({
    upcoming: [],
});
exports.EventsRecentContext = react_1.default.createContext({
    recent: [],
    page: 1,
    pageSize: 6,
    onLoadMore: () => { },
});
