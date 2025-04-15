import { MediaProps, QAProps } from '../../models';
import { ImageAdditionProps } from './Image/Image';
import { VideoAdditionProps } from './Video/Video';
export interface MediaAllProps extends MediaProps, VideoAdditionProps, ImageAdditionProps, QAProps {
    className?: string;
    youtubeClassName?: string;
    autoplay?: boolean;
    onImageLoad?: () => void;
}
export declare const Media: (props: MediaAllProps) => JSX.Element;
export default Media;
