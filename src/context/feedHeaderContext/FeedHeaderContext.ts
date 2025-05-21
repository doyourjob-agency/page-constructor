import React from 'react';

export type FeedHeaderOption = {
    content: string;
    value: string;
};

export interface FeedHeaderFilterContextProps {
    filter: Record<string, string>;
}

export interface FeedHeaderFiltersContextProps {
    filters: {
        type: 'select' | 'input' | 'multiple-select';
        name: string;
        label?: string;
        items?: FeedHeaderOption[];
    }[];
}

export interface FeedHeaderFunctionsContextProps {
    onChangeFilter?: (filter: Record<string, string>) => void;
}

export const FeedHeaderFilterContext = React.createContext<FeedHeaderFilterContextProps>({
    filter: {},
});

export const FeedHeaderFiltersContext = React.createContext<FeedHeaderFiltersContextProps>({
    filters: [],
});

export const FeedHeaderFunctionsContext = React.createContext<FeedHeaderFunctionsContextProps>({
    onChangeFilter: () => {},
});
