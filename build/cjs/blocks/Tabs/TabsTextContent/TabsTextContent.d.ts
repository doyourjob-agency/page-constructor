import { ImageDeviceProps, ImageObjectProps, TabsBlockItem, TabsBlockProps } from '../../../models';
interface TextContentProps extends Pick<TabsBlockProps, 'centered' | 'contentSize'> {
    showMedia: boolean;
    isReverse: boolean;
    data?: TabsBlockItem;
    centered?: boolean;
    imageProps?: ImageObjectProps | ImageDeviceProps;
}
export declare const TabsTextContent: ({ centered, contentSize, showMedia, data, imageProps, isReverse, }: TextContentProps) => JSX.Element | null;
export default TabsTextContent;
