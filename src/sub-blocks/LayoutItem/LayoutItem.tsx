import React, {useMemo} from 'react';

import {useUniqId} from '@gravity-ui/uikit';

import {FullscreenMedia, IconWrapper, Media, MetaInfo, Tag} from '../../components';
import {useTheme} from '../../context/theme';
import {ContentBlockProps, LayoutItemProps} from '../../models';
import {block, getThemedValue} from '../../utils';
import {mergeVideoMicrodata} from '../../utils/microdata';
import Content from '../Content/Content';

import {getLayoutItemLinks, hasFullscreen, showFullscreenIcon} from './utils';

import './LayoutItem.scss';

const b = block('layout-item');

const LayoutItem = ({
    title,
    afterTitle,
    summary,
    rightSpace = true,
    content: {links, ...content},
    metaInfo,
    media,
    border,
    fullscreen,
    icon,
    className,
    analyticsEvents,
    controlPosition = 'content',
    label,
    jumpOnHover,
}: LayoutItemProps) => {
    const normalizedLinks = useMemo(() => getLayoutItemLinks(links), [links]);
    const areControlsInFooter = controlPosition === 'footer';
    const theme = useTheme();
    const themedIcon = getThemedValue(icon, theme);

    const contentProps: ContentBlockProps = {
        controlPosition: areControlsInFooter ? 'bottom' : 'default',
        ...content,
        links: normalizedLinks,
        size: 's',
        colSizes: {all: 12, md: 12},
    };
    const titleId = useUniqId();
    const renderMedia = () => {
        if (!media) {
            return null;
        }
        const themedMedia = getThemedValue(media, theme);

        const mediaWithMicrodata = mergeVideoMicrodata(themedMedia, {
            name: typeof content.title === 'string' ? content.title : content.title?.text,
            description: content.text,
        });

        return fullscreen && hasFullscreen(themedMedia) ? (
            <FullscreenMedia showFullscreenIcon={showFullscreenIcon(themedMedia)}>
                {({
                    className: mediaClassName,
                    fullscreen: _fullscreen,
                    ...fullscreenMediaProps
                } = {}) => (
                    <Media
                        {...mediaWithMicrodata}
                        {...fullscreenMediaProps}
                        className={b('media', {border}, mediaClassName)}
                        analyticsEvents={analyticsEvents}
                    />
                )}
            </FullscreenMedia>
        ) : (
            <Media
                {...themedMedia}
                className={b('media', {border})}
                analyticsEvents={analyticsEvents}
            />
        );
    };
    return (
        <div className={b({jumpOnHover}, className)}>
            {label && <Tag {...label} />}
            {(title || afterTitle) && (
                <div className={b('wrap', {right: rightSpace})}>
                    {title && (
                        <span className={b('title', {size: title?.size || 'm'})}>
                            {title?.text}
                        </span>
                    )}
                    {afterTitle && (
                        <span className={b('afterTitle', {size: afterTitle?.size || 'm'})}>
                            {afterTitle?.text}
                        </span>
                    )}
                    {summary && <div className={b('summary')}>{summary}</div>}
                </div>
            )}
            {renderMedia()}
            {metaInfo && (
                <MetaInfo items={metaInfo} className={b('meta-info', {right: rightSpace})} />
            )}
            <div className={b('content', {'no-media': !media, right: rightSpace})}>
                <IconWrapper icon={themedIcon} className={b('wrapper')}>
                    <Content {...contentProps} titleId={titleId} />
                </IconWrapper>
            </div>
        </div>
    );
};

export default LayoutItem;
