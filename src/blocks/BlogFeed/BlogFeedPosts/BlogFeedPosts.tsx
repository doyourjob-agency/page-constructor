import React, {useContext} from 'react';

import {CardLayoutBlock} from '../..';
import {InfiniteScroll} from '../../../components';
import {BlogPostsContext} from '../../../context/blogPostsContext';
import {PostCardSize, PostCardTitleHeadingLevel} from '../../../models';
import PostCard from '../../../sub-blocks/PostCard/PostCard';
import {block} from '../../../utils';

import './BlogFeedPosts.scss';

const b = block('blog-feed-posts');

const colSizes = {
    all: 12,
    lg: 4,
    md: 6,
};

export const BlogFeedPosts = () => {
    const {pinnedPost, posts, page, pageSize, onLoadMore} = useContext(BlogPostsContext);
    const itemsToShow = posts.slice(0, page * pageSize);
    const hasMore = page < Math.ceil(posts.length / pageSize);

    if (posts.length === 0) {
        return null;
    }

    return (
        <div className={b()}>
            {pinnedPost && (
                <div className={b('wrap')}>
                    <PostCard
                        {...pinnedPost}
                        size={PostCardSize.MEDIUM}
                        fullWidth
                        showTag
                        titleHeadingLevel={PostCardTitleHeadingLevel.H2}
                    />
                </div>
            )}
            <CardLayoutBlock className={b('wrap')} colSizes={colSizes}>
                {itemsToShow.map((item) => (
                    <PostCard
                        key={item.slug}
                        {...item}
                        showTag
                        titleHeadingLevel={
                            pinnedPost ? PostCardTitleHeadingLevel.H3 : PostCardTitleHeadingLevel.H2
                        }
                    />
                ))}
            </CardLayoutBlock>
            <InfiniteScroll hasMore={hasMore} onNext={onLoadMore} />
        </div>
    );
};

export default React.memo(BlogFeedPosts);
