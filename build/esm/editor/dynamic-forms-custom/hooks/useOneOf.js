import React from 'react';
import { SpecTypes, } from '@gravity-ui/dynamic-forms';
import { RadioButton, Select } from '@gravity-ui/uikit';
import isObjectLike from 'lodash/isObjectLike';
import some from 'lodash/some';
const MAX_TAB_TITLE_LENGTH = 20;
export const getSpecTypeDefaultValue = (type) => {
    switch (type) {
        case SpecTypes.Array:
            return [];
        case SpecTypes.Boolean:
        case SpecTypes.Number:
        case SpecTypes.String:
            return undefined;
        default:
            return {};
    }
};
export const useOneOf = ({ props, onTogglerChange }) => {
    const { name, input, spec, Layout } = props;
    const { order, disabled, oneOfParams } = spec.viewSpec;
    const specProperties = React.useMemo(() => (isObjectLike(spec.properties) ? spec.properties : {}), [spec.properties]);
    const [oneOfValue, setOneOfValue] = React.useState(() => {
        let valueKeys;
        if (isObjectLike(input.value)) {
            const keys = Object.keys(input.value);
            if (keys.length) {
                valueKeys = keys;
            }
        }
        return (valueKeys || order || Object.keys(specProperties))[0];
    });
    const onOneOfChange = React.useCallback(([newValue]) => {
        var _a;
        if (newValue !== oneOfValue) {
            const specType = ((_a = specProperties[newValue]) === null || _a === void 0 ? void 0 : _a.type) || SpecTypes.Object;
            input.onChange(getSpecTypeDefaultValue(specType));
            setOneOfValue(newValue);
            onTogglerChange === null || onTogglerChange === void 0 ? void 0 : onTogglerChange(newValue);
        }
    }, [setOneOfValue, input, oneOfValue, specProperties, onTogglerChange]);
    const options = React.useMemo(() => (order || Object.keys(specProperties)).map((value) => {
        var _a, _b;
        const title = ((_a = spec.description) === null || _a === void 0 ? void 0 : _a[value]) ||
            ((_b = specProperties[value]) === null || _b === void 0 ? void 0 : _b.viewSpec.layoutTitle) ||
            value ||
            '';
        return {
            value,
            title,
            content: title,
        };
    }), [spec.description, order, specProperties]);
    const togglerInput = React.useMemo(() => {
        if ((oneOfParams === null || oneOfParams === void 0 ? void 0 : oneOfParams.toggler) !== 'radio' &&
            ((oneOfParams === null || oneOfParams === void 0 ? void 0 : oneOfParams.toggler) === 'select' ||
                options.length > 3 ||
                some(options, ({ title }) => title.length > MAX_TAB_TITLE_LENGTH))) {
            return (React.createElement(Select, { width: "max", value: [oneOfValue], onUpdate: onOneOfChange, options: options, disabled: disabled, filterable: options.length > 7, qa: name }));
        }
        return (React.createElement(RadioButton, { value: oneOfValue, onChange: (event) => onOneOfChange([event.target.value]), disabled: disabled, qa: name }, options.map(({ value, title }) => (React.createElement(RadioButton.Option, { key: value, value: value }, title)))));
    }, [options, oneOfValue, onOneOfChange, name, oneOfParams === null || oneOfParams === void 0 ? void 0 : oneOfParams.toggler, disabled]);
    const toggler = React.useMemo(() => {
        if (Layout) {
            return React.createElement(Layout, Object.assign({}, props), togglerInput);
        }
        return togglerInput;
    }, [Layout, togglerInput, props]);
    return { oneOfValue, specProperties, toggler, togglerInput };
};
