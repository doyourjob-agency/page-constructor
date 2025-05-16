"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Editor = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const PageConstructor_1 = require("../../../containers/PageConstructor");
const utils_1 = require("../../../utils");
const AddBlock_1 = tslib_1.__importDefault(require("../../components/AddBlock/AddBlock"));
const CodeEditor_1 = require("../../components/CodeEditor/CodeEditor");
const ControlPanel_1 = tslib_1.__importDefault(require("../../components/ControlPanel/ControlPanel"));
const ErrorBoundary_1 = require("../../components/ErrorBoundary/ErrorBoundary");
const Layout_1 = tslib_1.__importDefault(require("../../components/Layout/Layout"));
const PageSettings_1 = require("../../components/PageSettings/PageSettings");
const context_1 = require("../../context");
const Form_1 = require("../Form/Form");
const useEditorState_1 = require("./hooks/useEditorState");
const b = (0, utils_1.block)('editor');
const Editor = (props) => {
    const { providerProps } = props;
    const { context, viewMode, editMode, constructorTheme, onThemeUpdate, onViewModeUpdate, onEditModeUpdate, isCodeEditMode, isFormEditMode, isDesktopViewMode, content, schema, onContentUpdate, code, codeValidator, codeFullscreeModeOn, onCodeFullscreeModeOnUpdate, activeBlockIndex, onSelect, isCodeOnlyMode, errorBoundaryState, outgoingProps, onAdd, } = (0, useEditorState_1.useEditorState)(props);
    return (react_1.default.createElement(context_1.EditorContext.Provider, { value: context },
        react_1.default.createElement(ControlPanel_1.default, { viewMode: viewMode, onViewModeChange: onViewModeUpdate, editMode: editMode, onEditModeChange: onEditModeUpdate, theme: constructorTheme, className: b('panel'), onThemeChange: onThemeUpdate }),
        isFormEditMode && isDesktopViewMode && (react_1.default.createElement(PageSettings_1.PageSettings, { content: content, schema: schema, onChange: onContentUpdate })),
        isCodeEditMode && (react_1.default.createElement(CodeEditor_1.CodeEditor, { code: code, onChange: onContentUpdate, validator: codeValidator, fullscreenModeOn: codeFullscreeModeOn, onFullscreenModeOnUpdate: onCodeFullscreeModeOnUpdate })),
        react_1.default.createElement(Layout_1.default, { editMode: editMode, viewMode: viewMode },
            isFormEditMode && isDesktopViewMode && (react_1.default.createElement(Layout_1.default.Left, null,
                react_1.default.createElement(Form_1.Form, { content: content, onChange: onContentUpdate, activeBlockIndex: activeBlockIndex, schema: schema, onSelect: onSelect }))),
            !isCodeOnlyMode && (react_1.default.createElement(Layout_1.default.Right, null,
                react_1.default.createElement(ErrorBoundary_1.ErrorBoundary, { key: errorBoundaryState },
                    react_1.default.createElement(PageConstructor_1.PageConstructorProvider, Object.assign({}, providerProps, { theme: constructorTheme }),
                        react_1.default.createElement(PageConstructor_1.PageConstructor, Object.assign({}, outgoingProps)))),
                isFormEditMode && react_1.default.createElement(AddBlock_1.default, { onAdd: onAdd }))))));
};
exports.Editor = Editor;
