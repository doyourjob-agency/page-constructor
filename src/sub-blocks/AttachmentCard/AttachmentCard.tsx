import React from 'react';

import {CardBase, Image, Link, Title} from '../../components';
import {getMediaImage} from '../../components/Media/Image/utils';
import {useTheme} from '../../context/theme';
import {Theme, TitleItemProps} from '../../models';
import {
    AttachmentCardItemType,
    AttachmentCardProps,
} from '../../models/constructor-items/sub-blocks';
import {block, getThemedValue} from '../../utils';

import './AttachmentCard.scss';

const b = block('attachment-card');

interface AttachmentCardItemProps extends AttachmentCardItemType {
    theme: Theme;
}

const AttachmentCardItem = ({icon, name, link, target, theme}: AttachmentCardItemProps) => {
    const themedIcon = getThemedValue(icon, theme);
    const iconData = themedIcon && getMediaImage(themedIcon);
    return (
        <Link url={link} target={target} theme="normal" className={b('item')}>
            <Image className={b('item-icon')} {...iconData} />
            <div className={b('item-name')}>{name}</div>
        </Link>
    );
};

const AttachmentCard = ({title, date, items, theme, border}: AttachmentCardProps) => {
    const globalTheme = useTheme();
    const innerTheme = (theme || globalTheme) as Theme;

    const titleProps =
        !title || typeof title === 'string'
            ? ({text: title, textSize: 'm'} as TitleItemProps)
            : title;

    return (
        <CardBase
            className={b({theme: innerTheme})}
            contentClassName={b('content')}
            border={border}
        >
            <CardBase.Content>
                {title && <Title className={b('title')} title={titleProps} colSizes={{all: 12}} />}
                {date && <div className={b('date')}>{date}</div>}
            </CardBase.Content>
            <CardBase.Footer>
                {items?.map((item, index) => (
                    <AttachmentCardItem key={index} {...item} theme={innerTheme} />
                ))}
            </CardBase.Footer>
        </CardBase>
    );
};

export default React.memo(AttachmentCard);
