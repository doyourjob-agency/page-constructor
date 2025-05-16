import React, { ReactNode } from 'react';
import { QAProps } from '../../models';
import './BalancedMasonry.css';
export interface BalancedMasonryProps extends QAProps {
    className: string;
    columnClassName: string;
    children: ReactNode[];
    breakpointCols: {
        [key: number]: number;
    };
}
declare const BalancedMasonry: (props: React.PropsWithChildren<BalancedMasonryProps>) => JSX.Element;
export default BalancedMasonry;
