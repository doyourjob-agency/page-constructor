"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEditorState = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const schema_1 = require("../../../../schema");
const EditBlock_1 = tslib_1.__importDefault(require("../../../components/EditBlock/EditBlock"));
const ErrorBoundary_1 = require("../../../components/ErrorBoundary/ErrorBoundary");
const NotFoundBlock_1 = require("../../../components/NotFoundBlock/NotFoundBlock");
const useCodeValidator_1 = require("../../../hooks/useCodeValidator");
const main_1 = require("../../../store/main");
const settings_1 = require("../../../store/settings");
const types_1 = require("../../../types");
const utils_1 = require("../../../utils");
const useCode_1 = require("./useCode");
// Editor business logic
const useEditorState = (_a) => {
    var { customSchema, onChange, providerProps, transformContent, deviceEmulationSettings, theme: editorTheme } = _a, rest = tslib_1.__rest(_a, ["customSchema", "onChange", "providerProps", "transformContent", "deviceEmulationSettings", "theme"]);
    const { content, activeBlockIndex, errorBoundaryState, onContentUpdate, onAdd, onSelect, injectEditBlockProps, } = (0, main_1.useMainState)(rest);
    const { viewMode, editMode, onEditModeUpdate, theme: constructorTheme, onViewModeUpdate, onThemeUpdate, codeFullscreeModeOn, onCodeFullscreeModeOnUpdate, } = (0, settings_1.useSettingsState)();
    const isCodeEditMode = editMode === types_1.EditModeItem.Code;
    const isViewEditMode = editMode === types_1.EditModeItem.View;
    const isFormEditMode = editMode === types_1.EditModeItem.Form;
    const isDesktopViewMode = viewMode === types_1.ViewModeItem.Desktop;
    const isCodeOnlyMode = codeFullscreeModeOn && isCodeEditMode;
    const transformedContent = (0, react_1.useMemo)(() => (transformContent ? transformContent(content, { viewMode, editMode }) : content), [content, transformContent, viewMode, editMode]);
    const schema = (0, react_1.useMemo)(() => (0, schema_1.generateDefaultSchema)(customSchema), [customSchema]);
    const codeValidator = (0, useCodeValidator_1.useCodeValidator)(schema);
    const outgoingProps = (0, react_1.useMemo)(() => {
        const custom = isCodeEditMode || isViewEditMode
            ? rest.custom
            : (0, utils_1.addCustomDecorator)([
                (props) => react_1.default.createElement(NotFoundBlock_1.NotFoundBlock, Object.assign({}, props)),
                (props) => (react_1.default.createElement(EditBlock_1.default, Object.assign({}, injectEditBlockProps(props)))),
                // need errorBoundaryState flag to reset error on content update
                (props) => (react_1.default.createElement(ErrorBoundary_1.ErrorBoundary, Object.assign({}, props, { key: `${(0, utils_1.getBlockId)(props)}-${errorBoundaryState}` }))),
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
    const context = (0, react_1.useMemo)(() => ({
        constructorProps: {
            content: transformedContent,
            custom: rest.custom,
        },
        providerProps: Object.assign(Object.assign({}, providerProps), { isMobile: (0, utils_1.checkIsMobile)(viewMode), theme: constructorTheme }),
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
    (0, react_1.useEffect)(() => {
        onChange === null || onChange === void 0 ? void 0 : onChange(content);
    }, [content, onChange]);
    const code = (0, useCode_1.useCode)({ isCodeEditMode, content, codeFullscreeModeOn });
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
exports.useEditorState = useEditorState;
