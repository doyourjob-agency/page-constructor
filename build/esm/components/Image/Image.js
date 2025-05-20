import React, { Fragment, useContext, useState, } from 'react';
import { BREAKPOINTS } from '../../constants';
import { ProjectSettingsContext } from '../../context/projectSettingsContext';
import { getQaAttrubutes } from '../../utils';
import { isCompressible } from '../../utils/imageCompress';
import ImageBase from '../ImageBase/ImageBase';
const checkWebP = (src) => {
    return src.endsWith('.webp') ? src : src + '.webp';
};
const DeviceSpecificFragment = ({ disableWebp, src, breakpoint, qa, }) => (React.createElement(Fragment, null,
    !disableWebp && (React.createElement("source", { srcSet: checkWebP(src), type: "image/webp", media: `(max-width: ${breakpoint}px)`, "data-qa": `${qa}-compressed` })),
    React.createElement("source", { srcSet: src, media: `(max-width: ${breakpoint}px)`, "data-qa": qa })));
const Image = (props) => {
    const projectSettings = useContext(ProjectSettingsContext);
    const { src: imageSrc, alt, disableCompress, tablet, desktop, mobile, style, className, onClick, onLoad, containerClassName, qa, fetchPriority, loading, extraProps, } = props;
    const [imgLoadingError, setImgLoadingError] = useState(false);
    const src = imageSrc || desktop;
    if (!src) {
        return null;
    }
    const qaAttributes = getQaAttrubutes(qa, 'mobile-webp-source', 'mobile-source', 'tablet-webp-source', 'tablet-source', 'desktop-source-compressed');
    const disableWebp = projectSettings.disableCompress ||
        disableCompress ||
        !isCompressible(src) ||
        imgLoadingError;
    return (React.createElement("picture", { className: containerClassName, "data-qa": qa },
        mobile && (React.createElement(DeviceSpecificFragment, { src: mobile, disableWebp: disableWebp, breakpoint: BREAKPOINTS.sm, qa: qaAttributes.mobileSource })),
        tablet && (React.createElement(DeviceSpecificFragment, { src: tablet, disableWebp: disableWebp, breakpoint: BREAKPOINTS.md, qa: qaAttributes.tabletSource })),
        src && !disableWebp && (React.createElement("source", { srcSet: checkWebP(src), type: "image/webp", "data-qa": qaAttributes.desktopSourceCompressed })),
        React.createElement(ImageBase, Object.assign({ className: className, alt: alt, src: src, style: style, fetchPriority: fetchPriority, loading: loading }, extraProps, { onClick: onClick, onError: () => setImgLoadingError(true), onLoad: onLoad }))));
};
export default Image;
