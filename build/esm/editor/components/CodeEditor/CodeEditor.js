import React, { useCallback, useContext, useState } from 'react';
import { ChevronsCollapseUpRight, ChevronsExpandUpRight } from '@gravity-ui/icons';
import { Button, Icon } from '@gravity-ui/uikit';
import debounce from 'lodash/debounce';
import MonacoEditor from 'react-monaco-editor';
import { Theme } from '../../../models';
import { block } from '../../../utils';
import { EditorContext } from '../../context';
import { parseCode } from '../../utils/code';
import { options } from './constants';
import './CodeEditor.css';
const b = block('code-editor');
const ON_CHANGE_DEBOUNCE_TIMEOUT = 300;
export const CodeEditor = React.memo(({ onChange, validator, fullscreenModeOn, onFullscreenModeOnUpdate, code }) => {
    const [message, setMessage] = useState(() => validator(code));
    const { theme = Theme.Light } = useContext(EditorContext);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const onChangeWithValidation = useCallback(debounce((newCode) => {
        const validationResult = validator(newCode);
        setMessage(validationResult);
        onChange(parseCode(newCode));
    }, ON_CHANGE_DEBOUNCE_TIMEOUT), [onChange, validator]);
    return (React.createElement("div", { className: b({ fullscreen: fullscreenModeOn }) },
        React.createElement("div", { className: b('header') },
            React.createElement(Button, { view: "flat-secondary", onClick: () => onFullscreenModeOnUpdate(!fullscreenModeOn) },
                React.createElement(Icon, { data: fullscreenModeOn ? ChevronsCollapseUpRight : ChevronsExpandUpRight, size: 16 }))),
        React.createElement("div", { className: b('code') },
            React.createElement(MonacoEditor, { key: String(fullscreenModeOn), defaultValue: code, value: code, language: "yaml", options: options, onChange: onChangeWithValidation, theme: theme === Theme.Dark ? 'vs-dark' : 'vs' })),
        React.createElement("div", { className: b('footer') }, message && (React.createElement("div", { className: b('message-container') },
            React.createElement("div", { className: b('message', { status: message.status }) }, message.text))))));
});
CodeEditor.displayName = 'CodeEditor';
