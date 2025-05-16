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

export type EventsFilter = {
    search?: string;
    countries?: string;
    types?: string;
};

export type EventsOption = {
    content: string;
    value: string;
};

export interface EventsContextProps {
    upcoming: EventData[];
    recent: EventData[];
    filter: Record<string, string>;
    filters: {
        type: 'select' | 'input';
        name: string;
        label?: string;
        items?: EventsOption[];
    }[];
    page: number;
    pageSize: number;
    onLoadMore?: () => void;
    onChangeFilter?: (filter: EventsFilter) => void;
}

export const EventsContext = React.createContext<EventsContextProps>({
    upcoming: [],
    recent: [],
    filter: {},
    filters: [],
    page: 1,
    pageSize: 6,
    onLoadMore: () => {},
    onChangeFilter: () => {},
});
