import React, { useMemo } from 'react';
import { Pause, Play, VolumeFill, VolumeLow, VolumeXmark } from '@gravity-ui/icons';
import { Icon } from '@gravity-ui/uikit';
import { CustomControlsType } from '../../models';
import { block } from '../../utils';
import CircleProgress from './CircleProgress';
import { i18n } from './i18n';
import './CustomBarControls.css';
const b = block('CustomBarControls');
const playIconsMap = {
    [CustomControlsType.WithMuteButton]: null,
    [CustomControlsType.WithPlayPauseButton]: Play,
};
const pauseIconsMap = {
    [CustomControlsType.WithMuteButton]: null,
    [CustomControlsType.WithPlayPauseButton]: Pause,
};
const muteIconsMap = {
    [CustomControlsType.WithMuteButton]: VolumeFill,
    [CustomControlsType.WithPlayPauseButton]: VolumeLow,
};
const unmuteIconsMap = {
    [CustomControlsType.WithMuteButton]: VolumeXmark,
    [CustomControlsType.WithPlayPauseButton]: VolumeXmark,
};
const CustomBarControls = (props) => {
    const { mute, elapsedTimePercent = 0, className, type = CustomControlsType.WithMuteButton, isPaused, onPlayClick, muteButtonShown: isMuteButtonShown = true, shown, positioning, } = props;
    const muteIcon = muteIconsMap[type];
    const unmuteIcon = unmuteIconsMap[type];
    const playIcon = playIconsMap[type];
    const pauseIcon = pauseIconsMap[type];
    const muteButton = useMemo(() => {
        if (!mute || !isMuteButtonShown) {
            return null;
        }
        const { isMuted, changeMute } = mute;
        return (React.createElement("button", { className: b('button', { type }), onClick: changeMute, "aria-label": i18n(isMuted ? 'unmute' : 'mute') },
            React.createElement(Icon, { data: isMuted ? unmuteIcon : muteIcon, className: b('mute-icon', { type }) }),
            type === CustomControlsType.WithMuteButton && !isMuted && (React.createElement(CircleProgress, { elapsedTime: elapsedTimePercent, strokeWidth: 5 }))));
    }, [elapsedTimePercent, isMuteButtonShown, mute, muteIcon, type, unmuteIcon]);
    const playPauseButton = useMemo(() => {
        const icon = isPaused ? playIcon : pauseIcon;
        if (type === CustomControlsType.WithMuteButton || !icon) {
            return null;
        }
        return (React.createElement("button", { onClick: onPlayClick, className: b('button', { type }), "aria-label": i18n(isPaused ? 'play' : 'pause') },
            React.createElement(Icon, { data: icon, className: b('play-icon', { type }) })));
    }, [isPaused, onPlayClick, type, playIcon, pauseIcon]);
    return (React.createElement("div", { className: b('wrapper', { type, shown, positioning }, className) },
        playPauseButton,
        muteButton));
};
export default CustomBarControls;
