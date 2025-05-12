"use strict";
// This is a crutch
// The crutch is created in order to help us to work with sites, which use
// "disableShadow" flag in their content.
// We have deprecated the flag.
// We have to remove it after deleting of "disableShadow" and migration of projects content
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMediaBorder = void 0;
const getMediaBorder = ({ border, disableShadow }) => {
    if (border) {
        return border;
    }
    if (disableShadow) {
        return 'none';
    }
    return 'shadow';
};
exports.getMediaBorder = getMediaBorder;
