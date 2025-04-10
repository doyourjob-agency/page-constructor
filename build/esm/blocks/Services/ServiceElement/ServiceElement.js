import React, { useContext, useEffect, useState } from 'react';
import { Link } from '@gravity-ui/uikit';
import { CardBase, HTML } from '../../../components';
import ServiceIcon from '../../../components/ServiceIcon/ServiceIcon';
import { ServicesContext } from '../../../context/servicesContext';
import { Col } from '../../../grid';
import { block } from '../../../utils';
import ServiceTag from '../ServiceTag/ServiceTag';
import { i18n } from '../i18n';
import './ServiceElement.css';
const b = block('services-element');
export const ServiceElement = ({ service, showCards, serviceLinkType }) => {
    const [notPrerender, setNotPrerender] = useState(false);
    const { icons } = useContext(ServicesContext);
    const data = (service === null || service === void 0 ? void 0 : service.slug) ? icons[service.slug] : '';
    useEffect(() => setNotPrerender(true), []);
    if (!service)
        return null;
    const description = service.description || '';
    // const description = replaceStringTrademark(service.description || '');
    return (React.createElement(Col, { key: service === null || service === void 0 ? void 0 : service.id, sizes: { all: 12, sm: 6, lg: 4 }, className: b({ card: showCards }) }, showCards ? (React.createElement(CardBase, { className: b('card') },
        React.createElement(CardBase.Content, null,
            React.createElement("a", { href: service.url || undefined, className: b('card-link'), "aria-label": service.name }),
            React.createElement("div", { className: b('card-content') },
                React.createElement("div", { className: b('upper-content') },
                    React.createElement("div", { className: b('logo-tag') },
                        data && (React.createElement("div", { className: b('logo'), "aria-hidden": "true" },
                            React.createElement(ServiceIcon, { name: service.slug }))),
                        React.createElement(ServiceTag, { tag: service.tag })),
                    React.createElement("div", { className: b('name') }, service.name),
                    React.createElement(HTML, { className: b('description') }, description)),
                React.createElement("div", { className: b('lower-links') },
                    notPrerender && service.docUrl && (React.createElement(Link, { view: "secondary", href: service.docUrl }, i18n('doc'))),
                    notPrerender && service.pricesUrl && (React.createElement(Link, { href: service.pricesUrl }, i18n('price')))))))) : (React.createElement(Link, { className: b('price-item-layout'), href: (serviceLinkType === 'price' ? service.pricesUrl : service.docUrl) || '' },
        React.createElement("div", { className: b('price-item-icon'), "aria-hidden": "true" },
            React.createElement(ServiceIcon, { name: service.slug })),
        React.createElement("div", null,
            React.createElement("div", { className: b('price-upper-row') },
                React.createElement("span", null, service.name),
                "\u00A0",
                React.createElement(ServiceTag, { tag: service.tag, small: true })),
            React.createElement(HTML, { className: b('price-lower-row') }, description))))));
};
export default ServiceElement;
