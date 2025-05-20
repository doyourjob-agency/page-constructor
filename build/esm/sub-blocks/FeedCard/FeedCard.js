import React from 'react';
import { CardBase, HTML, Image, YFMWrapper } from '../../components';
import { block } from '../../utils';
import './FeedCard.css';
const b = block('feed-card');
export const FeedCard = ({ url, image, title, type, description, info, place }) => (React.createElement(CardBase, { url: url, className: b() },
    React.createElement(CardBase.Header, { className: b('header') }, image && (React.createElement(Image, { src: image, className: b('image'), alt: "", extraProps: { 'aria-hidden': 'true' } }))),
    React.createElement(CardBase.Content, null,
        type && React.createElement("div", { className: b('type') }, type),
        title && (React.createElement("h3", { className: b('title') },
            React.createElement(HTML, null, title))),
        description && React.createElement(YFMWrapper, { className: b('description'), content: description })),
    React.createElement(CardBase.Footer, { className: b('footer') },
        React.createElement("div", { className: b('info') }, info),
        React.createElement("div", { className: b('place') }, place))));
export default React.memo(FeedCard);
