import { PropsWithChildren } from 'react';
import { ViewModeItem } from '../../types';
export interface DeviceEmulationProps extends PropsWithChildren {
    mode: ViewModeItem;
}
declare const DeviceEmulation: ({ children, mode }: DeviceEmulationProps) => JSX.Element;
export default DeviceEmulation;
