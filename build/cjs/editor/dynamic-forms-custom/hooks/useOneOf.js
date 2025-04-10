"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useOneOf = exports.getSpecTypeDefaultValue = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const dynamic_forms_1 = require("@gravity-ui/dynamic-forms");
const uikit_1 = require("@gravity-ui/uikit");
const isObjectLike_1 = tslib_1.__importDefault(require("lodash/isObjectLike"));
const some_1 = tslib_1.__importDefault(require("lodash/some"));
const MAX_TAB_TITLE_LENGTH = 20;
const getSpecTypeDefaultValue = (type) => {
    switch (type) {
        case dynamic_forms_1.SpecTypes.Array:
            return [];
        case dynamic_forms_1.SpecTypes.Boolean:
        case dynamic_forms_1.SpecTypes.Number:
        case dynamic_forms_1.SpecTypes.String:
            return undefined;
        default:
            return {};
    }
};
exports.getSpecTypeDefaultValue = getSpecTypeDefaultValue;
const useOneOf = ({ props, onTogglerChange }) => {
    const { name, input, spec, Layout } = props;
    const { order, disabled, oneOfParams } = spec.viewSpec;
    const specProperties = react_1.default.useMemo(() => ((0, isObjectLike_1.default)(spec.properties) ? spec.properties : {}), [spec.properties]);
    const [oneOfValue, setOneOfValue] = react_1.default.useState(() => {
        let valueKeys;
        if ((0, isObjectLike_1.default)(input.value)) {
            const keys = Object.keys(input.value);
            if (keys.length) {
                valueKeys = keys;
            }
        }
        return (valueKeys || order || Object.keys(specProperties))[0];
    });
    const onOneOfChange = react_1.default.useCallback(([newValue]) => {
        var _a;
        if (newValue !== oneOfValue) {
            const specType = ((_a = specProperties[newValue]) === null || _a === void 0 ? void 0 : _a.type) || dynamic_forms_1.SpecTypes.Object;
            input.onChange((0, exports.getSpecTypeDefaultValue)(specType));
            setOneOfValue(newValue);
            onTogglerChange === null || onTogglerChange === void 0 ? void 0 : onTogglerChange(newValue);
        }
    }, [setOneOfValue, input, oneOfValue, specProperties, onTogglerChange]);
    const options = react_1.default.useMemo(() => (order || Object.keys(specProperties)).map((value) => {
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
    const togglerInput = react_1.default.useMemo(() => {
        if ((oneOfParams === null || oneOfParams === void 0 ? void 0 : oneOfParams.toggler) !== 'radio' &&
            ((oneOfParams === null || oneOfParams === void 0 ? void 0 : oneOfParams.toggler) === 'select' ||
                options.length > 3 ||
                (0, some_1.default)(options, ({ title }) => title.length > MAX_TAB_TITLE_LENGTH))) {
            return (react_1.default.createElement(uikit_1.Select, { width: "max", value: [oneOfValue], onUpdate: onOneOfChange, options: options, disabled: disabled, filterable: options.length > 7, qa: name }));
        }
        return (react_1.default.createElement(uikit_1.RadioButton, { value: oneOfValue, onChange: (event) => onOneOfChange([event.target.value]), disabled: disabled, qa: name }, options.map(({ value, title }) => (react_1.default.createElement(uikit_1.RadioButton.Option, { key: value, value: value }, title)))));
    }, [options, oneOfValue, onOneOfChange, name, oneOfParams === null || oneOfParams === void 0 ? void 0 : oneOfParams.toggler, disabled]);
    const toggler = react_1.default.useMemo(() => {
        if (Layout) {
            return react_1.default.createElement(Layout, Object.assign({}, props), togglerInput);
        }
        return togglerInput;
    }, [Layout, togglerInput, props]);
    return { oneOfValue, specProperties, toggler, togglerInput };
};
exports.useOneOf = useOneOf;
