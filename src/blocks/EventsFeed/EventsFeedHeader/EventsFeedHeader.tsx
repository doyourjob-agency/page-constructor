import React from 'react';

import {BackgroundImage} from '../../../components';
import {Grid} from '../../../grid';
import {block} from '../../../utils';

import EventsFeedHeaderControls, {
    EventsFeedHeaderControlsProps,
} from './EventsFeedHeaderControls/EventsFeedHeaderControls';

import './EventsFeedHeader.scss';

const b = block('events-feed-header');

interface EventsFeedHeaderProps extends EventsFeedHeaderControlsProps {
    image?: string;
}

export const EventsFeedHeader = ({title, image}: EventsFeedHeaderProps) => {
    return (
        <div className={b()}>
            <Grid className={b('content')}>
                {image && <BackgroundImage src={image} className={b('background')} />}
                <EventsFeedHeaderControls title={title} />
            </Grid>
        </div>
    );
};

export default React.memo(EventsFeedHeader);
