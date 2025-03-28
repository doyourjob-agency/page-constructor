"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockForm = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const dynamic_forms_1 = require("@gravity-ui/dynamic-forms");
const isEqual_1 = tslib_1.__importDefault(require("lodash/isEqual"));
const noop_1 = tslib_1.__importDefault(require("lodash/noop"));
const react_final_form_1 = require("react-final-form");
const config_1 = require("../../dynamic-forms-custom/config");
const usePreviousValue_1 = tslib_1.__importDefault(require("../../hooks/usePreviousValue"));
exports.BlockForm = (0, react_1.memo)((_a) => {
    var _b = _a.data, { type } = _b, content = tslib_1.__rest(_b, ["type"]), { onChange, onSelect, active, spec: specRaw } = _a;
    const initialValues = (0, react_1.useMemo)(() => ({ content }), [content]);
    const prevContent = (0, usePreviousValue_1.default)(content);
    const spec = (0, react_1.useMemo)(() => (Object.assign(Object.assign({}, specRaw), { viewSpec: Object.assign(Object.assign({}, specRaw.viewSpec), { layoutOpen: active }) })), [specRaw, active]);
    if (!active) {
        return (react_1.default.createElement(dynamic_forms_1.SimpleVerticalAccordeon, { open: false, name: type, title: spec.viewSpec.layoutTitle || type, onOpenChange: onSelect }, ' '));
    }
    return (react_1.default.createElement(react_final_form_1.Form, { initialValues: initialValues, onSubmit: noop_1.default }, () => (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement(react_final_form_1.FormSpy, { onChange: ({ values }) => {
                // fix for FormSpy onChange called twice without content changes
                if (!(0, isEqual_1.default)(values.content, prevContent)) {
                    onChange(Object.assign({ type }, values.content));
                }
            }, subscription: { values: true } }),
        react_1.default.createElement(dynamic_forms_1.DynamicField, { name: "content", spec: spec, config: config_1.dynamicConfig, withoutInsertFFDebounce: true })))));
});
exports.BlockForm.displayName = 'BlockForm';
