"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageBase = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const imageContext_1 = require("../../context/imageContext/imageContext");
const ImageBase = (_a) => {
    var { fetchPriority, alt } = _a, props = tslib_1.__rest(_a, ["fetchPriority", "alt"]);
    const { Image } = react_1.default.useContext(imageContext_1.ImageContext);
    return Image ? (react_1.default.createElement(Image, Object.assign({ fetchPriority: fetchPriority, alt: alt }, props))) : (
    // There is an issue with fetchpriority attr in img in React.
    // It is still not supported. However it's nice to have ability to manage
    // this prop is good to have to improve Core Web Vitals.
    // So, here is a workaround to assign the attr.
    react_1.default.createElement("img", Object.assign({}, { fetchpriority: fetchPriority }, { alt: alt }, props)));
};
exports.ImageBase = ImageBase;
exports.default = exports.ImageBase;
