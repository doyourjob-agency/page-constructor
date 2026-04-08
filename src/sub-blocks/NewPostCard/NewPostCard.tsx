import React from 'react';

import {Icon} from '@gravity-ui/uikit';

import {CardBase, HTML} from '../../components';
import {TimeIcon} from '../../icons/TimeIcon';
import {NewPostCardProps} from '../../models';
import {block} from '../../utils/cn';

import {i18n} from './i18n';

import './NewPostCard.scss';

const b = block('new-post-card');

const NewPostCard = ({
    topic,
    title,
    description,
    author,
    date,
    readingTime,
    image,
    url,
    pinned,
}: NewPostCardProps) => {
    return (
        <CardBase url={url} className={b('card', {pinned})} bodyClassName={b('body', {pinned})}>
            <CardBase.Header
                image={image}
                imageExtraProps={{'aria-hidden': 'true'}}
                className={b('header', {pinned})}
            />
            <CardBase.Content>
                <div className={b('wrap', {pinned})}>
                    <div className={b('tag')}>{topic}</div>
                    {title && (
                        <h2 className={b('title', {pinned})}>
                            <HTML>{title}</HTML>
                        </h2>
                    )}
                    {description && (
                        <HTML className={b('description', {pinned})}>{description}</HTML>
                    )}
                </div>
                {author && <div className={b('author')}>{author}</div>}
            </CardBase.Content>
            <CardBase.Footer className={b('footer')}>
                <div className={b('suggest-container')}>
                    {date && <div className={b('item')}>{date}</div>}
                    {readingTime && (
                        <div className={b('item')}>
                            <span className={b('icon')}>
                                <Icon data={TimeIcon} size={16} className={b('icon-color')} />
                            </span>
                            {i18n('reading_time', {count: readingTime})}
                        </div>
                    )}
                </div>
            </CardBase.Footer>
        </CardBase>
    );
};

export default React.memo(NewPostCard);
