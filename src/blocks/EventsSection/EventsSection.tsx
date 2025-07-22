import React, {useContext, useMemo} from 'react';

import {CardLayoutBlock} from '../..';
import {Anchor, EmptyPlug, InfiniteScroll} from '../../components';
import {EventsContext} from '../../context/eventsContext';
import {EventsSectionBlockProps} from '../../models';
import {AttachmentCard} from '../../sub-blocks';
import {block} from '../../utils';

import './EventsSection.scss';

const b = block('events-section-block');

const colSizes = {
    sm: 12,
    md: 6,
    lg: 6,
    xl: 4,
    all: 12,
};

export const EventsSection = ({typeKey, title, label, empty}: EventsSectionBlockProps) => {
    const data = useContext(EventsContext);
    const {items = [], page, pageSize, onLoadMore} = data[typeKey] || {};
    const hasInfiniteScroll = page !== undefined && pageSize !== undefined;
    const itemsToShow = useMemo(() => {
        if (!hasInfiniteScroll) {
            return items;
        }
        return items.slice(0, page * pageSize);
    }, [items, page, pageSize, hasInfiniteScroll]);

    return (
        <div className={b()}>
            <Anchor id={typeKey} />
            <CardLayoutBlock
                title={title}
                titleClassName={b('title')}
                colSizes={itemsToShow.length ? colSizes : {all: 12}}
            >
                {itemsToShow.length ? (
                    itemsToShow.map((item) => (
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
                    <EmptyPlug empty={empty} />
                )}
            </CardLayoutBlock>
            {hasInfiniteScroll && (
                <InfiniteScroll
                    hasMore={page < Math.ceil(items.length / pageSize)}
                    onNext={onLoadMore}
                />
            )}
        </div>
    );
};

export default EventsSection;
