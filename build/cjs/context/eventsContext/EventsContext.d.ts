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
export declare const EventsHeaderFilterContext: React.Context<EventsHeaderFilterContextProps>;
export declare const EventsHeaderFiltersContext: React.Context<EventsHeaderFiltersContextProps>;
export declare const EventsHeaderFunctionsContext: React.Context<EventsHeaderFunctionsContextProps>;
export declare const EventsUpcomingContext: React.Context<EventsUpcomingContextProps>;
export declare const EventsRecentContext: React.Context<EventsRecentContextProps>;
