/// <reference types="react" />
import { MediaAllProps } from '../Media/Media';
export type ChildMediaRenderProps = Pick<MediaAllProps, 'fullscreen' | 'imageClassName' | 'videoClassName' | 'youtubeClassName' | 'className' | 'previewImg' | 'autoplay'>;
export interface FullscreenMediaProps {
    showFullscreenIcon?: boolean;
    children: (props?: ChildMediaRenderProps) => JSX.Element;
}
declare const FullscreenMedia: ({ children, showFullscreenIcon }: FullscreenMediaProps) => JSX.Element;
export default FullscreenMedia;
