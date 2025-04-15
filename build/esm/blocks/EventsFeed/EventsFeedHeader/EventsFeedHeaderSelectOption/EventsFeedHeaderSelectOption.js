import React from 'react';
import { block } from '../../../../utils';
import './EventsFeedHeaderSelectOption.css';
const b = block('events-feed-header-select-option');
export const EventsFeedHeaderSelectOption = ({ data }) => {
    return (React.createElement("div", { className: b() },
        React.createElement("span", null, data.content)));
};
export default EventsFeedHeaderSelectOption;
