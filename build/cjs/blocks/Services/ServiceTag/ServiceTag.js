"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceTag = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const utils_1 = require("../../../utils");
const b = (0, utils_1.block)('services-tag');
const ServiceTag = ({ tag, small }) => {
    if (!tag)
        return null;
    const capitalize = (str) => {
        return str[0].toUpperCase() + str.substring(1);
    };
    return (react_1.default.createElement("span", { className: b({ yellow: tag === 'new', blue: tag !== 'new', small }) }, capitalize(tag)));
};
exports.ServiceTag = ServiceTag;
exports.default = exports.ServiceTag;
