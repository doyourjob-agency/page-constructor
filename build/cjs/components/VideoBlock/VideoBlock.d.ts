import React from 'react';
import { AnalyticsEventsBase } from '../../models/common';
export declare const AUTOPLAY_ATTRIBUTES: {
    autoplay: number;
    mute: number;
};
export declare function getHeight(width: number): number;
export interface VideoBlockProps extends AnalyticsEventsBase {
    id?: string;
    stream?: string;
    record?: string;
    videoIframe?: string;
    attributes?: Record<string, string>;
    className?: string;
    previewImg?: string;
    playButton?: React.ReactNode;
    playButtonId?: string;
    height?: number;
    fullscreen?: boolean;
    autoplay?: boolean;
    onImageLoad?: () => void;
}
declare const VideoBlock: (props: VideoBlockProps) => JSX.Element | null;
export default VideoBlock;
