"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsRecentContext = exports.EventsUpcomingContext = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
exports.EventsUpcomingContext = react_1.default.createContext({
    upcoming: [],
});
exports.EventsRecentContext = react_1.default.createContext({
    recent: [],
    page: 1,
    pageSize: 6,
    onLoadMore: () => { },
});
