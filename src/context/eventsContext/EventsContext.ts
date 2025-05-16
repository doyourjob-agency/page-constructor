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

export interface EventsHeaderFilterContextProps {
    filter: Record<string, string>;
}

export interface EventsHeaderFiltersContextProps {
    filters: {
        type: 'select' | 'input';
        name: string;
        label?: string;
        items?: EventsOption[];
    }[];
}

export interface EventsHeaderFunctionsContextProps {
    onChangeFilter?: (filter: EventsFilter) => void;
}

export interface EventsUpcomingContextProps {
    upcoming: EventData[];
}

export interface EventsRecentContextProps {
    recent: EventData[];
    page: number;
    pageSize: number;
    onLoadMore?: () => void;
}

export const EventsHeaderFilterContext = React.createContext<EventsHeaderFilterContextProps>({
    filter: {},
});

export const EventsHeaderFiltersContext = React.createContext<EventsHeaderFiltersContextProps>({
    filters: [],
});

export const EventsHeaderFunctionsContext = React.createContext<EventsHeaderFunctionsContextProps>({
    onChangeFilter: () => {},
});

export const EventsUpcomingContext = React.createContext<EventsUpcomingContextProps>({
    upcoming: [],
});

export const EventsRecentContext = React.createContext<EventsRecentContextProps>({
    recent: [],
    page: 1,
    pageSize: 6,
    onLoadMore: () => {},
});
