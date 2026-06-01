import React from 'react';

import {Image} from '../../components';
import {NewsCardProps} from '../../models';
import {block} from '../../utils';

import './NewsCard.scss';

const b = block('news-card');

const NewsCard = ({image, square, links, text}: NewsCardProps) => {
    return (
        <div className={b({square})}>
            <Image className={b('image')} src={image} alt="image" />
            <div className={b('content')}>
                <div className={b('text')}>{text}</div>
                {links?.length ? (
                    <div className={b('links')}>
                        {links?.map((item, index) => (
                            <a
                                className={b('link')}
                                href={item.url}
                                key={index}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    className={b('icon')}
                                    containerClassName={b('icon-container')}
                                    src={item.icon}
                                    alt="icon"
                                />
                            </a>
                        ))}
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default NewsCard;
