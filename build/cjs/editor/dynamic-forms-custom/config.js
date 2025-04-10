"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dynamicConfig = void 0;
const tslib_1 = require("tslib");
const dynamic_forms_1 = require("@gravity-ui/dynamic-forms");
const cloneDeep_1 = tslib_1.__importDefault(require("lodash/cloneDeep"));
const OneOfCustom_1 = require("./components/OneOfCustom/OneOfCustom");
const getDynamicConfig = () => {
    const dynamicConfig = (0, cloneDeep_1.default)(dynamic_forms_1.dynamicConfig);
    dynamicConfig.object.inputs['oneof_custom'] = { Component: OneOfCustom_1.OneOfCustom, independent: true };
    return dynamicConfig;
};
exports.dynamicConfig = getDynamicConfig();
