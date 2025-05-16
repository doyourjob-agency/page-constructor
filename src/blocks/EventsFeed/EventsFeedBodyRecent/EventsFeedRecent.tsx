import React, {useContext} from 'react';

import {CardLayoutBlock} from '../..';
import {Anchor, InfiniteScroll} from '../../../components';
import {EventsContext} from '../../../context/eventsContext';
import {block} from '../../../utils';

import EventsFeedCard from './../EventsFeedCard/EventsFeedCard';
import {i18n} from './../i18n';

import './EventsFeedRecent.scss';

const b = block('events-feed-recent');

const colSizes = {
    sm: 12,
    md: 6,
    lg: 6,
    xl: 4,
    all: 12,
};

export const EventsFeedRecent = () => {
    const {recent, page, pageSize, onLoadMore} = useContext(EventsContext);
    const itemsToShow = recent.slice(0, page * pageSize);
    const hasMore = page < Math.ceil(recent.length / pageSize);

    if (recent.length === 0) {
        return null;
    }

    return (
        <div className={b()}>
            <Anchor id="recent" />
            <CardLayoutBlock title={i18n('recent_events')} colSizes={colSizes}>
                {itemsToShow.map((item) => (
                    <EventsFeedCard key={item.slug} {...item} />
                ))}
            </CardLayoutBlock>
            <InfiniteScroll hasMore={hasMore} onNext={onLoadMore} />
        </div>
    );
};

export default EventsFeedRecent;
