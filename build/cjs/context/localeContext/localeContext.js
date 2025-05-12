"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocaleContext = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const uikit_1 = require("@gravity-ui/uikit");
exports.LocaleContext = react_1.default.createContext({ lang: uikit_1.Lang.Ru, tld: '.ru' });
