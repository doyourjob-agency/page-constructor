import { MediaComponentImageProps, QAProps } from '../../../models';
export interface ImageAdditionProps {
    imageClassName?: string;
    isBackground?: boolean;
    fullscreen?: boolean;
    onLoad?: () => void;
}
interface InnerImageProps {
    hasVideoFallback: boolean;
}
type ImageAllProps = ImageAdditionProps & MediaComponentImageProps & InnerImageProps & QAProps;
export declare const defaultAnimatedDivQa = "animated-div";
declare const Image: (props: ImageAllProps) => JSX.Element;
export default Image;
