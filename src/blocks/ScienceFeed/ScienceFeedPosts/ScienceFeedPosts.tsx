import React, {useContext} from 'react';

import {CardLayoutBlock} from '../..';
import {InfiniteScroll} from '../../../components';
import {SciencePostsContext} from '../../../context/sciencePostsContext';
import {NewPostCard} from '../../../sub-blocks';
import {block} from '../../../utils';

import './ScienceFeedPosts.scss';

const b = block('science-feed-posts');

const colSizes = {
    all: 12,
    lg: 4,
    md: 6,
};

const colPinnedSizes = {
    all: 12,
};

export const ScienceFeedPosts = () => {
    const {pinnedPost, posts, page, pageSize, onLoadMore} = useContext(SciencePostsContext);
    const itemsToShow = posts.slice(0, page * pageSize);
    const hasMore = page < Math.ceil(posts.length / pageSize);

    if (posts.length === 0) {
        return null;
    }

    return (
        <div className={b()}>
            {pinnedPost && (
                <CardLayoutBlock colSizes={colPinnedSizes} itemClassName={b('item')}>
                    <NewPostCard {...pinnedPost} pinned />
                </CardLayoutBlock>
            )}
            <CardLayoutBlock colSizes={colSizes} itemClassName={b('item')}>
                {itemsToShow.map((item) => (
                    <NewPostCard key={item.slug} {...item} />
                ))}
            </CardLayoutBlock>
            <InfiniteScroll hasMore={hasMore} onNext={onLoadMore} />
        </div>
    );
};

export default React.memo(ScienceFeedPosts);
