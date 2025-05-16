import React, { useContext } from 'react';
import { CardLayoutBlock } from '../..';
import { Anchor } from '../../../components';
import { EventsUpcomingContext } from '../../../context/eventsContext';
import { block } from '../../../utils';
import EventsFeedCard from './../EventsFeedCard/EventsFeedCard';
import './EventsFeedUpcoming.css';
const b = block('events-feed-upcoming');
const colSizes = {
    sm: 12,
    md: 6,
    lg: 6,
    xl: 4,
    all: 12,
};
export const EventsFeedUpcoming = () => {
    const { upcoming } = useContext(EventsUpcomingContext);
    return (React.createElement("div", { className: b() },
        React.createElement(Anchor, { id: "upcoming" }),
        React.createElement(CardLayoutBlock, { colSizes: colSizes }, upcoming.map((item) => (React.createElement(EventsFeedCard, Object.assign({ key: item.slug }, item)))))));
};
export default React.memo(EventsFeedUpcoming);
