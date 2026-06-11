import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';

import {PlayFill} from '@gravity-ui/icons';
import {Icon, useUniqId} from '@gravity-ui/uikit';
import debounce from 'lodash/debounce';

import {useAnalytics} from '../../hooks/useAnalytics';
import {AnalyticsEventsBase, DefaultEventNames} from '../../models/common';
import {block, getPageSearchParams} from '../../utils';
import Image from '../Image/Image';

import {i18n} from './i18n';

import './VideoBlock.scss';

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

function getYoutubeVideoSrc(stream?: string, record?: string) {
    if (!stream && !record) {
        return null;
    }

    const [videoLink, url, re] = stream
        ? [stream, STREAM_URL, STREAM_RE]
        : [record, RECORD_URL, RECORD_RE];
    const match = videoLink?.match(re);
    let src;

    if (match && match.length) {
        src = url + match[0];
    }

    return src;
}

export function getHeight(width: number, ratio?: number | 'auto'): number {
    if (ratio === 'auto') {
        return (width / 16) * 9;
    }
    if (ratio) {
        return width / ratio;
    }
    return (width / 16) * 9;
}

export interface VideoBlockProps extends AnalyticsEventsBase {
    id?: string;
    stream?: string;
    record?: string;
    videoIframe?: string;
    attributes?: Record<string, string>;
    className?: string;
    previewImg?: string;
    previewVideo?: string;
    playButton?: React.ReactNode;
    playButtonCorner?: boolean;
    playButtonText?: string;
    playButtonId?: string;
    height?: number;
    ratio?: number | 'auto';
    fullscreen?: boolean;
    autoplay?: boolean;
    onImageLoad?: () => void;
    /** Название видео — используется как title для iframe и aria-label для кнопки воспроизведения */
    title?: string;
}

