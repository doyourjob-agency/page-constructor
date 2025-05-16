import React from 'react';

import {EventsFeedBlockProps} from '../../models';

import EventsFeedHeader from './EventsFeedHeader/EventsFeedHeader';
import EventsFeedRecent from './EventsFeedRecent/EventsFeedRecent';
import EventsFeedUpcoming from './EventsFeedUpcoming/EventsFeedUpcoming';

export const EventsFeedBlock = ({image, title}: EventsFeedBlockProps) => (
    <React.Fragment>
        <EventsFeedHeader image={image} title={title} />
        <EventsFeedUpcoming />
        <EventsFeedRecent />
    </React.Fragment>
);
export default EventsFeedBlock;
