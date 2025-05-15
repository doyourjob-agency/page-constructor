"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkYoutubeVideos = void 0;
// the file serves to support live video with react-player@2.9
const LIVE_YUOTUBE_VIDEO_REGEX = /(?:youtu\.be\/live\/|youtube(?:-nocookie)?\.com\/(?:live\/))((\w|-){11})/;
const YOUTUBE_VIDEO_TEMPLATE = 'https://www.youtube.com/watch?v=';
const transformYoutubeUrl = (src) => {
    var _a;
    if (LIVE_YUOTUBE_VIDEO_REGEX.test(src)) {
        const youtubeLiveId = (_a = src.match(LIVE_YUOTUBE_VIDEO_REGEX)) === null || _a === void 0 ? void 0 : _a[1];
        if (!youtubeLiveId) {
            return src;
        }
        return `${YOUTUBE_VIDEO_TEMPLATE}${youtubeLiveId}`;
    }
    return src;
};
const checkYoutubeVideos = (src) => {
    if (Array.isArray(src)) {
        return src.map((videoUrl) => transformYoutubeUrl(videoUrl));
    }
    return transformYoutubeUrl(src);
};
exports.checkYoutubeVideos = checkYoutubeVideos;
