"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PressReleasesContext = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
exports.PressReleasesContext = react_1.default.createContext({
    pressReleases: [],
    page: 1,
    pageSize: 10,
    onLoadMore: () => { },
});
