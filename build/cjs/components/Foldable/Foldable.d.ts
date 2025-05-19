import React from 'react';
import { QAProps } from '../../models';
export interface FoldableProps extends QAProps {
    isOpened: boolean;
    className?: string;
}
declare const Foldable: ({ isOpened, children, className, qa }: React.PropsWithChildren<FoldableProps>) => JSX.Element;
export default Foldable;
