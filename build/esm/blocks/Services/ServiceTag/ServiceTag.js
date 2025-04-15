import React from 'react';
import { block, capitalize } from '../../../utils';
import './ServiceTag.css';
const b = block('services-tag');
export const ServiceTag = ({ tag, small }) => {
    if (!tag)
        return null;
    const isNew = tag === 'new';
    return React.createElement("span", { className: b({ yellow: isNew, blue: !isNew, small }) }, capitalize(tag));
};
export default ServiceTag;
