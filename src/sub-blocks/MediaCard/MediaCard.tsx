import React from 'react';

import {CardBase, Media, Tag} from '../../components';
import {MediaCardProps} from '../../models';
import {block} from '../../utils';

import './MediaCard.scss';

const b = block('MediaCard');

const MediaCard = ({border, analyticsEvents, label, ...mediaProps}: MediaCardProps) => (
    <CardBase
        className={b()}
        bodyClassName={b('body')}
        border={border}
        analyticsEvents={analyticsEvents}
    >
        <CardBase.Content>
            {label && (
                <div className={b('label')}>
                    <Tag {...label} withoutMarginBottom />
                </div>
            )}
            <Media {...mediaProps} />
        </CardBase.Content>
    </CardBase>
);

export default MediaCard;
