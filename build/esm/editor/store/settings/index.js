import { useMemo, useReducer } from 'react';
import { UPDATE_CODE_FULLSCREEN_MODE_ON, UPDATE_EDIT_MODE, UPDATE_THEME, UPDATE_VIEW_MODE, initialState, reducer, } from './reducer';
export function useSettingsState() {
    const [{ viewMode, editMode, theme, codeFullscreeModeOn }, dispatch] = useReducer(reducer, initialState);
    return useMemo(() => {
        return {
            viewMode,
            editMode,
            theme,
            codeFullscreeModeOn,
            onViewModeUpdate: (newViewMode) => dispatch({ type: UPDATE_VIEW_MODE, payload: newViewMode }),
            onEditModeUpdate: (newEditMode) => dispatch({ type: UPDATE_EDIT_MODE, payload: newEditMode }),
            onThemeUpdate: (newTheme) => dispatch({ type: UPDATE_THEME, payload: newTheme }),
            onCodeFullscreeModeOnUpdate: (newCodeFullscreeModeOn) => dispatch({ type: UPDATE_CODE_FULLSCREEN_MODE_ON, payload: newCodeFullscreeModeOn }),
        };
    }, [viewMode, theme, codeFullscreeModeOn, editMode]);
}
