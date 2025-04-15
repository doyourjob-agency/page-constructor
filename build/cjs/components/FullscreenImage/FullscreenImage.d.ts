import { CSSProperties, HTMLProps } from 'react';
import { ImageProps } from '../Image/Image';
export interface FullscreenImageProps extends ImageProps {
    imageClassName?: string;
    modalImageClass?: string;
    imageStyle?: CSSProperties;
    extraProps?: HTMLProps<HTMLDivElement>;
}
declare const FullscreenImage: (props: FullscreenImageProps) => JSX.Element;
export default FullscreenImage;
