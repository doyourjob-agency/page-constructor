import React, {useMemo} from 'react';

import {Link} from '@gravity-ui/uikit';

import {Image, RouterLink} from '../../components';
import {FeedPartnerProps} from '../../models';
import {block} from '../../utils';

import './FeedPartner.scss';

const b = block('feed-partner');

const FeedPartner = ({
    url,
    label,
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
    const backgroundStyles = useMemo(() => ({background: background}), [background]);
    const imageData = useMemo(() => {
        if (!image) return {};
        if (typeof image === 'string') {
            return {src: image};
        }
        const style = {} as React.CSSProperties;
        if (image.width) style.width = `${image.width}px`;
        if (image.height) style.height = `${image.height}px`;
        if (image.vertical) {
            switch (image.vertical) {
                case 'center': {
                    style.alignSelf = 'center';
                    break;
                }
                case 'bottom': {
                    style.alignSelf = 'flex-end';
                    break;
                }
                case 'top':
                default:
                    style.alignSelf = 'flex-start';
            }
        }
        return {src: image.src, style};
    }, [image]);
    return (
        <RouterLink href={url}>
            <Link href={url} className={b({jumpOnHover, border: 'line'}, className)}>
                {background && <div className={b('background')} style={backgroundStyles} />}
                <div className={b('content')}>
                    <div className={b('head')}>
                        {image && (
                            <Image
                                className={b('image')}
                                containerClassName={b('container-image')}
                                {...imageData}
                                alt="logo"
                            />
                        )}
                        {level && (
                            <div className={b('level')} style={levelStyles}>
                                {level}
                            </div>
                        )}
                    </div>
                    <div className={b('wrap')}>
                        {label && <div className={b('label')}>{label}</div>}
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
