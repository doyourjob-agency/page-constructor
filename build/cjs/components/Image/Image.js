"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const constants_1 = require("../../constants");
const projectSettingsContext_1 = require("../../context/projectSettingsContext");
const utils_1 = require("../../utils");
const imageCompress_1 = require("../../utils/imageCompress");
const ImageBase_1 = tslib_1.__importDefault(require("../ImageBase/ImageBase"));
const checkWebP = (src) => {
    return src.endsWith('.webp') ? src : src + '.webp';
};
const DeviceSpecificFragment = ({ disableWebp, src, breakpoint, qa, }) => (react_1.default.createElement(react_1.Fragment, null,
    !disableWebp && (react_1.default.createElement("source", { srcSet: checkWebP(src), type: "image/webp", media: `(max-width: ${breakpoint}px)`, "data-qa": `${qa}-compressed` })),
    react_1.default.createElement("source", { srcSet: src, media: `(max-width: ${breakpoint}px)`, "data-qa": qa })));
const Image = (props) => {
    const projectSettings = (0, react_1.useContext)(projectSettingsContext_1.ProjectSettingsContext);
    const { src: imageSrc, alt, disableCompress, tablet, desktop, mobile, style, className, onClick, onLoad, containerClassName, qa, fetchPriority, loading, extraProps, } = props;
    const [imgLoadingError, setImgLoadingError] = (0, react_1.useState)(false);
    const src = imageSrc || desktop;
    if (!src) {
        return null;
    }
    const qaAttributes = (0, utils_1.getQaAttrubutes)(qa, 'mobile-webp-source', 'mobile-source', 'tablet-webp-source', 'tablet-source', 'desktop-source-compressed');
    const disableWebp = projectSettings.disableCompress ||
        disableCompress ||
        !(0, imageCompress_1.isCompressible)(src) ||
        imgLoadingError;
    return (react_1.default.createElement("picture", { className: containerClassName, "data-qa": qa },
        mobile && (react_1.default.createElement(DeviceSpecificFragment, { src: mobile, disableWebp: disableWebp, breakpoint: constants_1.BREAKPOINTS.sm, qa: qaAttributes.mobileSource })),
        tablet && (react_1.default.createElement(DeviceSpecificFragment, { src: tablet, disableWebp: disableWebp, breakpoint: constants_1.BREAKPOINTS.md, qa: qaAttributes.tabletSource })),
        src && !disableWebp && (react_1.default.createElement("source", { srcSet: checkWebP(src), type: "image/webp", "data-qa": qaAttributes.desktopSourceCompressed })),
        react_1.default.createElement(ImageBase_1.default, Object.assign({ className: className, alt: alt, src: src, style: style, fetchPriority: fetchPriority, loading: loading }, extraProps, { onClick: onClick, onError: () => setImgLoadingError(true), onLoad: onLoad }))));
};
exports.default = Image;
