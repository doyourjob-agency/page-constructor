import React from 'react';
export type EventData = {
    slug: string;
    url?: string;
    title?: string;
    description?: string;
    date?: string;
    dateStart: string;
    image?: string;
    info?: string;
    country?: string;
    place?: string;
    type: string;
    online?: boolean;
};
export interface EventsUpcomingContextProps {
    upcoming: EventData[];
}
export interface EventsRecentContextProps {
    recent: EventData[];
    page: number;
    pageSize: number;
    onLoadMore?: () => void;
}
export declare const EventsUpcomingContext: React.Context<EventsUpcomingContextProps>;
export declare const EventsRecentContext: React.Context<EventsRecentContextProps>;
