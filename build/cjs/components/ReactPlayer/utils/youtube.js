"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isYoutubePlayerInstance = void 0;
const isYoutubePlayerInstance = (playerInstance) => {
    return Boolean(playerInstance['pauseVideo'] && playerInstance['playVideo']);
};
exports.isYoutubePlayerInstance = isYoutubePlayerInstance;
