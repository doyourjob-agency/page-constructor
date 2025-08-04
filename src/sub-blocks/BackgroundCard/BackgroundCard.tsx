import React from 'react';

import {useUniqId} from '@gravity-ui/uikit';

import {BackgroundImage, CardBase, Tag} from '../../components/';
import {getMediaImage} from '../../components/Media/Image/utils';
import {useTheme} from '../../context/theme';
import {BackgroundCardProps} from '../../models';
import {block, getThemedValue} from '../../utils';
import Content from '../Content/Content';

import './BackgroundCard.scss';

const b = block('background-card');

const BackgroundCard = (props: BackgroundCardProps) => {
    const {
        url,
        target,
        title,
        summary,
        text,
        border,
        background,
        hoverBackground,
        backgroundPosition = 'left',
        paddingBottom,
        backgroundColor,
        additionalInfo,
        theme: cardTheme = 'default',
        links,
        buttons,
        analyticsEvents,
        urlTitle,
        controlPosition = 'content',
        list,
        label,
    } = props;

    const titleId = useUniqId();

    const theme = useTheme();
    const hasBackgroundColor = backgroundColor || cardTheme !== 'default';
    const borderType = hasBackgroundColor ? 'none' : border;
    const areControlsInFooter = !paddingBottom && controlPosition === 'footer';

    const backgroundProps = getMediaImage(getThemedValue(background, theme) || '');
    const hoverBackgroundProps = getMediaImage(getThemedValue(hoverBackground, theme) || '');

    return (
        <CardBase
            className={b({
                padding: paddingBottom,
                theme: cardTheme,
                bgPosition: backgroundPosition,
            })}
            contentClassName={b('content')}
            url={url}
            target={target}
            border={borderType}
            analyticsEvents={analyticsEvents}
            urlTitle={urlTitle}
        >
            <CardBase.Content>
                <BackgroundImage
                    className={b('image')}
                    {...backgroundProps}
                    style={{backgroundColor}}
                />
                {hoverBackground && (
                    <BackgroundImage
                        className={b('image', {hover: true})}
                        {...hoverBackgroundProps}
                        style={{backgroundColor}}
                    />
                )}
                {label && <Tag {...label} />}
                <Content
                    className={b('data')}
                    titleId={titleId}
                    title={title}
                    summary={summary}
                    text={text}
                    additionalInfo={additionalInfo}
                    size="s"
                    theme={cardTheme}
                    links={links}
                    buttons={buttons}
                    list={list}
                    colSizes={{all: 12, md: 12}}
                    controlPosition={areControlsInFooter ? 'bottom' : 'default'}
                />
            </CardBase.Content>
        </CardBase>
    );
};

export default BackgroundCard;
