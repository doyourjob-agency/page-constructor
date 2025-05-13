import React from 'react';
import { BlockDecorationProps, ConstructorBlock as ConstructorBlockType } from '../../../../models';
import './ConstructorBlock.css';
interface ConstructorBlockProps extends Pick<BlockDecorationProps, 'index'> {
    data: ConstructorBlockType;
}
export declare const ConstructorBlock: ({ index, data, children, }: React.PropsWithChildren<ConstructorBlockProps>) => JSX.Element;
export {};
