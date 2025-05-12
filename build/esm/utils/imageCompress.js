export var AvailableForCompressExtension;
(function (AvailableForCompressExtension) {
    AvailableForCompressExtension["PNG"] = "png";
    AvailableForCompressExtension["JPG"] = "jpg";
    AvailableForCompressExtension["JPEG"] = "jpeg";
})(AvailableForCompressExtension || (AvailableForCompressExtension = {}));
export const isCompressible = (fileName) => Object.values(AvailableForCompressExtension).some((ext) => fileName.toLowerCase().endsWith(`.${ext}`));
