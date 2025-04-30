import { Theme } from '../../../models';
import { EditModeItem, ViewModeItem } from '../../types';
export declare function useSettingsState(): {
    viewMode: ViewModeItem;
    editMode: EditModeItem;
    theme: Theme;
    codeFullscreeModeOn: boolean;
    onViewModeUpdate: (newViewMode: ViewModeItem) => void;
    onEditModeUpdate: (newEditMode: EditModeItem) => void;
    onThemeUpdate: (newTheme: Theme) => void;
    onCodeFullscreeModeOnUpdate: (newCodeFullscreeModeOn: boolean) => void;
};
