"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const mobileContext_1 = require("../../context/mobileContext");
const utils_1 = require("../../utils");
const AnimateBlock_1 = tslib_1.__importDefault(require("../AnimateBlock/AnimateBlock"));
const Media_1 = tslib_1.__importDefault(require("../Media/Media"));
const b = (0, utils_1.block)('BackgroundMedia');
const BackgroundMedia = (_a) => {
    var { className, color, animated, parallax = true, video, mediaClassName, fullWidthMedia, qa } = _a, props = tslib_1.__rest(_a, ["className", "color", "animated", "parallax", "video", "mediaClassName", "fullWidthMedia", "qa"]);
    const isMobile = (0, react_1.useContext)(mobileContext_1.MobileContext);
    const qaAttributes = (0, utils_1.getQaAttrubutes)(qa, 'media');
    return (react_1.default.createElement(AnimateBlock_1.default, { className: b(null, className), style: { backgroundColor: color }, animate: animated, qa: qaAttributes.animate },
        react_1.default.createElement(Media_1.default, Object.assign({ className: b('media', { 'full-width-media': fullWidthMedia }, mediaClassName), imageClassName: b('image'), videoClassName: b('video'), isBackground: true, qa: qaAttributes.media }, Object.assign({ height: 720, color,
            parallax, video: isMobile ? undefined : video }, props)))));
};
exports.default = BackgroundMedia;
