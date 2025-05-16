import React from 'react';
import { EventsFeedHeaderControlsProps } from './EventsFeedHeaderControls/EventsFeedHeaderControls';
interface EventsFeedHeaderProps extends EventsFeedHeaderControlsProps {
    image?: string;
}
export declare const EventsFeedHeader: ({ title, image }: EventsFeedHeaderProps) => JSX.Element;
declare const _default: React.MemoExoticComponent<({ title, image }: EventsFeedHeaderProps) => JSX.Element>;
export default _default;
