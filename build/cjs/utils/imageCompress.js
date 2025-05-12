"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCompressible = exports.AvailableForCompressExtension = void 0;
var AvailableForCompressExtension;
(function (AvailableForCompressExtension) {
    AvailableForCompressExtension["PNG"] = "png";
    AvailableForCompressExtension["JPG"] = "jpg";
    AvailableForCompressExtension["JPEG"] = "jpeg";
})(AvailableForCompressExtension = exports.AvailableForCompressExtension || (exports.AvailableForCompressExtension = {}));
const isCompressible = (fileName) => Object.values(AvailableForCompressExtension).some((ext) => fileName.toLowerCase().endsWith(`.${ext}`));
exports.isCompressible = isCompressible;
