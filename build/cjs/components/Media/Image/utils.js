"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMediaImage = void 0;
function getMediaImage(image) {
    return typeof image === 'string' ? { src: image } : image;
}
exports.getMediaImage = getMediaImage;
