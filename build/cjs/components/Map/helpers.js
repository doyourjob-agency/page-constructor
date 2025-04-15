"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMapHeight = void 0;
function getMapHeight(width, isMobile) {
    return isMobile ? (width / 4) * 3 : (width / 16) * 9;
}
exports.getMapHeight = getMapHeight;
