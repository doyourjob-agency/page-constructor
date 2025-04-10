import React, { CSSProperties } from 'react';
import { AnimateContextProps } from '../../context/animateContext/AnimateContext';
import { QAProps } from '../../models';
export interface AnimateBlockProps extends AnimateContextProps, QAProps {
    animate?: boolean;
    offset?: number;
    className?: string;
    style?: CSSProperties;
    onScroll?: () => void;
}
declare const AnimateBlock: (props: React.PropsWithChildren<AnimateBlockProps>) => JSX.Element;
export default AnimateBlock;
