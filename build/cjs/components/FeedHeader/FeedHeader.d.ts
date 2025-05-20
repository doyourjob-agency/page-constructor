import React from 'react';
import { ControlsProps } from './Controls/Controls';
interface FeedHeaderProps extends ControlsProps {
    image?: string;
}
export declare const FeedHeader: ({ title, image }: FeedHeaderProps) => JSX.Element;
declare const _default: React.MemoExoticComponent<({ title, image }: FeedHeaderProps) => JSX.Element>;
export default _default;
