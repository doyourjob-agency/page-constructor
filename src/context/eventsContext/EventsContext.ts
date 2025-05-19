import React from 'react';

export type EventData = {
    slug: string;
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

export const EventsUpcomingContext = React.createContext<EventsUpcomingContextProps>({
    upcoming: [],
});

export const EventsRecentContext = React.createContext<EventsRecentContextProps>({
    recent: [],
    page: 1,
    pageSize: 6,
    onLoadMore: () => {},
});
