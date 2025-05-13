import { DEFAULT_THEME } from '../../../components/constants';
import { EditModeItem, ViewModeItem } from '../../types';
// actions
export const UPDATE_CODE_FULLSCREEN_MODE_ON = 'UPDATE_CODE_FULLSCREEN_MODE_ON';
export const UPDATE_VIEW_MODE = 'UPDATE_VIEW_MODE';
export const UPDATE_EDIT_MODE = 'UPDATE_EDIT_MODE';
export const UPDATE_THEME = 'UPDATE_THEME';
// reducer
export const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_VIEW_MODE:
            return Object.assign(Object.assign({}, state), { viewMode: action.payload });
        case UPDATE_EDIT_MODE:
            return Object.assign(Object.assign({}, state), { editMode: action.payload });
        case UPDATE_THEME:
            return Object.assign(Object.assign({}, state), { theme: action.payload });
        case UPDATE_CODE_FULLSCREEN_MODE_ON:
            return Object.assign(Object.assign({}, state), { codeFullscreeModeOn: action.payload });
        default:
            return state;
    }
};
export const initialState = {
    viewMode: ViewModeItem.Desktop,
    editMode: EditModeItem.Form,
    theme: DEFAULT_THEME,
    codeFullscreeModeOn: false,
};
