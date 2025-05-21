import React from 'react';

import FeedHeader from '../../components/FeedHeader/FeedHeader';
import {EventsFeedBlockProps} from '../../models';

import EventsFeedRecent from './EventsFeedRecent/EventsFeedRecent';
import EventsFeedUpcoming from './EventsFeedUpcoming/EventsFeedUpcoming';

export const EventsFeedBlock = ({image, title}: EventsFeedBlockProps) => (
    <React.Fragment>
        <FeedHeader image={image} title={title} />
        <EventsFeedUpcoming />
        <EventsFeedRecent />
    </React.Fragment>
);
export default EventsFeedBlock;
