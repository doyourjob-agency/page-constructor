import React from 'react';

import FeedHeader from '../../components/FeedHeader/FeedHeader';
import {BlogFeedBlockProps} from '../../models';

import BlogFeedPosts from './BlogFeedPosts/BlogFeedPosts';

export const BlogFeedBlock = ({image, title}: BlogFeedBlockProps) => (
    <React.Fragment>
        <FeedHeader image={image} title={title} />
        <BlogFeedPosts />
    </React.Fragment>
);
export default BlogFeedBlock;
