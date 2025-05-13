"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = require("react");
const parser_1 = tslib_1.__importDefault(require("../dynamic-forms-custom/parser"));
function useFormSpec(schema) {
    return (0, react_1.useMemo)(() => parser_1.default.parse(schema), [schema]);
}
exports.default = useFormSpec;
