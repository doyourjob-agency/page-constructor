"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMobileDevice = exports.mobileDevices = void 0;
const types_1 = require("../../types");
exports.mobileDevices = [types_1.ViewModeItem.Tablet, types_1.ViewModeItem.Mobile];
const isMobileDevice = (mode) => [types_1.ViewModeItem.Tablet, types_1.ViewModeItem.Mobile].includes(mode);
exports.isMobileDevice = isMobileDevice;
