export const isYoutubePlayerInstance = (playerInstance) => {
    return Boolean(playerInstance['pauseVideo'] && playerInstance['playVideo']);
};
