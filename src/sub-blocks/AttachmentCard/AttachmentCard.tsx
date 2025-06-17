import React, {useMemo} from 'react';

import {CardBase, Image, Link, Title} from '../../components';
import {getMediaImage} from '../../components/Media/Image/utils';
import {useTheme} from '../../context/theme';
import {TitleItemProps} from '../../models';
import {
    AttachmentCardItemType,
    AttachmentCardProps,
} from '../../models/constructor-items/sub-blocks';
import {block, getThemedValue} from '../../utils';

import './AttachmentCard.scss';

const colSizes = {
    all: 12,
};

const b = block('attachment-card');

const AttachmentCardItem = ({icon, name, link, download, target}: AttachmentCardItemType) => {
    const theme = useTheme();
    const themedIcon = getThemedValue(icon, theme);
    const iconData = themedIcon && getMediaImage(themedIcon);
    const extraProps = useMemo(() => ({download}), [download]);
    return (
        <Link
            url={link}
            target={target}
            theme="normal"
            className={b('item')}
            extraProps={extraProps}
        >
            <Image className={b('item-icon')} {...iconData} />
            <div className={b('item-name')}>{name}</div>
        </Link>
    );
};

const AttachmentCard = ({title, date, items, column, border}: AttachmentCardProps) => {
    const titleProps =
        !title || typeof title === 'string'
            ? ({text: title, textSize: 'm'} as TitleItemProps)
            : title;

    return (
        <CardBase className={b()} contentClassName={b('content', {column})} border={border}>
            <CardBase.Content>
                {title && <Title title={titleProps} colSizes={colSizes} />}
                {date && <div className={b('date')}>{date}</div>}
            </CardBase.Content>
            {items?.length && (
                <CardBase.Footer className={b('footer')}>
                    {items?.map((item, index) => (
                        <AttachmentCardItem key={index} {...item} />
                    ))}
                </CardBase.Footer>
            )}
        </CardBase>
    );
};

export default React.memo(AttachmentCard);
