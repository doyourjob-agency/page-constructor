import React from 'react';
import { block } from '../../../utils';
import './ServiceTag.css';
const b = block('services-tag');
export const ServiceTag = ({ tag, small }) => {
    if (!tag)
        return null;
    const capitalize = (str) => {
        return str[0].toUpperCase() + str.substring(1);
    };
    return (React.createElement("span", { className: b({ yellow: tag === 'new', blue: tag !== 'new', small }) }, capitalize(tag)));
};
export default ServiceTag;
