import React, {useContext} from 'react';

import {CardLayoutBlock} from '../..';
import {InfiniteScroll} from '../../../components';
import {ResourceHubPostsContext} from '../../../context/resourceHubPostsContext';
import {PostCardTitleHeadingLevel} from '../../../models';
import PostCard from '../../../sub-blocks/PostCard/PostCard';
import {block} from '../../../utils';

const b = block('resource-hub-posts-section');

const colSizes = {
    all: 12,
    lg: 4,
    md: 6,
};

export const ResourceHubPostsSection = () => {
    const {posts, page, pageSize, onLoadMore} = useContext(ResourceHubPostsContext);
    const itemsToShow = posts.slice(0, page * pageSize);
    const hasMore = page < Math.ceil(posts.length / pageSize);

    if (posts.length === 0) {
        return null;
    }

    return (
        <div className={b()}>
            Hello
            <CardLayoutBlock className={b('wrap')} colSizes={colSizes}>
                {itemsToShow.map((item) => (
                    <PostCard
                        key={item.slug}
                        {...item}
                        showTag
                        titleHeadingLevel={PostCardTitleHeadingLevel.H2}
                    />
                ))}
            </CardLayoutBlock>
            <InfiniteScroll hasMore={hasMore} onNext={onLoadMore} />
        </div>
    );
};

export default React.memo(ResourceHubPostsSection);
