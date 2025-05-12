"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const utils_1 = require("../../utils");
const i18n_1 = require("./i18n");
const b = (0, utils_1.block)('unpublished-label');
const UnpublishedLabel = ({ className, children, type = 'line', }) => (react_1.default.createElement("div", { className: b({ type }, className) }, children || (0, i18n_1.i18n)('label_non_published')));
exports.default = UnpublishedLabel;
