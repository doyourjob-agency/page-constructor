import React, {useContext, useMemo} from 'react';

import {CardLayoutBlock} from '../..';
import {InfiniteScroll} from '../../../components';
import {PartnersContext} from '../../../context/partnersContext';
import {FeedPartner} from '../../../sub-blocks';

const colSizes = {
    lg: 4,
    md: 6,
    all: 12,
};

export const PartnersFeedSection = () => {
    const data = useContext(PartnersContext);
    const {items = [], page, pageSize, onLoadMore} = data || {};
    const hasInfiniteScroll = page !== undefined && pageSize !== undefined;
    const itemsToShow = useMemo(() => {
        if (!hasInfiniteScroll) {
            return items;
        }
        return items.slice(0, page * pageSize);
    }, [items, page, pageSize, hasInfiniteScroll]);

    if (!items || items.length === 0) {
        return null;
    }

    return (
        <div>
            <CardLayoutBlock colSizes={colSizes}>
                {itemsToShow.map((item) => (
                    <FeedPartner key={item.url} {...item} jumpOnHover />
                ))}
            </CardLayoutBlock>
            {hasInfiniteScroll && (
                <InfiniteScroll
                    hasMore={page < Math.ceil(items.length / pageSize)}
                    onNext={onLoadMore}
                />
            )}
        </div>
    );
};

export default React.memo(PartnersFeedSection);
