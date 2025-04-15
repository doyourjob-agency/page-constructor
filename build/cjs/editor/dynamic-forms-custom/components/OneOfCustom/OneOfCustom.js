"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OneOfCustom = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const dynamic_forms_1 = require("@gravity-ui/dynamic-forms");
const ajv_1 = tslib_1.__importDefault(require("ajv"));
const isEmpty_1 = tslib_1.__importDefault(require("lodash/isEmpty"));
const utils_1 = require("../../../../utils");
const useOneOf_1 = require("../../hooks/useOneOf");
const b = (0, utils_1.block)('one-of-custom');
const ajv = new ajv_1.default({
    $data: true,
    strict: false,
    strictSchema: false,
    strictTypes: false,
    strictRequired: false,
});
const getOneOfCustomSpecDefaultType = (spec) => { var _a, _b; return ((_b = (_a = spec.viewSpec) === null || _a === void 0 ? void 0 : _a.order) === null || _b === void 0 ? void 0 : _b[0]) || Object.keys(spec.properties || {})[0]; };
// dynamic-forms pass {} as default value for required properties of all types
// this function replaces {} with default value accordingly to selected OneOf option spec type
const getControllerDefautValue = (value, valueSpecType) => {
    const isDefaultValue = typeof value === 'object' && (0, isEmpty_1.default)(value);
    const defaultValue = valueSpecType ? (0, useOneOf_1.getSpecTypeDefaultValue)(valueSpecType) : undefined;
    return isDefaultValue ? defaultValue : value;
};
/**
 * Customization of @gravity-ui/dynamic-forms OneOf component
 *
 * Main differences from original component:
 *
 * 1. Custom component can detect initial data type by it's json schema passed it __schema property of spec and
 * shows according input
 *
 * 2. Custom component doesn't create additional nested level of data for each OneOf option and doesn't wraps data value, e.g.
 *
 * custom component: {propertyName: propertyValue}
 * original component: {propertyName: {option1: {value: propertyValue}}}
 *
 * @param {ObjectIndependentInputProps} props - props of original OneOf component
 * @returns {React.FC<ObjectIndependentInputProps>}
 */
const OneOfCustom = (props) => {
    var _a;
    const { spec, input, name } = props;
    const { properties } = spec;
    //getting oneOf option type from initial value
    const valueType = (0, react_1.useMemo)(() => {
        var _a;
        return (properties &&
            ((_a = Object.keys(properties)) === null || _a === void 0 ? void 0 : _a.find((key) => {
                const fieldSchema = (properties === null || properties === void 0 ? void 0 : properties[key]).__schema;
                return fieldSchema && ajv.validate(fieldSchema, (0, dynamic_forms_1.transformArrOut)(input.value));
            }))) ||
            getOneOfCustomSpecDefaultType(spec);
    }, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);
    const { oneOfValue, specProperties, toggler } = (0, useOneOf_1.useOneOf)({
        props: Object.assign(Object.assign({}, props), { input: Object.assign(Object.assign({}, input), { value: valueType ? { [valueType]: input.value } : input.value }) }),
    });
    const parentOnChange = react_1.default.useCallback((_childName, childValue, childErrors) => {
        input.onChange(childValue, childErrors);
    }, [input]);
    const parentOnUnmount = react_1.default.useCallback((childName) => input.onChange((currentValue) => currentValue, { [childName]: false }), [input]);
    const valueSpecType = ((_a = specProperties[oneOfValue]) === null || _a === void 0 ? void 0 : _a.type) || dynamic_forms_1.SpecTypes.Object;
    return (react_1.default.createElement("div", { className: b() },
        react_1.default.createElement("div", null, toggler),
        specProperties[oneOfValue] && (react_1.default.createElement(dynamic_forms_1.GroupIndent, null,
            react_1.default.createElement(dynamic_forms_1.Controller, { value: getControllerDefautValue(input.value, valueSpecType), name: name, spec: specProperties[oneOfValue], parentOnChange: parentOnChange, parentOnUnmount: parentOnUnmount, key: `${name}.${oneOfValue}` })))));
};
exports.OneOfCustom = OneOfCustom;
