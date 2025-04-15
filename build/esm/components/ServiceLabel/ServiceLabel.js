import React from 'react';
import { block } from '../../utils';
import ServiceIcon from '../ServiceIcon/ServiceIcon';
import './ServiceLabel.css';
const b = block('service-label');
const ServiceLabel = ({ name, slug }) => (React.createElement("div", { className: b() },
    React.createElement("div", { className: b('wrap'), "aria-hidden": "true" },
        React.createElement(ServiceIcon, { name: slug, size: 8 })),
    React.createElement("span", { className: b('name') },
        React.createElement("span", null, name))));
export default ServiceLabel;
