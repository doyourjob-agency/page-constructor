import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import groupBy from 'lodash/groupBy';
import { CardLayoutBlock } from '..';
import { Anchor } from '../../components';
import { EventsContext } from '../../context/eventsContext';
import { RouterContext } from '../../context/routerContext';
import { block, convertParsedUrlQueryToQuery, updateQueryCallback } from '../../utils';
import EventsFeedCard from './EventsFeedCard/EventsFeedCard';
import EventsFeedHeader from './EventsFeedHeader/EventsFeedHeader';
import { i18n } from './i18n';
import './EventsFeed.css';
const b = block('events-feed-block');
const colSizes = {
    sm: 12,
    md: 6,
    lg: 6,
    xl: 4,
    all: 12,
};
export const EventsFeedBlock = ({ image, title }) => {
    const [isHandleLoad, setIsHandleLoad] = useState(false);
    const { query } = useContext(RouterContext);
    const { events } = useContext(EventsContext);
    const [tempQuery, setTempQuery] = useState(convertParsedUrlQueryToQuery(query));
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
    const eventsFiltered = useMemo(() => (events === null || events === void 0 ? void 0 : events.filter((item) => (!(tempQuery === null || tempQuery === void 0 ? void 0 : tempQuery.search) ||
        `${item.title} ${item.description}`
            .toLocaleLowerCase()
            .includes(tempQuery.search.toLocaleLowerCase())) &&
        (!(tempQuery === null || tempQuery === void 0 ? void 0 : tempQuery.countries) ||
            (item.country && tempQuery.countries.split(',').includes(item.country))) &&
        (!(tempQuery === null || tempQuery === void 0 ? void 0 : tempQuery.types) || tempQuery.types.split(',').includes(item.type)))) || [], [events, tempQuery === null || tempQuery === void 0 ? void 0 : tempQuery.search, tempQuery === null || tempQuery === void 0 ? void 0 : tempQuery.countries, tempQuery === null || tempQuery === void 0 ? void 0 : tempQuery.types]);
    const { upcoming = [], recent = [] } = useMemo(() => {
        const { u = [], r = [] } = groupBy(eventsFiltered, (event) => {
            const now = new Date();
            if (event.date) {
                const eventDate = new Date(event.date);
                return now.getTime() < eventDate.getTime() ? 'u' : 'r';
            }
            return 'upcoming';
        });
        return {
            upcoming: u.sort((a, c) => new Date(a.dateStart).getTime() < new Date(c.dateStart).getTime() ? -1 : 1),
            recent: r.sort((a, c) => new Date(a.dateStart).getTime() < new Date(c.dateStart).getTime() ? 1 : -1),
        };
    }, [eventsFiltered]);
    useEffect(() => {
        if (!isHandleLoad) {
            setTempQuery(convertParsedUrlQueryToQuery(query));
        }
    }, [query, isHandleLoad]);
    const handleLoadData = useCallback((q) => {
        setIsHandleLoad(true);
        setTempQuery((prev) => (Object.assign(Object.assign({}, prev), q)));
        updateQueryCallback(q);
    }, []);
    return (React.createElement("div", null,
        React.createElement(EventsFeedHeader, { image: image, title: title, countries: countries, types: types, handleLoadData: handleLoadData, queryParams: tempQuery }),
        React.createElement("div", { className: b('wrap') },
            React.createElement(Anchor, { id: "upcoming" }),
            React.createElement(CardLayoutBlock, { colSizes: colSizes }, upcoming.map((item) => (React.createElement(EventsFeedCard, Object.assign({ key: item.slug }, item)))))),
        Boolean(recent.length) && (React.createElement("div", { className: b('wrap') },
            React.createElement(Anchor, { id: "recent" }),
            React.createElement(CardLayoutBlock, { title: i18n('recent_events'), colSizes: colSizes }, recent.map((item) => (React.createElement(EventsFeedCard, Object.assign({ key: item.slug }, item)))))))));
};
export default EventsFeedBlock;
