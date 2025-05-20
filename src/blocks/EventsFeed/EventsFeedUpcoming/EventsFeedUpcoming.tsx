import React, {useContext} from 'react';

import {CardLayoutBlock} from '../..';
import {Anchor} from '../../../components';
import {EventsUpcomingContext} from '../../../context/eventsContext';
import {FeedCard} from '../../../sub-blocks';
import {block} from '../../../utils';

import './EventsFeedUpcoming.scss';

const b = block('events-feed-upcoming');

const colSizes = {
    sm: 12,
    md: 6,
    lg: 6,
    xl: 4,
    all: 12,
};

export const EventsFeedUpcoming = () => {
    const {upcoming} = useContext(EventsUpcomingContext);

    return (
        <div className={b()}>
            <Anchor id="upcoming" />
            <CardLayoutBlock colSizes={colSizes}>
                {upcoming.map((item) => (
                    <FeedCard key={item.slug} {...item} />
                ))}
            </CardLayoutBlock>
        </div>
    );
};

export default React.memo(EventsFeedUpcoming);
