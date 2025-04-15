"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCodeValidator = void 0;
const react_1 = require("react");
const validation_1 = require("../utils/validation");
function useCodeValidator(schema) {
    const validator = (0, react_1.useMemo)(() => (0, validation_1.createValidator)(schema), [schema]);
    return (0, react_1.useCallback)((code) => (0, validation_1.validate)(code, validator), [validator]);
}
exports.useCodeValidator = useCodeValidator;
