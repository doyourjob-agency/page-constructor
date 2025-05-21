import React from 'react';

import {Icon, useUniqId} from '@gravity-ui/uikit';

import {CardBase, HTML, YFMWrapper} from '../../components';
import {TimeIcon} from '../../icons/TimeIcon';
import {PostCardProps, PostCardSize, PostCardTitleHeadingLevel} from '../../models';
import {block} from '../../utils/cn';

import {i18n} from './i18n';

import './PostCard.scss';

const ICON_SIZE = 16;

const b = block('post-card');

const PostCard = ({
    title,
    date,
    readingTime,
    image,
    description,
    tags,
    url,
    fullWidth = false,
    size = PostCardSize.SMALL,
    showTag = false,
    titleHeadingLevel = PostCardTitleHeadingLevel.H3,
}: PostCardProps) => {
    const titleId = useUniqId();
    const descriptionId = useUniqId();
    const isTagVisible = showTag && tags?.[0]?.name;

    return (
        <CardBase url={url} className={b('card', {fullWidth})}>
            <CardBase.Header
                image={image}
                imageExtraProps={{'aria-hidden': 'true'}}
                className={b('header', {fullWidth})}
            >
                <div className={b('image-container')} data-qa="blog-suggest-header" />
            </CardBase.Header>
            <CardBase.Content>
                {isTagVisible && <div className={b('tag', {size})}>{tags[0].name}</div>}
                {title &&
                    React.createElement(
                        titleHeadingLevel,
                        {className: b('title', {size})},
                        <span>
                            <HTML id={titleId}>{title}</HTML>
                        </span>,
                    )}
                {description && (
                    <YFMWrapper
                        className={b('description')}
                        content={description}
                        modifiers={{
                            blog: size === 'm',
                            blogCard: true,
                        }}
                        id={descriptionId}
                    />
                )}
            </CardBase.Content>
            <CardBase.Footer>
                <div className={b('container')}>
                    <div className={b('suggest-container')}>
                        {date && <div className={b('item', {size})}>{date}</div>}
                        {readingTime && (
                            <div className={b('item', {size})}>
                                <span className={b('icon')}>
                                    <Icon
                                        data={TimeIcon}
                                        size={ICON_SIZE}
                                        className={b('icon-color')}
                                    />
                                </span>
                                {i18n('reading_time', {count: readingTime})}
                            </div>
                        )}
                    </div>
                </div>
            </CardBase.Footer>
        </CardBase>
    );
};

export default React.memo(PostCard);
