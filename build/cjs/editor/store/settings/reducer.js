"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialState = exports.reducer = exports.UPDATE_THEME = exports.UPDATE_EDIT_MODE = exports.UPDATE_VIEW_MODE = exports.UPDATE_CODE_FULLSCREEN_MODE_ON = void 0;
const constants_1 = require("../../../components/constants");
const types_1 = require("../../types");
// actions
exports.UPDATE_CODE_FULLSCREEN_MODE_ON = 'UPDATE_CODE_FULLSCREEN_MODE_ON';
exports.UPDATE_VIEW_MODE = 'UPDATE_VIEW_MODE';
exports.UPDATE_EDIT_MODE = 'UPDATE_EDIT_MODE';
exports.UPDATE_THEME = 'UPDATE_THEME';
// reducer
const reducer = (state, action) => {
    switch (action.type) {
        case exports.UPDATE_VIEW_MODE:
            return Object.assign(Object.assign({}, state), { viewMode: action.payload });
        case exports.UPDATE_EDIT_MODE:
            return Object.assign(Object.assign({}, state), { editMode: action.payload });
        case exports.UPDATE_THEME:
            return Object.assign(Object.assign({}, state), { theme: action.payload });
        case exports.UPDATE_CODE_FULLSCREEN_MODE_ON:
            return Object.assign(Object.assign({}, state), { codeFullscreeModeOn: action.payload });
        default:
            return state;
    }
};
exports.reducer = reducer;
exports.initialState = {
    viewMode: types_1.ViewModeItem.Desktop,
    editMode: types_1.EditModeItem.Form,
    theme: constants_1.DEFAULT_THEME,
    codeFullscreeModeOn: false,
};
