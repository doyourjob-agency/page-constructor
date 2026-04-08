import React from 'react';

export type SciencePostData = {
    date: string;
    description?: string;
    author?: string;
    image: string;
    readingTime?: number;
    slug: string;
    topic?: string;
    title: string;
    url: string;
};

export interface SciencePostsContextProps {
    pinnedPost?: SciencePostData;
    posts: SciencePostData[];
    page: number;
    pageSize: number;
    onLoadMore?: () => void;
}

export const SciencePostsContext = React.createContext<SciencePostsContextProps>({
    posts: [],
    page: 1,
    pageSize: 6,
    onLoadMore: () => {},
});
