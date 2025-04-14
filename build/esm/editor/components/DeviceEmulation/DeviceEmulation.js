import React, { Fragment } from 'react';
import DeviceEmulationMobile from './DeviceEmulationMobile/DeviceEmulationMobile';
import { isMobileDevice, mobileDevices } from './utils';
const DeviceEmulation = ({ children, mode }) => (React.createElement(Fragment, null,
    !isMobileDevice(mode) && children,
    mobileDevices.map((device) => (React.createElement(DeviceEmulationMobile, { key: device, device: device, active: mode === device }, children)))));
export default DeviceEmulation;
