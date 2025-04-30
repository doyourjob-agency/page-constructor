import React from 'react';
export interface VideoContextProps {
    setProps: (newValues: Record<string, unknown>) => void;
    playingVideoRef?: HTMLDivElement;
}
export declare const VideoContext: React.Context<VideoContextProps>;
