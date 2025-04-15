"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getImageSize = exports.getTitleSizes = exports.titleWithImageSizes = void 0;
function titleWithImageSizes(imageSize) {
    switch (imageSize) {
        case 's':
            return {
                md: 8,
                all: 12,
            };
        case 'm':
            return {
                md: 6,
                all: 12,
            };
        default:
            return { all: 12 };
    }
}
exports.titleWithImageSizes = titleWithImageSizes;
function getTitleSizes(width) {
    switch (width) {
        case 's':
            return {
                lg: 6,
                sm: 12,
                md: 8,
                all: 12,
            };
        case 'm':
            return {
                lg: 8,
                md: 8,
                sm: 12,
                all: 12,
            };
        default:
            return { all: 12 };
    }
}
exports.getTitleSizes = getTitleSizes;
function getImageSize(width) {
    switch (width) {
        case 'm':
            return 's';
        case 's':
        default:
            return 'm';
    }
}
exports.getImageSize = getImageSize;
