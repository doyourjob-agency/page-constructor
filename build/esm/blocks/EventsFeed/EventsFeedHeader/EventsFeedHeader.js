import React from 'react';
import { BackgroundImage } from '../../../components';
import { Grid } from '../../../grid';
import { block } from '../../../utils';
import EventsFeedHeaderControls from './EventsFeedHeaderControls/EventsFeedHeaderControls';
import './EventsFeedHeader.css';
const b = block('events-feed-header');
export const EventsFeedHeader = ({ title, online, types, image, handleLoadData, queryParams, }) => (React.createElement("div", { className: b() },
    React.createElement(Grid, { className: b('content') },
        image && React.createElement(BackgroundImage, { src: image, className: b('background') }),
        React.createElement(EventsFeedHeaderControls, { title: title, online: online, types: types, handleLoadData: handleLoadData, queryParams: queryParams }))));
export default EventsFeedHeader;
