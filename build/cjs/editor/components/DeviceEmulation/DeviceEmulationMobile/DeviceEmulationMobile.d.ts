import { PropsWithChildren } from 'react';
import { MobileDevice } from '../utils';
interface DeviceEmulationMobileProps extends PropsWithChildren {
    device: MobileDevice;
    active: boolean;
}
declare const DeviceEmulationMobile: ({ device, active }: DeviceEmulationMobileProps) => JSX.Element;
export default DeviceEmulationMobile;
