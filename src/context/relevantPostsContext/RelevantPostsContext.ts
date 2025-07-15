import React from 'react';

export type RelevantPostData = {
    date: string;
    dateTime: string;
    description?: string;
    image: string;
    readingTime?: number;
    slug: string;
    tags: {slug: string; name: string}[];
    services: string[];
    title: string;
    url: string;
};

export interface RelevantPostsContextProps {
    posts?: RelevantPostData[];
}

export const RelevantPostsContext = React.createContext<RelevantPostsContextProps>({
    posts: [],
});
