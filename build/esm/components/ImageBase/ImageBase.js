import { __rest } from "tslib";
import React from 'react';
import { ImageContext } from '../../context/imageContext/imageContext';
export const ImageBase = (_a) => {
    var { fetchPriority, alt } = _a, props = __rest(_a, ["fetchPriority", "alt"]);
    const { Image } = React.useContext(ImageContext);
    return Image ? (React.createElement(Image, Object.assign({ fetchPriority: fetchPriority, alt: alt }, props))) : (
    // There is an issue with fetchpriority attr in img in React.
    // It is still not supported. However it's nice to have ability to manage
    // this prop is good to have to improve Core Web Vitals.
    // So, here is a workaround to assign the attr.
    React.createElement("img", Object.assign({}, { fetchpriority: fetchPriority }, { alt: alt }, props)));
};
export default ImageBase;
