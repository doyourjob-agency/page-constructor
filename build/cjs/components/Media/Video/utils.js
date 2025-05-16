"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVideoTypesWithPriority = exports.VideoType = exports.VideoExt = void 0;
var VideoExt;
(function (VideoExt) {
    VideoExt["Mp4"] = "mp4";
    VideoExt["Webm"] = "webm";
    VideoExt["Ogg"] = "ogg";
    VideoExt["Ogv"] = "ogv";
})(VideoExt = exports.VideoExt || (exports.VideoExt = {}));
var VideoType;
(function (VideoType) {
    VideoType["Mp4"] = "video/mp4";
    VideoType["Webm"] = "video/webm";
    VideoType["Ogg"] = "video/ogg";
})(VideoType = exports.VideoType || (exports.VideoType = {}));
const VideoTypePriority = {
    [VideoType.Webm]: 1,
    [VideoType.Ogg]: 2,
    [VideoType.Mp4]: 3,
};
function parseVideoType(src) {
    const [path] = src.split('?');
    const fileExt = path.split('.').pop();
    switch (fileExt) {
        case VideoExt.Mp4:
            return VideoType.Mp4;
        case VideoExt.Webm:
            return VideoType.Webm;
        case VideoExt.Ogg:
        case VideoExt.Ogv:
            return VideoType.Ogg;
        default:
            return undefined;
    }
}
const getVideoTypesWithPriority = (sources) => sources
    .map((src) => ({ src, type: parseVideoType(src) }))
    .sort(({ type: typeA }, { type: typeB }) => {
    if (typeA === undefined) {
        return 1;
    }
    if (typeB === undefined) {
        return -1;
    }
    return VideoTypePriority[typeA] - VideoTypePriority[typeB];
});
exports.getVideoTypesWithPriority = getVideoTypesWithPriority;
