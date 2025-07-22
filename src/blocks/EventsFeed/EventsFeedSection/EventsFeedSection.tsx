import React, {useContext, useMemo} from 'react';

import {CardLayoutBlock} from '../..';
import {Anchor, InfiniteScroll} from '../../../components';
import {EventsContext} from '../../../context/eventsContext';
import {FeedCard} from '../../../sub-blocks';
import {block} from '../../../utils';

import './EventsFeedSection.scss';

const b = block('events-feed-section');

const colSizes = {
    sm: 12,
    md: 6,
    lg: 6,
    xl: 4,
    all: 12,
};

export const EventsFeedSection = ({typeKey, title}: {typeKey: string; title?: string}) => {
    const data = useContext(EventsContext);
    const {items, page, pageSize, onLoadMore} = data[typeKey] || {};
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
        <div className={b()}>
            <Anchor id={typeKey} />
            <CardLayoutBlock title={title} colSizes={colSizes}>
                {itemsToShow.map((item) => (
                    <FeedCard key={item.slug} {...item} />
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

export default React.memo(EventsFeedSection);
