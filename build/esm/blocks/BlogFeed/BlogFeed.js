import React from 'react';
import FeedHeader from '../../components/FeedHeader/FeedHeader';
import BlogFeedPosts from './BlogFeedPosts/BlogFeedPosts';
export const BlogFeedBlock = ({ image, title }) => (React.createElement(React.Fragment, null,
    React.createElement(FeedHeader, { image: image, title: title }),
    React.createElement(BlogFeedPosts, null)));
export default BlogFeedBlock;
