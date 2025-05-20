import React from 'react';
import { BackgroundImage } from '../../components';
import { Grid } from '../../grid';
import { block } from '../../utils';
import Controls from './Controls/Controls';
import './FeedHeader.css';
const b = block('feed-header');
export const FeedHeader = ({ title, image }) => {
    return (React.createElement("div", { className: b() },
        React.createElement(Grid, { className: b('content') },
            image && React.createElement(BackgroundImage, { src: image, className: b('background') }),
            React.createElement(Controls, { title: title }))));
};
export default React.memo(FeedHeader);
