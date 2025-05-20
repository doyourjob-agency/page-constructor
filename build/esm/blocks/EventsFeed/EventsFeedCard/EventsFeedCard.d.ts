import React from 'react';
import './EventsFeedCard.css';
type EventsFeedCardProps = {
    slug: string;
    image?: string;
    title?: string;
    description?: string;
    info?: string;
    place?: string;
};
export declare const EventsFeedCard: ({ slug, image, title, description, info, place, }: EventsFeedCardProps) => JSX.Element;
declare const _default: React.MemoExoticComponent<({ slug, image, title, description, info, place, }: EventsFeedCardProps) => JSX.Element>;
export default _default;
