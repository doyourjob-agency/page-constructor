"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSettingsState = void 0;
const react_1 = require("react");
const reducer_1 = require("./reducer");
function useSettingsState() {
    const [{ viewMode, editMode, theme, codeFullscreeModeOn }, dispatch] = (0, react_1.useReducer)(reducer_1.reducer, reducer_1.initialState);
    return (0, react_1.useMemo)(() => {
        return {
            viewMode,
            editMode,
            theme,
            codeFullscreeModeOn,
            onViewModeUpdate: (newViewMode) => dispatch({ type: reducer_1.UPDATE_VIEW_MODE, payload: newViewMode }),
            onEditModeUpdate: (newEditMode) => dispatch({ type: reducer_1.UPDATE_EDIT_MODE, payload: newEditMode }),
            onThemeUpdate: (newTheme) => dispatch({ type: reducer_1.UPDATE_THEME, payload: newTheme }),
            onCodeFullscreeModeOnUpdate: (newCodeFullscreeModeOn) => dispatch({ type: reducer_1.UPDATE_CODE_FULLSCREEN_MODE_ON, payload: newCodeFullscreeModeOn }),
        };
    }, [viewMode, theme, codeFullscreeModeOn, editMode]);
}
exports.useSettingsState = useSettingsState;
