"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unifyDataLensToObject = void 0;
function unifyDataLensToObject(dataLens) {
    return typeof dataLens === 'string' ? { id: dataLens, theme: 'light' } : dataLens;
}
exports.unifyDataLensToObject = unifyDataLensToObject;
