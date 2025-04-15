"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getThemedValue = exports.isThemedValue = void 0;
const constants_1 = require("../components/constants");
function isThemedValue(value) {
    return typeof value === 'object' && value !== null && constants_1.DEFAULT_THEME in value;
}
exports.isThemedValue = isThemedValue;
function getThemedValue(value, theme = constants_1.DEFAULT_THEME) {
    if (isThemedValue(value)) {
        return value[theme] || value[constants_1.DEFAULT_THEME];
    }
    else {
        return value;
    }
}
exports.getThemedValue = getThemedValue;
