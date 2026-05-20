import React from 'react';

import {Link} from '@gravity-ui/uikit';

import {Image, RouterLink, Tag} from '../../components';
import {FeedPartnerProps} from '../../models';
import {block} from '../../utils';

import './FeedPartner.scss';

const b = block('feed-partner');

const FeedPartner = ({
    url,
    image,
    title,
    subtitle,
    className,
    tags,
    jumpOnHover,
}: FeedPartnerProps) => {
    return (
        <RouterLink href={url}>
            <Link href={url} className={b({jumpOnHover, border: 'line'}, className)}>
                {image && <Image className={b('image')} src={image} alt="logo" />}
                <div className={b('wrap')}>
                    {title && <div className={b('title')}>{title}</div>}
                    {subtitle && <div className={b('subtitle')}>{subtitle}</div>}
                </div>
                {tags && (
                    <div className={b('tags')}>
                        {tags.map((item, index) => (
                            <Tag key={index} text={item} />
                        ))}
                    </div>
                )}
            </Link>
        </RouterLink>
    );
};

export default FeedPartner;
