import React from 'react';
import { MediaComponentVideoProps, PlayButtonProps, QAProps } from '../../../models';
export interface VideoAdditionProps {
    playButton?: PlayButtonProps;
    customBarControlsClassName?: string;
    videoClassName?: string;
    playVideo?: boolean;
}
interface InnerVideoProps {
    setHasVideoFallback: React.Dispatch<boolean>;
    hasVideoFallback: boolean;
}
export type VideoAllProps = VideoAdditionProps & MediaComponentVideoProps & InnerVideoProps & QAProps;
declare const Video: (props: VideoAllProps) => JSX.Element | null;
export default Video;
