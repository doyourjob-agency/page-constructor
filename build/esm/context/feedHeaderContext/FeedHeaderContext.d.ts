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
export declare const FeedHeaderFilterContext: React.Context<FeedHeaderFilterContextProps>;
export declare const FeedHeaderFiltersContext: React.Context<FeedHeaderFiltersContextProps>;
export declare const FeedHeaderFunctionsContext: React.Context<FeedHeaderFunctionsContextProps>;
