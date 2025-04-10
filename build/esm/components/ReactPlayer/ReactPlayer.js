import React, { Fragment, useCallback, useContext, useEffect, useImperativeHandle, useMemo, useRef, useState, } from 'react';
import { PlayFill } from '@gravity-ui/icons';
import { Icon } from '@gravity-ui/uikit';
import debounce from 'lodash/debounce';
import ReactPlayer from 'react-player';
import { MobileContext } from '../../context/mobileContext';
import { VideoContext } from '../../context/videoContext';
import { useAnalytics, useMount } from '../../hooks';
import { CustomControlsButtonPositioning, CustomControlsType, DefaultEventNames, MediaVideoControlsType, PlayButtonThemes, PlayButtonType, PredefinedEventTypes, } from '../../models';
import { block } from '../../utils';
import CustomBarControls from './CustomBarControls';
import { i18n } from './i18n';
import { checkYoutubeVideos } from './utils';
import { isYoutubePlayerInstance } from './utils/youtube';
import './ReactPlayer.css';
const b = block('ReactPlayer');
const FPS = 60;
// eslint-disable-next-line react/display-name
export const ReactPlayerBlock = React.forwardRef((props, originRef) => {
    const isMobile = useContext(MobileContext);
    const { src, previewImgUrl, loop = false, controls = MediaVideoControlsType.Default, customControlsOptions = {}, muted: initiallyMuted = false, elapsedTime, playButton, className, customBarControlsClassName, showPreview, onClickPreview, analyticsEvents, height, ariaLabel, ratio, autoRatio, contain = true, } = props;
    const { type = PlayButtonType.Default, theme = PlayButtonThemes.Blue, text, className: buttonClassName, } = playButton || {};
    const { type: customControlsType = CustomControlsType.WithMuteButton, muteButtonShown, positioning = CustomControlsButtonPositioning.Center, } = customControlsOptions;
    const autoPlay = Boolean(!isMobile && !previewImgUrl && props.autoplay);
    const mute = initiallyMuted || autoPlay;
    const { playingVideoRef, setProps } = useContext(VideoContext);
    const ref = useRef(null);
    const buttonRef = useRef(null);
    const [playerRef, setPlayerRef] = useState();
    const [isPlaying, setIsPlaying] = useState(autoPlay);
    const [playedPercent, setPlayedPercent] = useState(0);
    const [currentHeight, setCurrentHeight] = useState(height);
    const [width, setWidth] = useState(0);
    const [actualRatio, setActualRatio] = useState();
    const [muted, setMuted] = useState(mute);
    const [started, setStarted] = useState(autoPlay);
    const [ended, setEnded] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [hovered, setHovered] = useState(isMobile);
    useMount(() => setIsMounted(true));
    const videoSrc = useMemo(() => checkYoutubeVideos(src), [src]);
    const eventsArray = useMemo(() => {
        if (analyticsEvents) {
            return Array.isArray(analyticsEvents) ? analyticsEvents : [analyticsEvents];
        }
        return [];
    }, [analyticsEvents]);
    const handleAnalytics = useAnalytics(DefaultEventNames.ReactPlayerControls);
    useImperativeHandle(originRef, () => {
        if (!playerRef) {
            return;
        }
        let play, pause, addEventListener;
        const videoInstance = playerRef.getInternalPlayer();
        if (isYoutubePlayerInstance(videoInstance)) {
            ({ pauseVideo: pause, playVideo: play, addEventListener } = videoInstance);
        }
        else {
            // it is assumed that `videoInstance` is HTMLVideoElement by default
            ({ play, pause, addEventListener } = videoInstance);
        }
        // eslint-disable-next-line consistent-return
        return {
            play: play.bind(videoInstance),
            pause: pause.bind(videoInstance),
            addEventListener: addEventListener.bind(videoInstance),
        };
    }, [playerRef]);
    useEffect(() => {
        if (ref.current && !(playingVideoRef === null || playingVideoRef === void 0 ? void 0 : playingVideoRef.contains(ref.current))) {
            setMuted(true);
        }
    }, [playingVideoRef]);
    useEffect(() => {
        if (showPreview) {
            playerRef === null || playerRef === void 0 ? void 0 : playerRef.showPreview();
        }
    }, [showPreview, playerRef]);
    useEffect(() => {
        if (playerRef && !started) {
            setIsPlaying(autoPlay);
        }
    }, [autoPlay, playerRef, started]);
    useEffect(() => setMuted(mute), [mute]);
    useEffect(() => {
        if (!started && isPlaying) {
            setStarted(true);
        }
    }, [isPlaying, started]);
    useEffect(() => {
        if (started && !Number.isNaN(Number(elapsedTime))) {
            playerRef === null || playerRef === void 0 ? void 0 : playerRef.seekTo(elapsedTime !== null && elapsedTime !== void 0 ? elapsedTime : 0, 'seconds');
        }
    }, [elapsedTime, playerRef, started]);
    useEffect(() => {
        const updateSize = debounce(() => {
            if (ref.current) {
                // We need to get parent's width does not equal 0
                const parentElement = getParentElement(ref.current);
                const { paddingLeft, paddingRight } = getComputedStyle(parentElement);
                const newWidth = parentElement.offsetWidth -
                    parseFloat(paddingLeft) -
                    parseFloat(paddingRight);
                setWidth(newWidth);
                setCurrentHeight(Math.floor(getHeight(newWidth, ratio !== null && ratio !== void 0 ? ratio : (autoRatio ? actualRatio : undefined))));
            }
        }, 200);
        updateSize();
        window.addEventListener('resize', updateSize, { passive: true });
        return () => {
            window.removeEventListener('resize', updateSize);
        };
    }, [actualRatio, autoRatio, ratio]);
    const playEvents = useMemo(() => eventsArray === null || eventsArray === void 0 ? void 0 : eventsArray.filter((e) => e.type === PredefinedEventTypes.Play), [eventsArray]);
    const stopEvents = useMemo(() => eventsArray === null || eventsArray === void 0 ? void 0 : eventsArray.filter((e) => e.type === PredefinedEventTypes.Stop), [eventsArray]);
    const playIcon = useMemo(() => {
        let playButtonContent;
        switch (type) {
            case PlayButtonType.Text:
                playButtonContent = text;
                break;
            case PlayButtonType.Default:
            default:
                playButtonContent = React.createElement(Icon, { className: b('icon'), data: PlayFill, size: 24 });
                break;
        }
        return (React.createElement("button", { className: b('button', { theme, text: Boolean(text) }, buttonClassName), "aria-label": i18n('play'), ref: buttonRef }, playButtonContent));
    }, [type, theme, text, buttonClassName]);
    const changeMute = useCallback((isMuted) => {
        if (isMuted &&
            playerRef &&
            controls === MediaVideoControlsType.Custom &&
            customControlsType === CustomControlsType.WithMuteButton) {
            playerRef.seekTo(0);
            setPlayedPercent(0);
        }
        const events = isMuted ? playEvents : stopEvents;
        handleAnalytics(events);
        if (isMuted) {
            setProps({ playingVideoRef: ref.current });
        }
        // In order to the progress bar to update (equals 0) before displaying
        setTimeout(() => setMuted(!isMuted), 0);
    }, [
        playerRef,
        customControlsType,
        playEvents,
        stopEvents,
        handleAnalytics,
        setProps,
        controls,
    ]);
    const handleClickPreview = useCallback(() => {
        setIsPlaying(true);
        onClickPreview === null || onClickPreview === void 0 ? void 0 : onClickPreview();
        handleAnalytics(playEvents);
    }, [onClickPreview, handleAnalytics, playEvents]);
    const onPause = useCallback(() => {
        // For support correct state for youtube
        if (controls !== MediaVideoControlsType.Custom ||
            customControlsType !== CustomControlsType.WithMuteButton) {
            setIsPlaying(false);
        }
    }, [controls, customControlsType]);
    const onStart = useCallback(() => {
        if (!autoPlay && !initiallyMuted) {
            setMuted(false);
        }
    }, [autoPlay, initiallyMuted]);
    const onPlay = useCallback(() => {
        setIsPlaying(true);
        if (controls === MediaVideoControlsType.Custom &&
            customControlsType === CustomControlsType.WithMuteButton) {
            if (ended) {
                changeMute(false);
            }
            else if (!isPlaying) {
                changeMute(muted);
            }
            setEnded(false);
        }
    }, [changeMute, controls, customControlsType, ended, isPlaying, muted]);
    const onReady = useCallback((player) => {
        setPlayerRef(player);
        const videoElement = player.getInternalPlayer();
        const videoWidth = videoElement.videoWidth;
        const videoHeight = videoElement.videoHeight;
        if (videoWidth && videoHeight) {
            setActualRatio(videoHeight / videoWidth);
        }
    }, []);
    const onProgress = useCallback((progress) => {
        setPlayedPercent(progress.played);
        if (progress.played === 1) {
            setMuted(true);
        }
    }, []);
    const onEnded = useCallback(() => {
        // Youtube videos not muted after finishing playing and start again.
        // 'onEnded' does not fire when 'loop' is set to true.
        // It is custom loop with muted sound after finishing playing and start again.
        if (loop) {
            setPlayedPercent(0);
            setIsPlaying(true);
            playerRef === null || playerRef === void 0 ? void 0 : playerRef.seekTo(0);
        }
        setEnded(true);
    }, [loop, playerRef]);
    const onPlayClick = useCallback(() => {
        if (isPlaying) {
            onPause();
        }
        else {
            onPlay();
        }
    }, [isPlaying, onPlay, onPause]);
    const handleClick = useCallback(() => {
        var _a;
        (_a = buttonRef.current) === null || _a === void 0 ? void 0 : _a.click();
        if (controls === MediaVideoControlsType.Custom) {
            if (customControlsType === CustomControlsType.WithMuteButton) {
                changeMute(muted);
            }
            else {
                onPlayClick();
            }
        }
    }, [controls, customControlsType, changeMute, muted, onPlayClick]);
    const handleKeyDown = useCallback((e) => {
        var _a;
        const key = e.key.toLowerCase();
        if (key === 'enter') {
            (_a = buttonRef.current) === null || _a === void 0 ? void 0 : _a.click();
        }
    }, []);
    const onFocusIn = useCallback(() => setHovered(true), []);
    const onFocusOut = useCallback(() => setHovered(false), []);
    return (React.createElement("div", { className: b({
            wrapper: !currentHeight,
            controls,
            contain,
            'auto-ratio': autoRatio,
        }, className), ref: ref, onClick: handleClick, onMouseEnter: onFocusIn, onMouseLeave: onFocusOut, onFocus: onFocusIn, onBlur: onFocusOut, onKeyDown: handleKeyDown, role: "button", tabIndex: 0 }, isMounted ? (React.createElement(Fragment, null,
        React.createElement(ReactPlayer, { className: b('player'), url: videoSrc, muted: muted, controls: controls === MediaVideoControlsType.Default, height: currentHeight || '100%', width: width || '100%', light: previewImgUrl, playing: isPlaying, playIcon: playIcon, progressInterval: FPS, onClickPreview: handleClickPreview, onStart: onStart, onReady: onReady, onPlay: onPlay, onPause: autoPlay && customControlsType !== CustomControlsType.WithMuteButton
                ? undefined
                : onPause, onProgress: onProgress, onEnded: onEnded, "aria-label": ariaLabel, previewTabIndex: -1, config: {
                file: {
                    attributes: {
                        pip: isMobile ? 'false' : undefined,
                        playsinline: isMobile ? '' : undefined,
                        disablepictureinpicture: isMobile ? '' : undefined,
                    },
                },
            } }),
        controls === MediaVideoControlsType.Custom && (React.createElement(CustomBarControls, { className: customBarControlsClassName, mute: {
                isMuted: muted,
                changeMute: (event) => {
                    event.stopPropagation();
                    changeMute(muted);
                },
            }, elapsedTimePercent: playedPercent, type: customControlsType, isPaused: !isPlaying, onPlayClick: onPlayClick, muteButtonShown: muteButtonShown, shown: hovered && ((!started && !previewImgUrl) || started), positioning: positioning })))) : null));
});
function getHeight(width, ratio = 9 / 16) {
    return width * ratio;
}
function getParentElement(element) {
    const parentElement = element.parentElement;
    if (!parentElement) {
        return element;
    }
    return parentElement.offsetWidth ? parentElement : getParentElement(parentElement);
}
export default ReactPlayerBlock;
