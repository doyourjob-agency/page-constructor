import React, {useMemo} from 'react';

import {Link} from '@gravity-ui/uikit';

import {Image, RouterLink} from '../../components';
import {FeedPartnerProps} from '../../models';
import {block} from '../../utils';

import './FeedPartner.scss';

const b = block('feed-partner');

const FeedPartner = ({
    url,
    type,
    level,
    levelColorText,
    levelColorBackground,
    background,
    image,
    title,
    subtitle,
    className,
    tags,
    jumpOnHover,
}: FeedPartnerProps) => {
    const levelStyles = useMemo(
        () => ({'background-color': levelColorBackground, color: levelColorText}),
        [levelColorBackground, levelColorText],
    );
    return (
        <RouterLink href={url}>
            <Link href={url} className={b({jumpOnHover, border: 'line'}, className)}>
                {background && (
                    <Image
                        className={b('background-image')}
                        containerClassName={b('background')}
                        src={background}
                        alt="background"
                    />
                )}
                <div className={b('content')}>
                    <div className={b('head')}>
                        {image && <Image className={b('image')} src={image} alt="logo" />}
                        {level && (
                            <div className={b('level')} style={levelStyles}>
                                {level}
                            </div>
                        )}
                    </div>
                    <div className={b('wrap')}>
                        {type && <div className={b('type')}>{type}</div>}
                        {title && <div className={b('title')}>{title}</div>}
                        {subtitle && <div className={b('subtitle')}>{subtitle}</div>}
                    </div>
                    {tags && (
                        <div className={b('tags')}>
                            {tags.map((item, index) => (
                                <div key={index} className={b('tag')}>
                                    {item}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </Link>
        </RouterLink>
    );
};

export default FeedPartner;
