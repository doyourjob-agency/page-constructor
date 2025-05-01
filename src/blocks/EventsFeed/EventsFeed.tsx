import React, {useCallback, useContext, useEffect, useMemo, useState} from 'react';

import groupBy from 'lodash/groupBy';

import {CardLayoutBlock} from '..';
import {Anchor} from '../../components';
import {EventsContext} from '../../context/eventsContext';
import {RouterContext} from '../../context/routerContext';
import {EventsFeedBlockProps} from '../../models';
import {Query, block, convertParsedUrlQueryToQuery, updateQueryCallback} from '../../utils';

import EventsFeedCard from './EventsFeedCard/EventsFeedCard';
import EventsFeedHeader from './EventsFeedHeader/EventsFeedHeader';
import {i18n} from './i18n';

import './EventsFeed.scss';

const b = block('events-feed-block');

const colSizes = {
    sm: 12,
    md: 6,
    lg: 6,
    xl: 4,
    all: 12,
};

export const EventsFeedBlock = ({image, title}: EventsFeedBlockProps) => {
    const [isHandleLoad, setIsHandleLoad] = useState(false);
    const {query} = useContext(RouterContext);
    const {events} = useContext(EventsContext);
    const [tempQuery, setTempQuery] = useState<{
        search?: string;
        countries?: string;
        types?: string;
    }>(convertParsedUrlQueryToQuery(query));
    const types = [...new Set(events.map((item) => item.type))]
        .sort((a, c) => (a > c ? 1 : -1))
        .map((item) => ({
            content: item,
            value: item,
        }));
    const countries = [...new Set(events.map((item) => item.country || ''))]
        .sort((a, c) => (a > c ? 1 : -1))
        .filter(Boolean)
        .map((item) => ({
            content: item,
            value: item,
        }));
    const eventsFiltered = useMemo(
        () =>
            events?.filter(
                (item) =>
                    (!tempQuery?.search ||
                        `${item.title} ${item.description}`
                            .toLocaleLowerCase()
                            .includes(tempQuery.search.toLocaleLowerCase())) &&
                    (!tempQuery?.countries ||
                        (item.country && tempQuery.countries.split(',').includes(item.country))) &&
                    (!tempQuery?.types || tempQuery.types.split(',').includes(item.type)),
            ) || [],
        [events, tempQuery?.search, tempQuery?.countries, tempQuery?.types],
    );

    const {upcoming = [], recent = []} = useMemo(() => {
        const {u = [], r = []} = groupBy(eventsFiltered, (event) => {
            const now = new Date();
            if (event.date) {
                const eventDate = new Date(event.date);
                return now.getTime() < eventDate.getTime() ? 'u' : 'r';
            }
            return 'upcoming';
        });
        return {
            upcoming: u.sort((a, c) =>
                new Date(a.dateStart).getTime() < new Date(c.dateStart).getTime() ? -1 : 1,
            ),
            recent: r.sort((a, c) =>
                new Date(a.dateStart).getTime() < new Date(c.dateStart).getTime() ? 1 : -1,
            ),
        };
    }, [eventsFiltered]);

    useEffect(() => {
        if (!isHandleLoad) {
            setTempQuery(convertParsedUrlQueryToQuery(query));
        }
    }, [query, isHandleLoad]);

    const handleLoadData = useCallback((q: Query) => {
        setIsHandleLoad(true);
        setTempQuery((prev) => ({...prev, ...q}));
        updateQueryCallback(q);
    }, []);

    return (
        <div>
            <EventsFeedHeader
                image={image}
                title={title}
                countries={countries}
                types={types}
                handleLoadData={handleLoadData}
                queryParams={tempQuery}
            />
            <div className={b('wrap')}>
                <Anchor id="upcoming" />
                <CardLayoutBlock colSizes={colSizes}>
                    {upcoming.map((item) => (
                        <EventsFeedCard key={item.slug} {...item} />
                    ))}
                </CardLayoutBlock>
            </div>
            {Boolean(recent.length) && (
                <div className={b('wrap')}>
                    <Anchor id="recent" />
                    <CardLayoutBlock title={i18n('recent_events')} colSizes={colSizes}>
                        {recent.map((item) => (
                            <EventsFeedCard key={item.slug} {...item} />
                        ))}
                    </CardLayoutBlock>
                </div>
            )}
        </div>
    );
};

export default EventsFeedBlock;
