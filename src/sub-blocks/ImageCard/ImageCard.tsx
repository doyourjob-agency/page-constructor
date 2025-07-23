import React from 'react';

import {Link, useUniqId} from '@gravity-ui/uikit';

import {Image, Tag} from '../../components';
import {getMediaImage} from '../../components/Media/Image/utils';
import {useTheme} from '../../context/theme';
import {GridColumnSizesType} from '../../grid';
import {useHoverImageThemeSupporting} from '../../hooks';
import {ImageCardDirection, ImageCardProps} from '../../models';
import {block} from '../../utils';
import Content from '../Content/Content';

import './ImageCard.scss';

const b = block('image-card');
const CONTENT_COL_SIZES: GridColumnSizesType = {all: 12, md: 12};

const ImageCard = (props: ImageCardProps) => {
    const {
        border = 'shadow',
        title,
        summary,
        text,
        image,
        hoverImage,
        enableImageBorderRadius = false,
        direction = ImageCardDirection.Direct,
        margins,
        backgroundColor,
        url,
        target,
        urlTitle,
        additionalInfo,
        links,
        buttons,
        list,
        theme: cardTheme = 'default',
        size = 's',
        controlPosition = 'content',
        label,
    } = props;

    const globalTheme = useTheme();
    const areControlsInFooter = controlPosition === 'footer';
    const hasContent = Boolean(text || title || buttons || links || list);
    const {imageData, onMouseEnter, onMouseLeave, imageMods} = useHoverImageThemeSupporting(
        100,
        globalTheme,
        image,
        hoverImage,
    );
    const imageProps = getMediaImage(imageData || '');

    const titleId = useUniqId();

    const cardContent = (
        <React.Fragment>
            {label && (
                <div className={b('label')}>
                    <Tag {...label} withoutMarginBottom />
                </div>
            )}
            <div className={b('image', {margins})}>
                <Image
                    className={b('image_inner', {radius: enableImageBorderRadius, ...imageMods})}
                    {...imageProps}
                />
            </div>
            {hasContent && (
                <div className={b('content')}>
                    <Content
                        titleId={titleId}
                        title={title}
                        summary={summary}
                        text={text}
                        links={links}
                        buttons={buttons}
                        list={list}
                        theme={cardTheme}
                        additionalInfo={additionalInfo}
                        size={size}
                        colSizes={CONTENT_COL_SIZES}
                        controlPosition={areControlsInFooter ? 'bottom' : 'default'}
                    />
                </div>
            )}
        </React.Fragment>
    );

    return url ? (
        <Link
            href={url}
            target={target}
            rel={target === '_blank' ? 'noopener noreferrer' : undefined}
            className={b({border, 'with-content': hasContent, direction})}
            title={urlTitle}
            style={{backgroundColor}}
            extraProps={{
                draggable: false,
                onDragStart: (e: React.DragEvent<HTMLAnchorElement>) => e.preventDefault(),
                onMouseEnter,
                onMouseLeave,
            }}
        >
            {cardContent}
        </Link>
    ) : (
        <div
            className={b({border, 'with-content': hasContent, direction})}
            style={{backgroundColor}}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {cardContent}
        </div>
    );
};

export default ImageCard;
