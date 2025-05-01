"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const utils_1 = require("../../utils");
const index_1 = require("../index");
const b = (0, utils_1.block)('meta-info');
const MetaInfo = ({ items, className }) => (react_1.default.createElement("h4", { className: b(null, className) }, items.map((metaInfoItem) => (react_1.default.createElement(index_1.YFMWrapper, { content: metaInfoItem, key: metaInfoItem, className: b('item'), modifiers: { constructor: true, constructorMetaInfo: true } })))));
exports.default = MetaInfo;
