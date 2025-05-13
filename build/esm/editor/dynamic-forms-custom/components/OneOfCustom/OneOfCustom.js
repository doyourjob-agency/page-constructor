import React, { useMemo } from 'react';
import { Controller, GroupIndent, SpecTypes, transformArrOut, } from '@gravity-ui/dynamic-forms';
import Ajv from 'ajv';
import isEmpty from 'lodash/isEmpty';
import { block } from '../../../../utils';
import { getSpecTypeDefaultValue, useOneOf } from '../../hooks/useOneOf';
import './OneOfCustom.css';
const b = block('one-of-custom');
const ajv = new Ajv({
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
    const isDefaultValue = typeof value === 'object' && isEmpty(value);
    const defaultValue = valueSpecType ? getSpecTypeDefaultValue(valueSpecType) : undefined;
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
export const OneOfCustom = (props) => {
    var _a;
    const { spec, input, name } = props;
    const { properties } = spec;
    //getting oneOf option type from initial value
    const valueType = useMemo(() => {
        var _a;
        return (properties &&
            ((_a = Object.keys(properties)) === null || _a === void 0 ? void 0 : _a.find((key) => {
                const fieldSchema = (properties === null || properties === void 0 ? void 0 : properties[key]).__schema;
                return fieldSchema && ajv.validate(fieldSchema, transformArrOut(input.value));
            }))) ||
            getOneOfCustomSpecDefaultType(spec);
    }, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);
    const { oneOfValue, specProperties, toggler } = useOneOf({
        props: Object.assign(Object.assign({}, props), { input: Object.assign(Object.assign({}, input), { value: valueType ? { [valueType]: input.value } : input.value }) }),
    });
    const parentOnChange = React.useCallback((_childName, childValue, childErrors) => {
        input.onChange(childValue, childErrors);
    }, [input]);
    const parentOnUnmount = React.useCallback((childName) => input.onChange((currentValue) => currentValue, { [childName]: false }), [input]);
    const valueSpecType = ((_a = specProperties[oneOfValue]) === null || _a === void 0 ? void 0 : _a.type) || SpecTypes.Object;
    return (React.createElement("div", { className: b() },
        React.createElement("div", null, toggler),
        specProperties[oneOfValue] && (React.createElement(GroupIndent, null,
            React.createElement(Controller, { value: getControllerDefautValue(input.value, valueSpecType), name: name, spec: specProperties[oneOfValue], parentOnChange: parentOnChange, parentOnUnmount: parentOnUnmount, key: `${name}.${oneOfValue}` })))));
};
