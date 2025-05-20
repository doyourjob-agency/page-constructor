import React from 'react';
export const BlogPostsContext = React.createContext({
    posts: [],
    page: 1,
    pageSize: 6,
    onLoadMore: () => { },
});
