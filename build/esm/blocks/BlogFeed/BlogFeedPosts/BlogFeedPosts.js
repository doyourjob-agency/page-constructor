import React, { useContext } from 'react';
import { CardLayoutBlock } from '../..';
import { InfiniteScroll } from '../../../components';
import { BlogPostsContext } from '../../../context/blogPostsContext';
import { PostCardSize, PostCardTitleHeadingLevel } from '../../../models';
import PostCard from '../../../sub-blocks/PostCard/PostCard';
import { block } from '../../../utils';
import './BlogFeedPosts.css';
const b = block('blog-feed-posts');
const colSizes = {
    all: 12,
    lg: 4,
    md: 6,
};
export const BlogFeedPosts = () => {
    const { pinnedPost, posts, page, pageSize, onLoadMore } = useContext(BlogPostsContext);
    const itemsToShow = posts.slice(0, page * pageSize);
    const hasMore = page < Math.ceil(posts.length / pageSize);
    if (posts.length === 0) {
        return null;
    }
    return (React.createElement("div", { className: b() },
        pinnedPost && (React.createElement("div", { className: b('wrap') },
            React.createElement(PostCard, Object.assign({}, pinnedPost, { size: PostCardSize.MEDIUM, fullWidth: true, showTag: true, titleHeadingLevel: PostCardTitleHeadingLevel.H2 })))),
        React.createElement(CardLayoutBlock, { className: b('wrap'), colSizes: colSizes }, itemsToShow.map((item) => (React.createElement(PostCard, Object.assign({ key: item.slug }, item, { showTag: true, titleHeadingLevel: pinnedPost ? PostCardTitleHeadingLevel.H3 : PostCardTitleHeadingLevel.H2 }))))),
        React.createElement(InfiniteScroll, { hasMore: hasMore, onNext: onLoadMore })));
};
export default React.memo(BlogFeedPosts);
