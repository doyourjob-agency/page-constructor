import { ButtonSize, ButtonView } from '@gravity-ui/uikit';
export declare const ICON_QA = "button-icon";
export type OldButtonTheme = 'normal' | 'action' | 'flat' | 'light' | 'clear' | 'raised' | 'pseudo' | 'link' | 'accent' | 'websearch' | 'flat-special' | 'normal-special' | 'normal-dark' | 'pseudo-special';
export type OldButtonSize = 'xs' | 'ns' | 's' | 'm' | 'l' | 'n' | 'head' | 'promo';
export declare const toCommonView: (theme: OldButtonTheme) => ButtonView;
export declare const toCommonSize: (size: OldButtonSize) => ButtonSize;
