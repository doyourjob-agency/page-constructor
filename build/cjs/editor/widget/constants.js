"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceFrameMessageType = void 0;
const prefix = 'PC_EDITOR_DEVICE';
exports.DeviceFrameMessageType = {
    Ready: `${prefix}_MESSAGE_READY`,
    Update: `${prefix}_MESSAGE_UPDATE`,
};
