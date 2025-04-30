import React from 'react';
import { PageConstructor, PageConstructorProvider } from '../../../containers/PageConstructor';
import { block } from '../../../utils';
import AddBlock from '../../components/AddBlock/AddBlock';
import { CodeEditor } from '../../components/CodeEditor/CodeEditor';
import ControlPanel from '../../components/ControlPanel/ControlPanel';
import { ErrorBoundary } from '../../components/ErrorBoundary/ErrorBoundary';
import Layout from '../../components/Layout/Layout';
import { PageSettings } from '../../components/PageSettings/PageSettings';
import { EditorContext } from '../../context';
import { Form } from '../Form/Form';
import { useEditorState } from './hooks/useEditorState';
import './Editor.css';
const b = block('editor');
export const Editor = (props) => {
    const { providerProps } = props;
    const { context, viewMode, editMode, constructorTheme, onThemeUpdate, onViewModeUpdate, onEditModeUpdate, isCodeEditMode, isFormEditMode, isDesktopViewMode, content, schema, onContentUpdate, code, codeValidator, codeFullscreeModeOn, onCodeFullscreeModeOnUpdate, activeBlockIndex, onSelect, isCodeOnlyMode, errorBoundaryState, outgoingProps, onAdd, } = useEditorState(props);
    return (React.createElement(EditorContext.Provider, { value: context },
        React.createElement(ControlPanel, { viewMode: viewMode, onViewModeChange: onViewModeUpdate, editMode: editMode, onEditModeChange: onEditModeUpdate, theme: constructorTheme, className: b('panel'), onThemeChange: onThemeUpdate }),
        isFormEditMode && isDesktopViewMode && (React.createElement(PageSettings, { content: content, schema: schema, onChange: onContentUpdate })),
        isCodeEditMode && (React.createElement(CodeEditor, { code: code, onChange: onContentUpdate, validator: codeValidator, fullscreenModeOn: codeFullscreeModeOn, onFullscreenModeOnUpdate: onCodeFullscreeModeOnUpdate })),
        React.createElement(Layout, { editMode: editMode, viewMode: viewMode },
            isFormEditMode && isDesktopViewMode && (React.createElement(Layout.Left, null,
                React.createElement(Form, { content: content, onChange: onContentUpdate, activeBlockIndex: activeBlockIndex, schema: schema, onSelect: onSelect }))),
            !isCodeOnlyMode && (React.createElement(Layout.Right, null,
                React.createElement(ErrorBoundary, { key: errorBoundaryState },
                    React.createElement(PageConstructorProvider, Object.assign({}, providerProps, { theme: constructorTheme }),
                        React.createElement(PageConstructor, Object.assign({}, outgoingProps)))),
                isFormEditMode && React.createElement(AddBlock, { onAdd: onAdd }))))));
};
