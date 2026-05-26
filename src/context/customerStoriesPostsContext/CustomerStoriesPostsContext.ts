import React from 'react';

export type CustomerStoriesPostData = {
    url: string;
    image: string;
    title: string;
    text?: string;
};

export interface CustomerStoriesPostsContextProps {
    posts: CustomerStoriesPostData[];
    page: number;
    pageSize: number;
    onLoadMore?: () => void;
}

export const CustomerStoriesPostsContext = React.createContext<CustomerStoriesPostsContextProps>({
    posts: [],
    page: 1,
    pageSize: 6,
    onLoadMore: () => {},
});
