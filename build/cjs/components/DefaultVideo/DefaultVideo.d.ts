import React from 'react';
import { MediaVideoProps } from '../../models';
type DefaultVideoRefType = HTMLVideoElement | undefined;
interface DefaultVideoProps {
    video: MediaVideoProps;
    qa?: string;
    customBarControlsClassName?: string;
    className?: string;
}
export declare const DefaultVideo: React.ForwardRefExoticComponent<DefaultVideoProps & React.RefAttributes<DefaultVideoRefType>>;
export {};
