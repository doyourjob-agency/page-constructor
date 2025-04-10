export const getLayoutItemLinks = (links) => links === null || links === void 0 ? void 0 : links.map((link) => (Object.assign({ theme: 'normal' }, link)));
export const hasFullscreen = ({ dataLens, image }) => {
    // datalens and slider media card don't support fullscreen mode
    return !(dataLens || Array.isArray(image));
};
export const showFullscreenIcon = ({ youtube, videoIframe }) => !(youtube || videoIframe);
