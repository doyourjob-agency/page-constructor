import { __rest } from "tslib";
import React, { Fragment, memo, useMemo } from 'react';
import { DynamicField, SimpleVerticalAccordeon } from '@gravity-ui/dynamic-forms';
import isEqual from 'lodash/isEqual';
import noop from 'lodash/noop';
import { Form as FinalForm, FormSpy } from 'react-final-form';
import { dynamicConfig } from '../../dynamic-forms-custom/config';
import usePreviousValue from '../../hooks/usePreviousValue';
export const BlockForm = memo((_a) => {
    var _b = _a.data, { type } = _b, content = __rest(_b, ["type"]), { onChange, onSelect, active, spec: specRaw } = _a;
    const initialValues = useMemo(() => ({ content }), [content]);
    const prevContent = usePreviousValue(content);
    const spec = useMemo(() => (Object.assign(Object.assign({}, specRaw), { viewSpec: Object.assign(Object.assign({}, specRaw.viewSpec), { layoutOpen: active }) })), [specRaw, active]);
    if (!active) {
        return (React.createElement(SimpleVerticalAccordeon, { open: false, name: type, title: spec.viewSpec.layoutTitle || type, onOpenChange: onSelect }, ' '));
    }
    return (React.createElement(FinalForm, { initialValues: initialValues, onSubmit: noop }, () => (React.createElement(Fragment, null,
        React.createElement(FormSpy, { onChange: ({ values }) => {
                // fix for FormSpy onChange called twice without content changes
                if (!isEqual(values.content, prevContent)) {
                    onChange(Object.assign({ type }, values.content));
                }
            }, subscription: { values: true } }),
        React.createElement(DynamicField, { name: "content", spec: spec, config: dynamicConfig, withoutInsertFFDebounce: true })))));
});
BlockForm.displayName = 'BlockForm';
