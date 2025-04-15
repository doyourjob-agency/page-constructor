import { __rest } from "tslib";
import React from 'react';
import { Link } from '@gravity-ui/uikit';
import { CardBase, HTML, Links, YFMWrapper } from '../../components';
import ServiceLabel from '../../components/ServiceLabel/ServiceLabel';
import { block } from '../../utils';
import { i18n } from './i18n';
import './Card.css';
const b = block('card');
const Card = (_a) => {
    var { header, text, service } = _a, props = __rest(_a, ["header", "text", "service"]);
    return (React.createElement(CardBase, Object.assign({}, props),
        React.createElement(CardBase.Header, { className: b('header'), image: header.image },
            React.createElement("h3", { className: b('title') },
                React.createElement(HTML, null, header.title))),
        React.createElement(CardBase.Content, null,
            React.createElement(YFMWrapper, { content: text || '', modifiers: { constructor: true, constructor_list_style: true } }),
            service && (React.createElement("div", { className: b('service') },
                React.createElement("span", { className: b('phrase') }, i18n('phrase')),
                React.createElement(Link, { href: `/services/${service.slug}` },
                    React.createElement(ServiceLabel, { slug: service.slug, name: service.name }))))),
        React.createElement(CardBase.Footer, null,
            React.createElement(Links, null))));
};
export default Card;
