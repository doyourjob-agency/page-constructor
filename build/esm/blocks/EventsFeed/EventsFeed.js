import React from 'react';
import FeedHeader from '../../components/FeedHeader/FeedHeader';
import EventsFeedRecent from './EventsFeedRecent/EventsFeedRecent';
import EventsFeedUpcoming from './EventsFeedUpcoming/EventsFeedUpcoming';
export const EventsFeedBlock = ({ image, title }) => (React.createElement(React.Fragment, null,
    React.createElement(FeedHeader, { image: image, title: title }),
    React.createElement(EventsFeedUpcoming, null),
    React.createElement(EventsFeedRecent, null)));
export default EventsFeedBlock;
