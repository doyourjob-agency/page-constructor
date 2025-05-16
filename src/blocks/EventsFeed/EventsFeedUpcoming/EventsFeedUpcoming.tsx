import React, {useContext} from 'react';

import {CardLayoutBlock} from '../..';
import {Anchor} from '../../../components';
import {EventsContext} from '../../../context/eventsContext';
import {block} from '../../../utils';

import EventsFeedCard from './../EventsFeedCard/EventsFeedCard';

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
    const {upcoming} = useContext(EventsContext);

    return (
        <div className={b()}>
            <Anchor id="upcoming" />
            <CardLayoutBlock colSizes={colSizes}>
                {upcoming.map((item) => (
                    <EventsFeedCard key={item.slug} {...item} />
                ))}
            </CardLayoutBlock>
        </div>
    );
};

export default EventsFeedUpcoming;
