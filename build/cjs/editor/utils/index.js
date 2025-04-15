"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIsMobile = exports.getBlockId = exports.addCustomDecorator = exports.formatBlockName = void 0;
const tslib_1 = require("tslib");
const capitalize_1 = tslib_1.__importDefault(require("lodash/capitalize"));
const types_1 = require("../types");
const formatBlockName = (name) => (0, capitalize_1.default)(name).replace(/(block|-)/g, ' ');
exports.formatBlockName = formatBlockName;
const addCustomDecorator = (decorators, custom = {}) => {
    const customDecorators = custom.decorators || {};
    return Object.assign(Object.assign({}, custom), { decorators: Object.assign(Object.assign({}, customDecorators), { block: [...(customDecorators.block || []), ...decorators] }) });
};
exports.addCustomDecorator = addCustomDecorator;
const getBlockId = ({ index, type }) => `${type}${index === undefined ? '' : `-${index}`}`;
exports.getBlockId = getBlockId;
const checkIsMobile = (viewMode) => [types_1.ViewModeItem.Mobile, types_1.ViewModeItem.Tablet].includes(viewMode);
exports.checkIsMobile = checkIsMobile;
