import { __rest } from "tslib";
import React, { useEffect, useMemo } from 'react';
import { generateDefaultSchema } from '../../../../schema';
import EditBlock from '../../../components/EditBlock/EditBlock';
import { ErrorBoundary } from '../../../components/ErrorBoundary/ErrorBoundary';
import { NotFoundBlock } from '../../../components/NotFoundBlock/NotFoundBlock';
import { useCodeValidator } from '../../../hooks/useCodeValidator';
import { useMainState } from '../../../store/main';
import { useSettingsState } from '../../../store/settings';
import { EditModeItem, ViewModeItem } from '../../../types';
import { addCustomDecorator, checkIsMobile, getBlockId } from '../../../utils';
import { useCode } from './useCode';
// Editor business logic
export const useEditorState = (_a) => {
    var { customSchema, onChange, providerProps, transformContent, deviceEmulationSettings, theme: editorTheme } = _a, rest = __rest(_a, ["customSchema", "onChange", "providerProps", "transformContent", "deviceEmulationSettings", "theme"]);
    const { content, activeBlockIndex, errorBoundaryState, onContentUpdate, onAdd, onSelect, injectEditBlockProps, } = useMainState(rest);
    const { viewMode, editMode, onEditModeUpdate, theme: constructorTheme, onViewModeUpdate, onThemeUpdate, codeFullscreeModeOn, onCodeFullscreeModeOnUpdate, } = useSettingsState();
    const isCodeEditMode = editMode === EditModeItem.Code;
    const isViewEditMode = editMode === EditModeItem.View;
    const isFormEditMode = editMode === EditModeItem.Form;
    const isDesktopViewMode = viewMode === ViewModeItem.Desktop;
    const isCodeOnlyMode = codeFullscreeModeOn && isCodeEditMode;
    const transformedContent = useMemo(() => (transformContent ? transformContent(content, { viewMode, editMode }) : content), [content, transformContent, viewMode, editMode]);
    const schema = useMemo(() => generateDefaultSchema(customSchema), [customSchema]);
    const codeValidator = useCodeValidator(schema);
    const outgoingProps = useMemo(() => {
        const custom = isCodeEditMode || isViewEditMode
            ? rest.custom
            : addCustomDecorator([
                (props) => React.createElement(NotFoundBlock, Object.assign({}, props)),
                (props) => (React.createElement(EditBlock, Object.assign({}, injectEditBlockProps(props)))),
                // need errorBoundaryState flag to reset error on content update
                (props) => (React.createElement(ErrorBoundary, Object.assign({}, props, { key: `${getBlockId(props)}-${errorBoundaryState}` }))),
            ], rest.custom);
        return {
            content: transformedContent,
            custom,
            viewMode,
        };
    }, [
        injectEditBlockProps,
        errorBoundaryState,
        viewMode,
        transformedContent,
        rest.custom,
        isCodeEditMode,
        isViewEditMode,
    ]);
    const context = useMemo(() => ({
        constructorProps: {
            content: transformedContent,
            custom: rest.custom,
        },
        providerProps: Object.assign(Object.assign({}, providerProps), { isMobile: checkIsMobile(viewMode), theme: constructorTheme }),
        deviceEmulationSettings,
        theme: editorTheme,
    }), [
        providerProps,
        rest.custom,
        viewMode,
        transformedContent,
        deviceEmulationSettings,
        constructorTheme,
        editorTheme,
    ]);
    useEffect(() => {
        onChange === null || onChange === void 0 ? void 0 : onChange(content);
    }, [content, onChange]);
    const code = useCode({ isCodeEditMode, content, codeFullscreeModeOn });
    return {
        context,
        viewMode,
        editMode,
        constructorTheme,
        onThemeUpdate,
        onViewModeUpdate,
        onEditModeUpdate,
        isCodeEditMode,
        isDesktopViewMode,
        content,
        schema,
        onContentUpdate,
        code,
        codeValidator,
        codeFullscreeModeOn,
        onCodeFullscreeModeOnUpdate,
        activeBlockIndex,
        onSelect,
        isCodeOnlyMode,
        errorBoundaryState,
        outgoingProps,
        onAdd,
        isFormEditMode,
    };
};
