import React from 'react';
export const EventsUpcomingContext = React.createContext({
    upcoming: [],
});
export const EventsRecentContext = React.createContext({
    recent: [],
    page: 1,
    pageSize: 6,
    onLoadMore: () => { },
});