const VideoBlock = (props: VideoBlockProps) => {
    const {
        stream,
        record,
        videoIframe,
        attributes,
        className,
        id,
        previewImg,
        previewVideo,
        playButton,
        playButtonCorner,
        playButtonText,
        playButtonId,
        height,
        ratio,
        fullscreen,
        analyticsEvents,
        autoplay,
        onImageLoad,
        title,
    } = props;
    const handleAnalytics = useAnalytics(DefaultEventNames.VideoPreview);

    const src = videoIframe ? videoIframe : getYoutubeVideoSrc(stream, record);
    const containerRef = useRef<HTMLDivElement>(null);
    // Отдельный ref для iframe чтобы управлять фокусом
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const [hidePreview, setHidePreview] = useState(false);
    const [currentHeight, setCurrentHeight] = useState(height || undefined);
    const fullId = useUniqId();

    const [isPlaying, setIsPlaying] = useState(!previewImg);
    const [isHovered, setIsHovered] = useState(false);

    const iframeSrc = useMemo(() => {
        if (src && isPlaying) {
            try {
                const url = new URL(src);
                const searchParams = getPageSearchParams({
                    ...(attributes || {}),
                    ...(previewImg || autoplay ? AUTOPLAY_ATTRIBUTES : NO_AUTOPLAY_ATTRIBUTES),
                });

                searchParams.forEach((value, key) => {
                    url.searchParams.set(key, value);
                });

                return url.href;
            } catch (e) {
                return src;
            }
        }

        return undefined;
    }, [attributes, autoplay, isPlaying, previewImg, src]);

    const onPreviewClick = useCallback(() => {
        handleAnalytics(analyticsEvents);

        setIsPlaying(true);

        setTimeout(() => {
            setHidePreview(true);
            // Перемещаем фокус на iframe после скрытия превью,
            // чтобы пользователь клавиатуры/скринридера не терял ориентацию
            iframeRef.current?.focus();
        }, AUTOPLAY_DELAY);
    }, [handleAnalytics, analyticsEvents]);

    const onMouseEnter = useCallback(() => {
        setIsHovered(true);
    }, []);

    const onMouseLeave = useCallback(() => {
        setIsHovered(false);
    }, []);

    useEffect(() => {
        const updateSize = debounce(() => {
            setCurrentHeight(
                containerRef.current
                    ? Math.round(getHeight(containerRef.current.offsetWidth, ratio))
                    : undefined,
            );
        }, 100);

        updateSize();
        window.addEventListener('resize', updateSize, {passive: true});
        return () => {
            window.removeEventListener('resize', updateSize);
        };
    }, [height, ratio]);

    // Осмысленный title для iframe: если передан title пропс — используем его,
    // иначе fallback на i18n-строку
    const iframeTitle = title ? `${i18n('iframe-title')}: ${title}` : i18n('iframe-title');

    // Пока показывается превью — iframe скрыт от вспомогательных технологий
    // и не попадает в порядок фокуса
    const isPreviewVisible = Boolean(previewImg) && !hidePreview && !fullscreen;

    const iframeContent = useMemo(() => {
        return (
            <iframe
                ref={iframeRef}
                id={id || fullId}
                src={iframeSrc}
                width="100%"
                height="100%"
                title={iframeTitle}
                frameBorder="0"
                allow="autoplay; fullscreen; encrypted-media; accelerometer; gyroscope; picture-in-picture; clipboard-write; web-share; screen-wake-lock"
                loading="lazy"
                // Скрываем от AT и убираем из tab-порядка пока активно превью
                aria-hidden={isPreviewVisible || undefined}
                tabIndex={isPreviewVisible ? -1 : 0}
            />
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fullId, id, iframeSrc, iframeTitle, isPreviewVisible]);

    useEffect(() => {
        setHidePreview(false);
    }, [src]);

    if (!src) {
        return null;
    }

    // aria-label для кнопки воспроизведения:
    // приоритет — playButtonText, затем title видео, затем дефолтная i18n-строка
    const playButtonAriaLabel =
        playButtonText || title
            ? [playButtonText || 'Play', title].filter(Boolean).join(': ')
            : 'Play';

    return (
        <div className={b(null, className)} style={{height: currentHeight}} ref={containerRef}>
            {iframeContent}
            {previewImg && !hidePreview && !fullscreen && (
                // Используем настоящий <button> вместо <div role="button">:
                // — нативно фокусируется по Tab
                // — активируется Enter/Space без дополнительного onKeyDown
                // — корректно объявляется скринридерами
                <button
                    className={b('preview')}
                    onClick={onPreviewClick}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    aria-label={playButtonAriaLabel}
                    // Если передан внешний playButton с собственным id — используем его,
                    // иначе aria-label на самой кнопке достаточно
                    id={playButton ? playButtonId : undefined}
                    type="button"
                >
                    {isHovered && previewVideo ? (
                        // Декоративное превью-видео скрыто от AT
                        <video
                            src={previewVideo}
                            className={b('video')}
                            autoPlay
                            muted
                            loop
                            playsInline
                            aria-hidden="true"
                        />
                    ) : (
                        <Image
                            src={previewImg}
                            className={b('image')}
                            containerClassName={b('image-wrapper')}
                            onLoad={onImageLoad}
                        />
                    )}
                    {playButton || (
                        // Декоративный элемент кнопки скрыт от AT —
                        // вся доступная информация уже есть в aria-label родительской кнопки
                        <span
                            className={b('button', {
                                corner: playButtonCorner,
                                text: Boolean(playButtonText),
                            })}
                            aria-hidden="true"
                        >
                            {playButtonText ? (
                                <span className={b('button-text')}>{playButtonText}</span>
                            ) : (
                                <Icon
                                    className={b('icon')}
                                    data={PlayFill}
                                    size={playButtonCorner ? 16 : 24}
                                />
                            )}
                        </span>
                    )}
                </button>
            )}
        </div>
    );
};

export default VideoBlock;
