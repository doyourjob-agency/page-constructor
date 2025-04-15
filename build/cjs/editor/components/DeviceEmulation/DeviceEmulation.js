"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const DeviceEmulationMobile_1 = tslib_1.__importDefault(require("./DeviceEmulationMobile/DeviceEmulationMobile"));
const utils_1 = require("./utils");
const DeviceEmulation = ({ children, mode }) => (react_1.default.createElement(react_1.Fragment, null,
    !(0, utils_1.isMobileDevice)(mode) && children,
    utils_1.mobileDevices.map((device) => (react_1.default.createElement(DeviceEmulationMobile_1.default, { key: device, device: device, active: mode === device }, children)))));
exports.default = DeviceEmulation;
