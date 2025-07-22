import React from 'react';

import FeedHeader from '../../components/FeedHeader/FeedHeader';
import {EventsFeedBlockProps} from '../../models';

import EventsFeedSection from './EventsFeedSection/EventsFeedSection';
import {i18n} from './i18n';

export const EventsFeedBlock = ({image, title}: EventsFeedBlockProps) => (
    <React.Fragment>
        <FeedHeader image={image} title={title} />
        <EventsFeedSection typeKey="upcoming" />
        <EventsFeedSection typeKey="recent" title={i18n('recent_events')} />
    </React.Fragment>
);
export default EventsFeedBlock;
