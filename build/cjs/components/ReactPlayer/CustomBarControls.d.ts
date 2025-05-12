import React from 'react';
import { ClassNameProps, CustomControlsOptions, CustomControlsType } from '../../models';
interface MuteConfigProps {
    isMuted: boolean;
    changeMute: (event: React.MouseEvent) => void;
}
export interface CustomBarControlsProps extends ClassNameProps, CustomControlsOptions {
    mute?: MuteConfigProps;
    elapsedTimePercent?: number;
    type?: CustomControlsType;
    isPaused?: boolean;
    onPlayClick?: () => void;
    shown?: boolean;
}
declare const CustomBarControls: (props: CustomBarControlsProps) => JSX.Element;
export default CustomBarControls;
