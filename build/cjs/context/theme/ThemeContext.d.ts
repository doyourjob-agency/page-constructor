import React from 'react';
import { Theme } from '../../models';
export interface ThemeContextProps {
    theme: Theme;
}
export declare const initialValue: ThemeContextProps;
export declare const ThemeContext: React.Context<ThemeContextProps>;
