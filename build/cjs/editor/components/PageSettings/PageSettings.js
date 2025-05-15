"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageSettings = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const dynamic_forms_1 = require("@gravity-ui/dynamic-forms");
const uikit_1 = require("@gravity-ui/uikit");
const noop_1 = tslib_1.__importDefault(require("lodash/noop"));
const react_final_form_1 = require("react-final-form");
const utils_1 = require("../../../utils");
const config_1 = require("../../dynamic-forms-custom/config");
const useFormSpec_1 = tslib_1.__importDefault(require("../../hooks/useFormSpec"));
const i18n_1 = require("./i18n");
const b = (0, utils_1.block)('editor-page-settings');
const PageSettings = ({ schema, content, onChange }) => {
    const spec = (0, useFormSpec_1.default)(schema);
    const { page: pageSpec } = spec || {};
    const initialPage = (0, react_1.useMemo)(() => {
        const _a = content || {}, { blocks: _ } = _a, page = tslib_1.__rest(_a, ["blocks"]);
        return page;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (react_1.default.createElement(uikit_1.Disclosure, { className: b('container'), summary: (0, i18n_1.i18n)('page-settings-title'), size: "l" },
        react_1.default.createElement("div", { className: b('form') },
            react_1.default.createElement(react_final_form_1.Form, { initialValues: { content: initialPage }, onSubmit: noop_1.default }, () => (react_1.default.createElement("div", null,
                react_1.default.createElement(react_final_form_1.FormSpy, { onChange: ({ values }) => onChange(Object.assign(Object.assign({}, content), values.content)), subscription: { values: true } }),
                react_1.default.createElement(dynamic_forms_1.DynamicField, { name: "content", spec: pageSpec, config: config_1.dynamicConfig })))))));
};
exports.PageSettings = PageSettings;
exports.PageSettings.displayName = 'PageSettings';
