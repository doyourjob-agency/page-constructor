import React from 'react';
export const EventsHeaderFilterContext = React.createContext({
    filter: {},
});
export const EventsHeaderFiltersContext = React.createContext({
    filters: [],
});
export const EventsHeaderFunctionsContext = React.createContext({
    onChangeFilter: () => { },
});
export const EventsUpcomingContext = React.createContext({
    upcoming: [],
});
export const EventsRecentContext = React.createContext({
    recent: [],
    page: 1,
    pageSize: 6,
    onLoadMore: () => { },
});
