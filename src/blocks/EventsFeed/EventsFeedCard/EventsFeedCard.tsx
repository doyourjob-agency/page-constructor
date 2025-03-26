import React from 'react';

import {CardBase, HTML, Image, YFMWrapper} from '../../../components';
import {block} from '../../../utils';

import './EventsFeedCard.scss';

const b = block('events-feed-card');

type EventsFeedCardProps = {
    slug: string;
    image?: string;
    title?: string;
    description?: string;
    info?: string;
    place?: string;
};

export const EventsFeedCard = ({
    slug,
    image,
    title,
    description,
    info,
    place,
}: EventsFeedCardProps) => (
    <CardBase key={slug} url={`/events/${slug}`} className={b()}>
        <CardBase.Header className={b('header')}>
            {image && <Image src={image} className={b('image')} alt="" aria-hidden="true" />}
        </CardBase.Header>
        <CardBase.Content>
            {title && (
                <h3 className={b('title')}>
                    <HTML>{title}</HTML>
                </h3>
            )}
            {description && <YFMWrapper className={b('description')} content={description} />}
        </CardBase.Content>
        <CardBase.Footer className={b('footer')}>
            <div className={b('info')}>{info}</div>
            <div className={b('place')}>{place}</div>
        </CardBase.Footer>
    </CardBase>
);

export default EventsFeedCard;
