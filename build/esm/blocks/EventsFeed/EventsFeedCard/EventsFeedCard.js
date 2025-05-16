import React from 'react';
import { CardBase, HTML, Image, YFMWrapper } from '../../../components';
import { block } from '../../../utils';
import './EventsFeedCard.css';
const b = block('events-feed-card');
export const EventsFeedCard = ({ slug, image, title, description, info, place, }) => (React.createElement(CardBase, { key: slug, url: `/events/${slug}`, className: b() },
    React.createElement(CardBase.Header, { className: b('header') }, image && React.createElement(Image, { src: image, className: b('image'), alt: "", "aria-hidden": "true" })),
    React.createElement(CardBase.Content, null,
        title && (React.createElement("h3", { className: b('title') },
            React.createElement(HTML, null, title))),
        description && React.createElement(YFMWrapper, { className: b('description'), content: description })),
    React.createElement(CardBase.Footer, { className: b('footer') },
        React.createElement("div", { className: b('info') }, info),
        React.createElement("div", { className: b('place') }, place))));
export default React.memo(EventsFeedCard);
