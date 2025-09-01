import React, {useMemo} from 'react';

import {Link} from '@gravity-ui/uikit';

import {Image, Links, RouterLink, Title, YFMWrapper} from '../../components';
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
    const {url, target, image, hoverImage, title, subtitle, text, links, theme} = props;

    const globalTheme = useTheme();
    const imageProps = getMediaImage(getThemedValue(image, globalTheme) || '');
    const hoverImageProps = getMediaImage(getThemedValue(hoverImage, globalTheme) || '');

    const titleProps = useMemo(
        () =>
            !title || typeof title === 'string'
                ? ({text: title, textSize: 's'} as TitleItemProps)
                : title,
        [title],
    );

    const content = useMemo(
        () => (
            <React.Fragment>
                <div className={b('wrap-image')}>
                    <Image className={b('image')} {...imageProps} />
                    {hoverImage && (
                        <Image className={b('image', {hover: true})} {...hoverImageProps} />
                    )}
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
            </React.Fragment>
        ),
        [hoverImage, hoverImageProps, imageProps, links, subtitle, text, title, titleProps],
    );

    return url ? (
        <RouterLink href={url}>
            <Link
                href={url}
                target={target}
                rel={target === '_blank' ? 'noopener noreferrer' : undefined}
                className={b({theme})}
                extraProps={{
                    draggable: false,
                    onDragStart: (e: React.DragEvent<HTMLAnchorElement>) => e.preventDefault(),
                }}
            >
                {content}
            </Link>
        </RouterLink>
    ) : (
        <div className={b({theme})}>{content}</div>
    );
};

export default EventPersonCard;
