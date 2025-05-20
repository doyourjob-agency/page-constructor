import React from 'react';
export const FeedHeaderFilterContext = React.createContext({
    filter: {},
});
export const FeedHeaderFiltersContext = React.createContext({
    filters: [],
});
export const FeedHeaderFunctionsContext = React.createContext({
    onChangeFilter: () => { },
});
