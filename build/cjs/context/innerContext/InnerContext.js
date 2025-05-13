"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InnerContext = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
exports.InnerContext = react_1.default.createContext({
    blockTypes: [],
    subBlockTypes: [],
    headerBlockTypes: [],
    navigationBlockTypes: [],
    itemMap: {},
    navItemMap: {},
    microdata: {},
});
