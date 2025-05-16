"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showFullscreenIcon = exports.hasFullscreen = exports.getLayoutItemLinks = void 0;
const getLayoutItemLinks = (links) => links === null || links === void 0 ? void 0 : links.map((link) => (Object.assign({ theme: 'normal' }, link)));
exports.getLayoutItemLinks = getLayoutItemLinks;
const hasFullscreen = ({ dataLens, image }) => {
    // datalens and slider media card don't support fullscreen mode
    return !(dataLens || Array.isArray(image));
};
exports.hasFullscreen = hasFullscreen;
const showFullscreenIcon = ({ youtube, videoIframe }) => !(youtube || videoIframe);
exports.showFullscreenIcon = showFullscreenIcon;
