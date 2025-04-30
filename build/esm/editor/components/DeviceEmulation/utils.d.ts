import { ViewModeItem } from '../../types';
export type MobileDevice = ViewModeItem.Mobile | ViewModeItem.Tablet;
export declare const mobileDevices: readonly [ViewModeItem.Tablet, ViewModeItem.Mobile];
export declare const isMobileDevice: (mode: ViewModeItem) => mode is MobileDevice;
