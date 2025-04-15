import { CSSProperties, MouseEventHandler, ReactEventHandler } from 'react';
import { ImageDeviceProps, ImageObjectProps, QAProps } from '../../models';
export interface ImageProps extends Partial<ImageObjectProps>, Partial<ImageDeviceProps>, QAProps {
    style?: CSSProperties;
    className?: string;
    onClick?: MouseEventHandler;
    onLoad?: ReactEventHandler<HTMLDivElement>;
    containerClassName?: string;
}
export interface DeviceSpecificFragmentProps extends QAProps {
    disableWebp: boolean;
    src: string;
    breakpoint: number;
}
declare const Image: (props: ImageProps) => JSX.Element | null;
export default Image;
