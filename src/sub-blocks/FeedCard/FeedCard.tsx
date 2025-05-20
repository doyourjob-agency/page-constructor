import React from 'react';

import {CardBase, HTML, Image, YFMWrapper} from '../../components';
import {FeedCardProps} from '../../models';
import {block} from '../../utils';

import './FeedCard.scss';

const b = block('feed-card');

export const FeedCard = ({url, image, title, type, description, info, place}: FeedCardProps) => (
    <CardBase url={url} className={b()}>
        <CardBase.Header className={b('header')}>
            {image && (
                <Image
                    src={image}
                    className={b('image')}
                    alt=""
                    extraProps={{'aria-hidden': 'true'}}
                />
            )}
        </CardBase.Header>
        <CardBase.Content>
            {type && <div className={b('type')}>{type}</div>}
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

export default React.memo(FeedCard);
