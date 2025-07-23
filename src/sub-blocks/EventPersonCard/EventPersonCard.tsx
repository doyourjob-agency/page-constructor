import React from 'react';

import {Image, Links, Title, YFMWrapper} from '../../components';
import {getMediaImage} from '../../components/Media/Image/utils';
import {useTheme} from '../../context/theme';
import {useHoverImageThemeSupporting} from '../../hooks';
import {EventPersonCardProps, TitleItemProps} from '../../models';
import {block} from '../../utils';

import './EventPersonCard.scss';

const b = block('event-person-card');

const titleColSizes = {
    all: 12,
};

const EventPersonCard = (props: EventPersonCardProps) => {
    const {image, hoverImage, title, subtitle, text, links, theme} = props;

    const globalTheme = useTheme();
    const {imageData, onMouseEnter, onMouseLeave, imageMods} = useHoverImageThemeSupporting(
        100,
        globalTheme,
        image,
        hoverImage,
    );
    const imageProps = getMediaImage(imageData || '');

    const titleProps =
        !title || typeof title === 'string'
            ? ({text: title, textSize: 's'} as TitleItemProps)
            : title;

    return (
        <div className={b({theme})} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <div className={b('wrap-image')}>
                <Image className={b('image', imageMods)} {...imageProps} />
            </div>
            <div className={b('wrap')}>
                {title && (
                    <Title
                        className={b('title')}
                        title={titleProps}
                        subtitle={subtitle}
                        colSizes={titleColSizes}
                    />
                )}
                {links && <Links className={b('links')} size="s" links={links} />}
                {text && (
                    <div className={b('text')}>
                        <YFMWrapper
                            content={text}
                            modifiers={{constructor: true, ['constructor-size-m']: true}}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default EventPersonCard;
