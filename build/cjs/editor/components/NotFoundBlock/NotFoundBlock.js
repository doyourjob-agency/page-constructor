"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundBlock = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const components_1 = require("../../../components");
const utils_1 = require("../../../utils");
const i18n_1 = require("./i18n");
const b = (0, utils_1.block)('not-found-block');
const NotFoundBlock = ({ type, children }) => children ? (react_1.default.createElement(react_1.Fragment, null, children)) : (react_1.default.createElement(components_1.BlockBase, null,
    react_1.default.createElement("div", { className: b() }, (0, i18n_1.i18n)('message', { type }))));
exports.NotFoundBlock = NotFoundBlock;
