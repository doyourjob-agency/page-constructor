"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormsContext = exports.DEFAULT_FORMS_CONTEXT_VALUE = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
exports.DEFAULT_FORMS_CONTEXT_VALUE = {};
exports.FormsContext = react_1.default.createContext(exports.DEFAULT_FORMS_CONTEXT_VALUE);
