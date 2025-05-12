"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.qaIdByDefault = void 0;
const tslib_1 = require("tslib");
//TODO move to cloud components
const react_1 = tslib_1.__importDefault(require("react"));
const utils_1 = require("../../utils");
const b = (0, utils_1.block)('Anchor');
exports.qaIdByDefault = 'qa-anchor';
const Anchor = ({ id, className, qa }) => (react_1.default.createElement("div", { id: id, className: b(null, className), "data-qa": qa || exports.qaIdByDefault }));
exports.default = Anchor;
