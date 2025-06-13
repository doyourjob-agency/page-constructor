import React from 'react';

import {Image, Links, Title, YFMWrapper} from '../../components';
import {getMediaImage} from '../../components/Media/Image/utils';
import {useTheme} from '../../context/theme';
import {EventPersonCardProps, TitleItemProps} from '../../models';
import {block, getThemedValue} from '../../utils';

import './EventPersonCard.scss';

const b = block('event-person-card');

const titleColSizes = {
    all: 12,
};

const EventPersonCard = (props: EventPersonCardProps) => {
    const {image, title, text, links, theme} = props;

    const globalTheme = useTheme();
    const themedImage = getThemedValue(image, globalTheme);
    const imageProps = getMediaImage(themedImage);

    const titleProps =
        !title || typeof title === 'string'
            ? ({text: title, textSize: 's'} as TitleItemProps)
            : title;

    return (
        <div className={b({theme})}>
            <div className={b('wrap-image')}>
                <Image className={b('image')} {...imageProps} />
            </div>
            <div className={b('wrap')}>
                {title && (
                    <Title className={b('title')} title={titleProps} colSizes={titleColSizes} />
                )}
                {text && (
                    <div className={b('text')}>
                        <YFMWrapper
                            content={text}
                            modifiers={{constructor: true, ['constructor-size-m']: true}}
                        />
                    </div>
                )}
                {links && <Links className={b('links')} size="s" links={links} />}
            </div>
        </div>
    );
};

export default EventPersonCard;
