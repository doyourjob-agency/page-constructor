import React from 'react';

export type ResourceHubPostsData = {
    date: string;
    description?: string;
    image: string;
    readingTime?: number;
    slug: string;
    tags: {slug: string; name: string}[];
    title: string;
    url: string;
};

export interface ResourceHubPostsContextProps {
    pinnedPost?: ResourceHubPostsData;
    posts: ResourceHubPostsData[];
    page: number;
    pageSize: number;
    onLoadMore?: () => void;
}

export const ResourceHubPostsContext = React.createContext<ResourceHubPostsContextProps>({
    posts: [],
    page: 1,
    pageSize: 6,
    onLoadMore: () => {},
});
