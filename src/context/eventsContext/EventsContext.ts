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

export type EventsContextProps = Record<
    string,
    {
        items: EventData[];
        page?: number;
        pageSize?: number;
        onLoadMore?: () => void;
    }
>;

export const EventsContext = React.createContext<EventsContextProps>({});
