import { __rest } from "tslib";
import React, { useContext } from 'react';
import { MobileContext } from '../../context/mobileContext';
import { block, getQaAttrubutes } from '../../utils';
import AnimateBlock from '../AnimateBlock/AnimateBlock';
import Media from '../Media/Media';
import './BackgroundMedia.css';
const b = block('BackgroundMedia');
const BackgroundMedia = (_a) => {
    var { className, color, animated, parallax = true, video, mediaClassName, fullWidthMedia, qa } = _a, props = __rest(_a, ["className", "color", "animated", "parallax", "video", "mediaClassName", "fullWidthMedia", "qa"]);
    const isMobile = useContext(MobileContext);
    const qaAttributes = getQaAttrubutes(qa, 'media');
    return (React.createElement(AnimateBlock, { className: b(null, className), style: { backgroundColor: color }, animate: animated, qa: qaAttributes.animate },
        React.createElement(Media, Object.assign({ className: b('media', { 'full-width-media': fullWidthMedia }, mediaClassName), imageClassName: b('image'), videoClassName: b('video'), isBackground: true, qa: qaAttributes.media }, Object.assign({ height: 720, color,
            parallax, video: isMobile ? undefined : video }, props)))));
};
export default BackgroundMedia;
