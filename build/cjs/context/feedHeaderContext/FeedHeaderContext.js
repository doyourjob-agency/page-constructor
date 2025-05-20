"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedHeaderFunctionsContext = exports.FeedHeaderFiltersContext = exports.FeedHeaderFilterContext = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
exports.FeedHeaderFilterContext = react_1.default.createContext({
    filter: {},
});
exports.FeedHeaderFiltersContext = react_1.default.createContext({
    filters: [],
});
exports.FeedHeaderFunctionsContext = react_1.default.createContext({
    onChangeFilter: () => { },
});
