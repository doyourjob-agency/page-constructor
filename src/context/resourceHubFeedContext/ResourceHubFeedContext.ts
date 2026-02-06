import React from 'react';

export type ResourceHubFeedData = {
    date: string;
    description?: string;
    image: string;
    readingTime?: number;
    slug: string;
    tags: {slug: string; name: string}[];
    title: string;
    url: string;
};

export interface ResourceHubFeedContextProps {
    pinnedPost?: ResourceHubFeedData;
    posts: ResourceHubFeedData[];
    page: number;
    pageSize: number;
    onLoadMore?: () => void;
}

export const ResourceHubFeedContext = React.createContext<ResourceHubFeedContextProps>({
    posts: [],
    page: 1,
    pageSize: 6,
    onLoadMore: () => {},
});
