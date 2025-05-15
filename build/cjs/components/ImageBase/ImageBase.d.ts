import { CSSProperties, MouseEventHandler, ReactEventHandler } from 'react';
import { ImageObjectProps } from '../../models';
export interface ImageBaseProps extends Partial<ImageObjectProps> {
    style?: CSSProperties;
    className?: string;
    onClick?: MouseEventHandler;
    onLoad?: ReactEventHandler<HTMLDivElement>;
    onError?: () => void;
}
export declare const ImageBase: ({ fetchPriority, alt, ...props }: ImageBaseProps) => JSX.Element;
export default ImageBase;
