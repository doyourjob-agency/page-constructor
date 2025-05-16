import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { PlayFill } from '@gravity-ui/icons';
import { Icon, useActionHandlers, useUniqId } from '@gravity-ui/uikit';
import debounce from 'lodash/debounce';
import { v4 as uuidv4 } from 'uuid';
import { useAnalytics } from '../../hooks/useAnalytics';
import { DefaultEventNames } from '../../models/common';
import { block, getPageSearchParams } from '../../utils';
import Image from '../Image/Image';
import { i18n } from './i18n';
import './VideoBlock.css';
const RECORD_URL = 'https://www.youtube.com/embed/';
const STREAM_URL = 'https://www.youtube.com/embed/live_stream?channel=';
const RECORD_RE = /[0-9A-Za-z_-]{11}/;
const STREAM_RE = /[0-9A-Za-z_-]{23,25}/;
const AUTOPLAY_DELAY = 300;
export const AUTOPLAY_ATTRIBUTES = {
    autoplay: 1,
    mute: 1,
};
const NO_AUTOPLAY_ATTRIBUTES = {
    autoplay: 0,
};
const b = block('VideoBlock');
function getYoutubeVideoSrc(stream, record) {
    if (!stream && !record) {
        return null;
    }
    const [videoLink, url, re] = stream
        ? [stream, STREAM_URL, STREAM_RE]
        : [record, RECORD_URL, RECORD_RE];
    const match = videoLink === null || videoLink === void 0 ? void 0 : videoLink.match(re);
    let src;
    if (match && match.length) {
        src = url + match[0];
    }
    return src;
}
export function getHeight(width) {
    return (width / 16) * 9;
}
const VideoBlock = (props) => {
    const { stream, record, videoIframe, attributes, className, id, previewImg, playButton, playButtonId, height, fullscreen, analyticsEvents, autoplay, onImageLoad, } = props;
    const handleAnalytics = useAnalytics(DefaultEventNames.VideoPreview);
    const src = videoIframe ? videoIframe : getYoutubeVideoSrc(stream, record);
    const ref = useRef(null);
    const [hidePreview, setHidePreview] = useState(false);
    const [currentHeight, setCurrentHeight] = useState(height || undefined);
    const fullId = useMemo(() => id || uuidv4(), [id]);
    const buttonId = useUniqId();
    const [isPlaying, setIsPlaying] = useState(!previewImg);
    const iframeSrc = useMemo(() => {
        if (src && isPlaying) {
            try {
                const url = new URL(src);
                const searchParams = getPageSearchParams(Object.assign(Object.assign({}, (attributes || {})), (previewImg || autoplay ? AUTOPLAY_ATTRIBUTES : NO_AUTOPLAY_ATTRIBUTES)));
                searchParams.forEach((value, key) => {
                    url.searchParams.set(key, value);
                });
                return url.href;
            }
            catch (e) {
                return src;
            }
        }
        return undefined;
    }, [attributes, autoplay, isPlaying, previewImg, src]);
    const onPreviewClick = useCallback(() => {
        handleAnalytics(analyticsEvents);
        setIsPlaying(true);
        setTimeout(() => setHidePreview(true), AUTOPLAY_DELAY);
    }, [handleAnalytics, analyticsEvents]);
    const { onKeyDown: onPreviewKeyDown } = useActionHandlers(onPreviewClick);
    useEffect(() => {
        const updateSize = debounce(() => {
            setCurrentHeight(ref.current ? Math.round(getHeight(ref.current.offsetWidth)) : undefined);
        }, 100);
        updateSize();
        window.addEventListener('resize', updateSize, { passive: true });
        return () => {
            window.removeEventListener('resize', updateSize);
        };
    }, [height]);
    const iframeContent = useMemo(() => {
        return (React.createElement("iframe", { id: fullId, src: iframeSrc, width: "100%", height: "100%", title: i18n('iframe-title'), frameBorder: "0", allowFullScreen: true, allow: "autoplay; fullscreen; encrypted-media; accelerometer; gyroscope; picture-in-picture; clipboard-write; web-share; screen-wake-lock", loading: "lazy" }));
    }, [fullId, iframeSrc]);
    useEffect(() => {
        setHidePreview(false);
    }, [src]);
    if (!src) {
        return null;
    }
    return (React.createElement("div", { className: b(null, className), style: { height: currentHeight }, ref: ref },
        iframeContent,
        previewImg && !hidePreview && !fullscreen && (React.createElement("div", { className: b('preview'), onClick: onPreviewClick, onKeyDown: onPreviewKeyDown, role: "button", tabIndex: 0, "aria-labelledby": playButton ? playButtonId : buttonId },
            React.createElement(Image, { src: previewImg, className: b('image'), containerClassName: b('image-wrapper'), onLoad: onImageLoad }),
            playButton || (React.createElement("button", { title: "Play", id: buttonId, className: b('button') },
                React.createElement(Icon, { className: b('icon'), data: PlayFill, size: 24 })))))));
};
export default VideoBlock;
