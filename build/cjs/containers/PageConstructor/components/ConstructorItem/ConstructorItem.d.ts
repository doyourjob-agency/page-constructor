import React from 'react';
import { ConstructorBlock } from '../../../../models';
export interface ConstructorItemProps {
    data: ConstructorBlock;
    blockKey: string;
}
export declare const ConstructorItem: ({ data, blockKey, children, }: React.PropsWithChildren<ConstructorItemProps>) => JSX.Element;
export declare const ConstructorHeader: ({ data, blockKey, }: Pick<ConstructorItemProps, 'data' | 'blockKey'>) => JSX.Element;
