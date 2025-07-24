import React, {useMemo} from 'react';

import {CardBase, Image, Link, Tag, Title} from '../../components';
import {getMediaImage} from '../../components/Media/Image/utils';
import {useTheme} from '../../context/theme';
import {DocumentIcon, VideoIcon} from '../../icons';
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
    const renderIcon = useMemo(() => {
        switch (icon) {
            case 'document':
                return <DocumentIcon className={b('item-icon')} />;
            case 'video':
                return <VideoIcon className={b('item-icon')} />;
            default:
                return <Image className={b('item-icon')} {...iconData} />;
        }
    }, [icon, iconData]);
    return (
        <Link
            url={link}
            target={target}
            theme="normal"
            className={b('item')}
            extraProps={extraProps}
        >
            {renderIcon}
            <div className={b('item-name')}>{name}</div>
        </Link>
    );
};

const AttachmentCard = ({
    url,
    title,
    date,
    time,
    items = [],
    label,
    column,
    border,
}: AttachmentCardProps) => {
    const titleProps =
        !title || typeof title === 'string'
            ? ({text: title, textSize: 'm'} as TitleItemProps)
            : title;

    return (
        <CardBase url={url} className={b()} contentClassName={b('content')} border={border}>
            <CardBase.Content>
                {label && <Tag {...label} />}
                <div className={b('wrap', {column})}>
                    {title && <Title title={titleProps} colSizes={colSizes} />}
                    {date && (
                        <div className={b('date')}>
                            {date}
                            {time && (
                                <React.Fragment>
                                    <span className={b('dot')} />
                                    {time}
                                </React.Fragment>
                            )}
                        </div>
                    )}
                </div>
            </CardBase.Content>
            {Boolean(items.length) && (
                <CardBase.Footer className={b('footer')}>
                    <ul className={b('items')}>
                        {items?.map((item, index) => (
                            <li key={index}>
                                <AttachmentCardItem {...item} />
                            </li>
                        ))}
                    </ul>
                </CardBase.Footer>
            )}
        </CardBase>
    );
};

export default React.memo(AttachmentCard);
