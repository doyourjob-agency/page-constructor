"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactPlayerBlock = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const icons_1 = require("@gravity-ui/icons");
const uikit_1 = require("@gravity-ui/uikit");
const debounce_1 = tslib_1.__importDefault(require("lodash/debounce"));
const react_player_1 = tslib_1.__importDefault(require("react-player"));
const mobileContext_1 = require("../../context/mobileContext");
const videoContext_1 = require("../../context/videoContext");
const hooks_1 = require("../../hooks");
const models_1 = require("../../models");
const utils_1 = require("../../utils");
const CustomBarControls_1 = tslib_1.__importDefault(require("./CustomBarControls"));
const i18n_1 = require("./i18n");
const utils_2 = require("./utils");
const youtube_1 = require("./utils/youtube");
const b = (0, utils_1.block)('ReactPlayer');
const FPS = 60;
// eslint-disable-next-line react/display-name
exports.ReactPlayerBlock = react_1.default.forwardRef((props, originRef) => {
    const isMobile = (0, react_1.useContext)(mobileContext_1.MobileContext);
    const { src, previewImgUrl, loop = false, controls = models_1.MediaVideoControlsType.Default, customControlsOptions = {}, muted: initiallyMuted = false, elapsedTime, playButton, className, customBarControlsClassName, showPreview, onClickPreview, analyticsEvents, height, ariaLabel, ratio, autoRatio, contain = true, } = props;
    const { type = models_1.PlayButtonType.Default, theme = models_1.PlayButtonThemes.Blue, text, className: buttonClassName, } = playButton || {};
    const { type: customControlsType = models_1.CustomControlsType.WithMuteButton, muteButtonShown, positioning = models_1.CustomControlsButtonPositioning.Center, } = customControlsOptions;
    const autoPlay = Boolean(!isMobile && !previewImgUrl && props.autoplay);
    const mute = initiallyMuted || autoPlay;
    const { playingVideoRef, setProps } = (0, react_1.useContext)(videoContext_1.VideoContext);
    const ref = (0, react_1.useRef)(null);
    const buttonRef = (0, react_1.useRef)(null);
    const [playerRef, setPlayerRef] = (0, react_1.useState)();
    const [isPlaying, setIsPlaying] = (0, react_1.useState)(autoPlay);
    const [playedPercent, setPlayedPercent] = (0, react_1.useState)(0);
    const [currentHeight, setCurrentHeight] = (0, react_1.useState)(height);
    const [width, setWidth] = (0, react_1.useState)(0);
    const [actualRatio, setActualRatio] = (0, react_1.useState)();
    const [muted, setMuted] = (0, react_1.useState)(mute);
    const [started, setStarted] = (0, react_1.useState)(autoPlay);
    const [ended, setEnded] = (0, react_1.useState)(false);
    const [isMounted, setIsMounted] = (0, react_1.useState)(false);
    const [hovered, setHovered] = (0, react_1.useState)(isMobile);
    (0, hooks_1.useMount)(() => setIsMounted(true));
    const videoSrc = (0, react_1.useMemo)(() => (0, utils_2.checkYoutubeVideos)(src), [src]);
    const eventsArray = (0, react_1.useMemo)(() => {
        if (analyticsEvents) {
            return Array.isArray(analyticsEvents) ? analyticsEvents : [analyticsEvents];
        }
        return [];
    }, [analyticsEvents]);
    const handleAnalytics = (0, hooks_1.useAnalytics)(models_1.DefaultEventNames.ReactPlayerControls);
    (0, react_1.useImperativeHandle)(originRef, () => {
        if (!playerRef) {
            return;
        }
        let play, pause, addEventListener;
        const videoInstance = playerRef.getInternalPlayer();
        if ((0, youtube_1.isYoutubePlayerInstance)(videoInstance)) {
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
    (0, react_1.useEffect)(() => {
        if (ref.current && !(playingVideoRef === null || playingVideoRef === void 0 ? void 0 : playingVideoRef.contains(ref.current))) {
            setMuted(true);
        }
    }, [playingVideoRef]);
    (0, react_1.useEffect)(() => {
        if (showPreview) {
            playerRef === null || playerRef === void 0 ? void 0 : playerRef.showPreview();
        }
    }, [showPreview, playerRef]);
    (0, react_1.useEffect)(() => {
        if (playerRef && !started) {
            setIsPlaying(autoPlay);
        }
    }, [autoPlay, playerRef, started]);
    (0, react_1.useEffect)(() => setMuted(mute), [mute]);
    (0, react_1.useEffect)(() => {
        if (!started && isPlaying) {
            setStarted(true);
        }
    }, [isPlaying, started]);
    (0, react_1.useEffect)(() => {
        if (started && !Number.isNaN(Number(elapsedTime))) {
            playerRef === null || playerRef === void 0 ? void 0 : playerRef.seekTo(elapsedTime !== null && elapsedTime !== void 0 ? elapsedTime : 0, 'seconds');
        }
    }, [elapsedTime, playerRef, started]);
    (0, react_1.useEffect)(() => {
        const updateSize = (0, debounce_1.default)(() => {
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
    const playEvents = (0, react_1.useMemo)(() => eventsArray === null || eventsArray === void 0 ? void 0 : eventsArray.filter((e) => e.type === models_1.PredefinedEventTypes.Play), [eventsArray]);
    const stopEvents = (0, react_1.useMemo)(() => eventsArray === null || eventsArray === void 0 ? void 0 : eventsArray.filter((e) => e.type === models_1.PredefinedEventTypes.Stop), [eventsArray]);
    const playIcon = (0, react_1.useMemo)(() => {
        let playButtonContent;
        switch (type) {
            case models_1.PlayButtonType.Text:
                playButtonContent = text;
                break;
            case models_1.PlayButtonType.Default:
            default:
                playButtonContent = react_1.default.createElement(uikit_1.Icon, { className: b('icon'), data: icons_1.PlayFill, size: 24 });
                break;
        }
        return (react_1.default.createElement("button", { className: b('button', { theme, text: Boolean(text) }, buttonClassName), "aria-label": (0, i18n_1.i18n)('play'), ref: buttonRef }, playButtonContent));
    }, [type, theme, text, buttonClassName]);
    const changeMute = (0, react_1.useCallback)((isMuted) => {
        if (isMuted &&
            playerRef &&
            controls === models_1.MediaVideoControlsType.Custom &&
            customControlsType === models_1.CustomControlsType.WithMuteButton) {
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
    const handleClickPreview = (0, react_1.useCallback)(() => {
        setIsPlaying(true);
        onClickPreview === null || onClickPreview === void 0 ? void 0 : onClickPreview();
        handleAnalytics(playEvents);
    }, [onClickPreview, handleAnalytics, playEvents]);
    const onPause = (0, react_1.useCallback)(() => {
        // For support correct state for youtube
        if (controls !== models_1.MediaVideoControlsType.Custom ||
            customControlsType !== models_1.CustomControlsType.WithMuteButton) {
            setIsPlaying(false);
        }
    }, [controls, customControlsType]);
    const onStart = (0, react_1.useCallback)(() => {
        if (!autoPlay && !initiallyMuted) {
            setMuted(false);
        }
    }, [autoPlay, initiallyMuted]);
    const onPlay = (0, react_1.useCallback)(() => {
        setIsPlaying(true);
        if (controls === models_1.MediaVideoControlsType.Custom &&
            customControlsType === models_1.CustomControlsType.WithMuteButton) {
            if (ended) {
                changeMute(false);
            }
            else if (!isPlaying) {
                changeMute(muted);
            }
            setEnded(false);
        }
    }, [changeMute, controls, customControlsType, ended, isPlaying, muted]);
    const onReady = (0, react_1.useCallback)((player) => {
        setPlayerRef(player);
        const videoElement = player.getInternalPlayer();
        const videoWidth = videoElement.videoWidth;
        const videoHeight = videoElement.videoHeight;
        if (videoWidth && videoHeight) {
            setActualRatio(videoHeight / videoWidth);
        }
    }, []);
    const onProgress = (0, react_1.useCallback)((progress) => {
        setPlayedPercent(progress.played);
        if (progress.played === 1) {
            setMuted(true);
        }
    }, []);
    const onEnded = (0, react_1.useCallback)(() => {
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
    const onPlayClick = (0, react_1.useCallback)(() => {
        if (isPlaying) {
            onPause();
        }
        else {
            onPlay();
        }
    }, [isPlaying, onPlay, onPause]);
    const handleClick = (0, react_1.useCallback)(() => {
        var _a;
        (_a = buttonRef.current) === null || _a === void 0 ? void 0 : _a.click();
        if (controls === models_1.MediaVideoControlsType.Custom) {
            if (customControlsType === models_1.CustomControlsType.WithMuteButton) {
                changeMute(muted);
            }
            else {
                onPlayClick();
            }
        }
    }, [controls, customControlsType, changeMute, muted, onPlayClick]);
    const handleKeyDown = (0, react_1.useCallback)((e) => {
        var _a;
        const key = e.key.toLowerCase();
        if (key === 'enter') {
            (_a = buttonRef.current) === null || _a === void 0 ? void 0 : _a.click();
        }
    }, []);
    const onFocusIn = (0, react_1.useCallback)(() => setHovered(true), []);
    const onFocusOut = (0, react_1.useCallback)(() => setHovered(false), []);
    return (react_1.default.createElement("div", { className: b({
            wrapper: !currentHeight,
            controls,
            contain,
            'auto-ratio': autoRatio,
        }, className), ref: ref, onClick: handleClick, onMouseEnter: onFocusIn, onMouseLeave: onFocusOut, onFocus: onFocusIn, onBlur: onFocusOut, onKeyDown: handleKeyDown, role: "button", tabIndex: 0 }, isMounted ? (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement(react_player_1.default, { className: b('player'), url: videoSrc, muted: muted, controls: controls === models_1.MediaVideoControlsType.Default, height: currentHeight || '100%', width: width || '100%', light: previewImgUrl, playing: isPlaying, playIcon: playIcon, progressInterval: FPS, onClickPreview: handleClickPreview, onStart: onStart, onReady: onReady, onPlay: onPlay, onPause: autoPlay && customControlsType !== models_1.CustomControlsType.WithMuteButton
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
        controls === models_1.MediaVideoControlsType.Custom && (react_1.default.createElement(CustomBarControls_1.default, { className: customBarControlsClassName, mute: {
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
exports.default = exports.ReactPlayerBlock;
