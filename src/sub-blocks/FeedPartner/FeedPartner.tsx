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
    imageScale,
    imageWidth,
    imageHeight,
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
    const styles = useMemo(() => {
        const style = {} as React.CSSProperties;
        if (imageScale) {
            const scale = imageScale / 100;
            if (imageWidth) style.width = `${imageWidth * scale}px`;
            if (imageHeight) style.height = `${imageHeight * scale}px`;
        }
        return style;
    }, [imageHeight, imageScale, imageWidth]);
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
                                src={image}
                                style={styles}
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
