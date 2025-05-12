import { Theme } from '../../../models';
import { EditModeItem, ViewModeItem } from '../../types';
export declare const UPDATE_CODE_FULLSCREEN_MODE_ON = "UPDATE_CODE_FULLSCREEN_MODE_ON";
export declare const UPDATE_VIEW_MODE = "UPDATE_VIEW_MODE";
export declare const UPDATE_EDIT_MODE = "UPDATE_EDIT_MODE";
export declare const UPDATE_THEME = "UPDATE_THEME";
interface EditorSettingsState {
    theme: Theme;
    viewMode: ViewModeItem;
    editMode: EditModeItem;
    codeFullscreeModeOn: boolean;
}
interface UpdateViewMode {
    type: typeof UPDATE_VIEW_MODE;
    payload: ViewModeItem;
}
interface UpdateEditMode {
    type: typeof UPDATE_EDIT_MODE;
    payload: EditModeItem;
}
interface UpdateTheme {
    type: typeof UPDATE_THEME;
    payload: Theme;
}
interface UpdateCodeFullscreenModeOn {
    type: typeof UPDATE_CODE_FULLSCREEN_MODE_ON;
    payload: boolean;
}
export type EditorSettingsAction = UpdateViewMode | UpdateEditMode | UpdateTheme | UpdateCodeFullscreenModeOn;
export declare const reducer: (state: EditorSettingsState, action: EditorSettingsAction) => EditorSettingsState;
export declare const initialState: {
    viewMode: ViewModeItem;
    editMode: EditModeItem;
    theme: Theme;
    codeFullscreeModeOn: boolean;
};
export {};
