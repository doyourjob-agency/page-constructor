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

type EventsOption = {
    content: string;
    value: string;
};

export interface EventsContextProps {
    upcoming: EventData[];
    recent: EventData[];
    types: EventsOption[];
    countries: EventsOption[];
    filter: EventsFilter;
    page: number;
    pageSize: number;
    onLoadMore?: () => void;
    onChangeFilter?: (filter: EventsFilter) => void;
}

export const EventsContext = React.createContext<EventsContextProps>({
    upcoming: [],
    recent: [],
    types: [],
    countries: [],
    filter: {},
    page: 1,
    pageSize: 6,
    onLoadMore: () => {},
    onChangeFilter: () => {},
});
