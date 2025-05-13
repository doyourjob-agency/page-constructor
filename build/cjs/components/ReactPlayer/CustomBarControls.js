"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const icons_1 = require("@gravity-ui/icons");
const uikit_1 = require("@gravity-ui/uikit");
const models_1 = require("../../models");
const utils_1 = require("../../utils");
const CircleProgress_1 = tslib_1.__importDefault(require("./CircleProgress"));
const i18n_1 = require("./i18n");
const b = (0, utils_1.block)('CustomBarControls');
const playIconsMap = {
    [models_1.CustomControlsType.WithMuteButton]: null,
    [models_1.CustomControlsType.WithPlayPauseButton]: icons_1.Play,
};
const pauseIconsMap = {
    [models_1.CustomControlsType.WithMuteButton]: null,
    [models_1.CustomControlsType.WithPlayPauseButton]: icons_1.Pause,
};
const muteIconsMap = {
    [models_1.CustomControlsType.WithMuteButton]: icons_1.VolumeFill,
    [models_1.CustomControlsType.WithPlayPauseButton]: icons_1.VolumeLow,
};
const unmuteIconsMap = {
    [models_1.CustomControlsType.WithMuteButton]: icons_1.VolumeXmark,
    [models_1.CustomControlsType.WithPlayPauseButton]: icons_1.VolumeXmark,
};
const CustomBarControls = (props) => {
    const { mute, elapsedTimePercent = 0, className, type = models_1.CustomControlsType.WithMuteButton, isPaused, onPlayClick, muteButtonShown: isMuteButtonShown = true, shown, positioning, } = props;
    const muteIcon = muteIconsMap[type];
    const unmuteIcon = unmuteIconsMap[type];
    const playIcon = playIconsMap[type];
    const pauseIcon = pauseIconsMap[type];
    const muteButton = (0, react_1.useMemo)(() => {
        if (!mute || !isMuteButtonShown) {
            return null;
        }
        const { isMuted, changeMute } = mute;
        return (react_1.default.createElement("button", { className: b('button', { type }), onClick: changeMute, "aria-label": (0, i18n_1.i18n)(isMuted ? 'unmute' : 'mute') },
            react_1.default.createElement(uikit_1.Icon, { data: isMuted ? unmuteIcon : muteIcon, className: b('mute-icon', { type }) }),
            type === models_1.CustomControlsType.WithMuteButton && !isMuted && (react_1.default.createElement(CircleProgress_1.default, { elapsedTime: elapsedTimePercent, strokeWidth: 5 }))));
    }, [elapsedTimePercent, isMuteButtonShown, mute, muteIcon, type, unmuteIcon]);
    const playPauseButton = (0, react_1.useMemo)(() => {
        const icon = isPaused ? playIcon : pauseIcon;
        if (type === models_1.CustomControlsType.WithMuteButton || !icon) {
            return null;
        }
        return (react_1.default.createElement("button", { onClick: onPlayClick, className: b('button', { type }), "aria-label": (0, i18n_1.i18n)(isPaused ? 'play' : 'pause') },
            react_1.default.createElement(uikit_1.Icon, { data: icon, className: b('play-icon', { type }) })));
    }, [isPaused, onPlayClick, type, playIcon, pauseIcon]);
    return (react_1.default.createElement("div", { className: b('wrapper', { type, shown, positioning }, className) },
        playPauseButton,
        muteButton));
};
exports.default = CustomBarControls;
