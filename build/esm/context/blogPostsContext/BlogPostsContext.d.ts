import React from 'react';
export type BlogPostData = {
    date: string;
    description?: string;
    image: string;
    readingTime?: number;
    slug: string;
    tags: {
        slug: string;
        name: string;
    }[];
    title: string;
    url: string;
};
export interface BlogPostsContextProps {
    pinnedPost?: BlogPostData;
    posts: BlogPostData[];
    page: number;
    pageSize: number;
    onLoadMore?: () => void;
}
export declare const BlogPostsContext: React.Context<BlogPostsContextProps>;
