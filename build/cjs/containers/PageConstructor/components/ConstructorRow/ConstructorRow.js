"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConstructorRow = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const grid_1 = require("../../../../grid");
const utils_1 = require("../../../../utils");
const b = (0, utils_1.block)('constructor-row');
const ConstructorRow = ({ children }) => children ? (react_1.default.createElement(grid_1.Row, { className: b() },
    react_1.default.createElement(grid_1.Col, null, children))) : null;
exports.ConstructorRow = ConstructorRow;
