import React, {useContext} from 'react';

import {CardLayoutBlock, CustomerStoriesPostsContext} from '../..';
import {InfiniteScroll} from '../../components';

import CustomerStoriesCard from './CustomerStoriesCard/CustomerStoriesCard';

const colSizes = {
    all: 12,
    lg: 4,
    md: 6,
};

export const CustomerStoriesFeedBlock = () => {
    const {posts, page, pageSize, onLoadMore} = useContext(CustomerStoriesPostsContext);
    const itemsToShow = posts.slice(0, page * pageSize);
    const hasMore = page < Math.ceil(posts.length / pageSize);

    if (posts.length === 0) {
        return null;
    }

    return (
        <React.Fragment>
            <CardLayoutBlock colSizes={colSizes}>
                {itemsToShow.map((item) => (
                    <CustomerStoriesCard key={item.url} {...item} />
                ))}
            </CardLayoutBlock>
            <InfiniteScroll hasMore={hasMore} onNext={onLoadMore} />
        </React.Fragment>
    );
};

export default CustomerStoriesFeedBlock;
