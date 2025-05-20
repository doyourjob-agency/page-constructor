import React, { useContext } from 'react';
import { CardLayoutBlock } from '../..';
import { Anchor, InfiniteScroll } from '../../../components';
import { EventsRecentContext } from '../../../context/eventsContext';
import { FeedCard } from '../../../sub-blocks';
import { block } from '../../../utils';
import { i18n } from '../i18n';
import './EventsFeedRecent.css';
const b = block('events-feed-recent');
const colSizes = {
    sm: 12,
    md: 6,
    lg: 6,
    xl: 4,
    all: 12,
};
export const EventsFeedRecent = () => {
    const { recent, page, pageSize, onLoadMore } = useContext(EventsRecentContext);
    const itemsToShow = recent.slice(0, page * pageSize);
    const hasMore = page < Math.ceil(recent.length / pageSize);
    if (recent.length === 0) {
        return null;
    }
    return (React.createElement("div", { className: b() },
        React.createElement(Anchor, { id: "recent" }),
        React.createElement(CardLayoutBlock, { title: i18n('recent_events'), colSizes: colSizes }, itemsToShow.map((item) => (React.createElement(FeedCard, Object.assign({ key: item.slug }, item))))),
        React.createElement(InfiniteScroll, { hasMore: hasMore, onNext: onLoadMore })));
};
export default React.memo(EventsFeedRecent);
