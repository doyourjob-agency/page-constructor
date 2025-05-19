import React from 'react';
import { DEFAULT_THEME } from '../../components/constants';
export const initialValue = {
    theme: DEFAULT_THEME,
};
export const ThemeContext = React.createContext(initialValue);
