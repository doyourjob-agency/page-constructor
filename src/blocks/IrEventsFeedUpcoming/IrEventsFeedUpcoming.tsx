import React, {useContext} from 'react';

import {CardLayoutBlock} from '../..';
import {Anchor} from '../../components';
import {EventsUpcomingContext} from '../../context/eventsContext';
import {IrEventsFeedUpcomingBlockProps} from '../../models';
import {AttachmentCard} from '../../sub-blocks';
import {block} from '../../utils';

import {i18n} from './i18n';

import './IrEventsFeedUpcoming.scss';

const b = block('ir-events-feed-upcoming-block');

const colSizes = {
    sm: 12,
    md: 6,
    lg: 6,
    xl: 4,
    all: 12,
};

export const IrEventsFeedUpcoming = ({label, empty}: IrEventsFeedUpcomingBlockProps) => {
    const {upcoming} = useContext(EventsUpcomingContext);

    return (
        <div className={b()}>
            <Anchor id="upcoming" />
            <CardLayoutBlock
                title={i18n('upcoming_events')}
                titleClassName={b('title')}
                colSizes={upcoming.length ? colSizes : {all: 12}}
            >
                {upcoming.length ? (
                    upcoming.map((item) => (
                        <AttachmentCard
                            key={item.slug}
                            url={item.url}
                            title={item.title}
                            date={item.date}
                            time={item.info}
                            column
                            label={label}
                        />
                    ))
                ) : (
                    <div className={b('empty')}>{empty}</div>
                )}
            </CardLayoutBlock>
        </div>
    );
};

export default IrEventsFeedUpcoming;
