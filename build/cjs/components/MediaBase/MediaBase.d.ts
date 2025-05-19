import React, { ReactElement } from 'react';
import { MediaBaseBlockProps } from '../../models';
interface MediaBaseProps extends MediaBaseBlockProps {
    children: ReactElement;
    onScroll?: () => void;
}
export declare const MediaBase: {
    (props: MediaBaseProps): JSX.Element;
    Card: React.FC<{
        children?: React.ReactNode;
    }>;
};
export default MediaBase;
