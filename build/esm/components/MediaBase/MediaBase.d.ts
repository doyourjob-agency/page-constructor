import React, { ReactElement } from 'react';
import { MediaBaseBlockProps } from '../../models';
import './MediaBase.css';
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
