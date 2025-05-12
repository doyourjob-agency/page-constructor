import { __rest } from "tslib";
import React, { useMemo } from 'react';
import { DynamicField } from '@gravity-ui/dynamic-forms';
import { Disclosure } from '@gravity-ui/uikit';
import noop from 'lodash/noop';
import { Form as FinalForm, FormSpy } from 'react-final-form';
import { block } from '../../../utils';
import { dynamicConfig } from '../../dynamic-forms-custom/config';
import useFormSpec from '../../hooks/useFormSpec';
import { i18n } from './i18n';
import './PageSettings.css';
const b = block('editor-page-settings');
export const PageSettings = ({ schema, content, onChange }) => {
    const spec = useFormSpec(schema);
    const { page: pageSpec } = spec || {};
    const initialPage = useMemo(() => {
        const _a = content || {}, { blocks: _ } = _a, page = __rest(_a, ["blocks"]);
        return page;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (React.createElement(Disclosure, { className: b('container'), summary: i18n('page-settings-title'), size: "l" },
        React.createElement("div", { className: b('form') },
            React.createElement(FinalForm, { initialValues: { content: initialPage }, onSubmit: noop }, () => (React.createElement("div", null,
                React.createElement(FormSpy, { onChange: ({ values }) => onChange(Object.assign(Object.assign({}, content), values.content)), subscription: { values: true } }),
                React.createElement(DynamicField, { name: "content", spec: pageSpec, config: dynamicConfig })))))));
};
PageSettings.displayName = 'PageSettings';
