import React, {useContext} from 'react';

import {CardLayoutBlock} from '../..';
import {Anchor, InfiniteScroll} from '../../components';
import {EventsRecentContext} from '../../context/eventsContext';
import {IrEventsFeedRecentBlockProps} from '../../models';
import {AttachmentCard} from '../../sub-blocks';
import {block} from '../../utils';

import {i18n} from './i18n';

import './IrEventsFeedRecent.scss';

const b = block('ir-events-feed-recent-block');

const colSizes = {
    sm: 12,
    md: 6,
    lg: 6,
    xl: 4,
    all: 12,
};

export const IrEventsFeedRecent = ({label}: IrEventsFeedRecentBlockProps) => {
    const {recent, page, pageSize, onLoadMore} = useContext(EventsRecentContext);
    const itemsToShow = recent.slice(0, page * pageSize);
    const hasMore = page < Math.ceil(recent.length / pageSize);

    if (!recent || recent.length === 0) {
        return null;
    }

    return (
        <div className={b()}>
            <Anchor id="recent" />
            <CardLayoutBlock
                title={i18n('past_events')}
                titleClassName={b('title')}
                colSizes={colSizes}
            >
                {itemsToShow.map((item) => (
                    <AttachmentCard
                        key={item.slug}
                        title={item.title}
                        date={item.date}
                        time={item.info}
                        column
                        label={label}
                    />
                ))}
            </CardLayoutBlock>
            <InfiniteScroll hasMore={hasMore} onNext={onLoadMore} />
        </div>
    );
};

export default IrEventsFeedRecent;
