import React from 'react';

import {EventsFeedBlockProps} from '../../models';

import EventsFeedRecent from './EventsFeedBodyRecent/EventsFeedRecent';
import EventsFeedHeader from './EventsFeedHeader/EventsFeedHeader';
import EventsFeedUpcoming from './EventsFeedUpcoming/EventsFeedUpcoming';

export const EventsFeedBlock = ({image, title}: EventsFeedBlockProps) => (
    <React.Fragment>
        <EventsFeedHeader image={image} title={title} />
        <EventsFeedUpcoming />
        <EventsFeedRecent />
    </React.Fragment>
);
export default EventsFeedBlock;
