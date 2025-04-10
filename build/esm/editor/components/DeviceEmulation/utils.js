import { ViewModeItem } from '../../types';
export const mobileDevices = [ViewModeItem.Tablet, ViewModeItem.Mobile];
export const isMobileDevice = (mode) => [ViewModeItem.Tablet, ViewModeItem.Mobile].includes(mode);
