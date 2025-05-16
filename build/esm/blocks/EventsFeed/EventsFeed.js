import React from 'react';
import EventsFeedHeader from './EventsFeedHeader/EventsFeedHeader';
import EventsFeedRecent from './EventsFeedRecent/EventsFeedRecent';
import EventsFeedUpcoming from './EventsFeedUpcoming/EventsFeedUpcoming';
export const EventsFeedBlock = ({ image, title }) => (React.createElement(React.Fragment, null,
    React.createElement(EventsFeedHeader, { image: image, title: title }),
    React.createElement(EventsFeedUpcoming, null),
    React.createElement(EventsFeedRecent, null)));
export default EventsFeedBlock;
