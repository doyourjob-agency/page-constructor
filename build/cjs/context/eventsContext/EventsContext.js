"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsContext = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
exports.EventsContext = react_1.default.createContext({ events: [] });
