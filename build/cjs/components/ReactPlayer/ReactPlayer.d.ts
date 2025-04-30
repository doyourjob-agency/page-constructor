import React from 'react';
import { ClassNameProps, MediaVideoProps, ReactPlayerBlockHandler } from '../../models';
export interface ReactPlayerBlockProps extends Omit<MediaVideoProps, 'loop' | 'src'>, ClassNameProps {
    src: string | string[];
    previewImgUrl?: string;
    loop?: boolean;
    customBarControlsClassName?: string;
    showPreview?: boolean;
    onClickPreview?: () => void;
    height?: number;
    ratio?: number;
    autoRatio?: boolean;
    children?: React.ReactNode;
}
export declare const ReactPlayerBlock: React.ForwardRefExoticComponent<ReactPlayerBlockProps & React.RefAttributes<ReactPlayerBlockHandler>>;
export default ReactPlayerBlock;
