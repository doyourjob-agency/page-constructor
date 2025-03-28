import React, {useContext} from 'react';

import {ArrowLeft} from '@gravity-ui/icons';
import {Button as ButtonKit, Icon, useUniqId} from '@gravity-ui/uikit';

import {Button, HTML, Media, RouterLink} from '../../components';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs/HeaderBreadcrumbs';
import {getMediaImage} from '../../components/Media/Image/utils';
import YFMWrapper from '../../components/YFMWrapper/YFMWrapper';
import {MobileContext} from '../../context/mobileContext';
import {PageHelperContext} from '../../context/pageHelperContext';
import {useTheme} from '../../context/theme';
import {Col, Grid, Row} from '../../grid';
import {
    ClassNameProps,
    HeaderBlockBackground,
    HeaderBlockProps,
    HeaderBreadCrumbsProps,
    TextTheme,
} from '../../models';
import {block, getThemedValue} from '../../utils';

import HeaderTags from './HeaderTags/HeaderTags';
import {i18n} from './i18n';
import {getImageSize, getTitleSizes, titleWithImageSizes} from './utils';

import './Header.scss';

const b = block('header-block');

type HeaderBlockFullProps = HeaderBlockProps & ClassNameProps;

interface BackgroundProps {
    background: HeaderBlockBackground;
    isMobile: boolean;
}

const Background = ({background, isMobile}: BackgroundProps) => {
    const {url, image, fullWidthMedia, video, color} = background;
    const imageObject = url ? getMediaImage(url) : image;
    const renderMedia = !isMobile || (typeof image === 'object' && 'mobile' in image);

    return (
        <div
            className={b('background', {media: true, 'full-width-media': fullWidthMedia})}
            style={{backgroundColor: color}}
        >
            {renderMedia && (
                <Media
                    {...background}
                    className={b('background-media')}
                    imageClassName={b('image')}
                    videoClassName={b('video')}
                    isBackground={true}
                    parallax={false}
                    video={isMobile ? undefined : video}
                    image={imageObject}
                />
            )}
        </div>
    );
};

interface FullWidthBackgroundProps {
    background: HeaderBlockBackground;
}

const FullWidthBackground = ({background}: FullWidthBackgroundProps) => (
    <div
        className={b('background', {['full-width']: true})}
        style={{backgroundColor: background?.color}}
    />
);

const BackButton = ({isSolutionPage, theme}: {isSolutionPage?: boolean; theme: TextTheme}) => {
    if (!isSolutionPage) return null;
    return (
        <Row>
            <Col>
                <ButtonKit
                    href="/solutions"
                    size="l"
                    view="flat-secondary"
                    className={b('back-link', {theme})}
                >
                    <Icon data={ArrowLeft} size={20} />
                    {i18n('all_solutions')}
                </ButtonKit>
            </Col>
        </Row>
    );
};

const Breadcrumbs = ({
    breadcrumbs,
    theme,
}: {
    breadcrumbs?: HeaderBreadCrumbsProps;
    theme: TextTheme;
}) => {
    if (!breadcrumbs) return null;
    return (
        <Row className={b('breadcrumbs')}>
            <Col>
                <HeaderBreadcrumbs {...breadcrumbs} theme={theme} />
            </Col>
        </Row>
    );
};

export const HeaderBlock = (props: React.PropsWithChildren<HeaderBlockFullProps>) => {
    const {
        title,
        topTags,
        bottomTags,
        overtitle,
        description,
        buttons,
        image,
        video,
        width = 's',
        imageSize,
        offset = 'default',
        background,
        theme: textTheme = 'light',
        verticalOffset = 'm',
        className,
        breadcrumbs,
        status,
        renderTitle,
        children,
        mediaView = 'full',
    } = props;
    const isMobile = useContext(MobileContext);
    const {isSolutionPage, headerBlockTag} = useContext(PageHelperContext);
    const theme = useTheme();
    const hasRightSideImage = Boolean(image || video);
    const curImageSize = imageSize || getImageSize(width);
    const titleSizes = hasRightSideImage ? titleWithImageSizes(curImageSize) : getTitleSizes(width);
    let curVerticalOffset = verticalOffset;

    if (hasRightSideImage && !verticalOffset) {
        curVerticalOffset = 'm';
    }

    const backgroundThemed = background && getThemedValue(background, theme);
    const imageThemed = image && getThemedValue(image, theme);
    const videoThemed = video && getThemedValue(video, theme);
    const fullWidth = backgroundThemed?.fullWidth || backgroundThemed?.fullWidthMedia;
    const titleId = useUniqId();

    return (
        <header
            className={b(
                {
                    ['has-media']: hasRightSideImage,
                    ['full-width']: fullWidth,
                    ['media-view']: mediaView,
                    ['controls-view']: textTheme,
                },
                className,
            )}
        >
            {backgroundThemed && fullWidth && <FullWidthBackground background={backgroundThemed} />}
            {backgroundThemed && <Background background={backgroundThemed} isMobile={isMobile} />}
            <Grid containerClass={b('container-fluid')}>
                <Breadcrumbs breadcrumbs={breadcrumbs} theme={textTheme} />
                <BackButton
                    isSolutionPage={isSolutionPage && verticalOffset !== '0' && !breadcrumbs}
                    theme={textTheme}
                />
                <Row>
                    <Col reset className={b('content-wrapper')}>
                        <Row>
                            <Col
                                className={b('content', {
                                    offset,
                                    theme: textTheme,
                                    'vertical-offset': curVerticalOffset,
                                })}
                            >
                                <HeaderTags
                                    theme={textTheme}
                                    tags={topTags}
                                    className={b('tags', {top: true})}
                                />
                                <Col sizes={titleSizes} className={b('content-inner')}>
                                    {overtitle && (
                                        <div className={b('overtitle')}>
                                            <HTML>{overtitle}</HTML>
                                        </div>
                                    )}
                                    <h1
                                        className={b('title')}
                                        id={titleId}
                                        data-tag={headerBlockTag}
                                    >
                                        {status}
                                        {renderTitle ? renderTitle(title) : <HTML>{title}</HTML>}
                                    </h1>
                                    {description && (
                                        <div className={b('description', {theme: textTheme})}>
                                            <YFMWrapper
                                                content={description}
                                                modifiers={{
                                                    constructor: true,
                                                    constructorTheme: textTheme,
                                                }}
                                            />
                                        </div>
                                    )}
                                    {buttons && (
                                        <div className={b('buttons')} data-qa="header-buttons">
                                            {buttons.map((button, index) => (
                                                <RouterLink href={button.url} key={index}>
                                                    <Button
                                                        key={index}
                                                        className={b('button')}
                                                        size="xl"
                                                        extraProps={{
                                                            'aria-describedby': titleId,
                                                            ...button.extraProps,
                                                        }}
                                                        {...button}
                                                    />
                                                </RouterLink>
                                            ))}
                                        </div>
                                    )}
                                    {children}
                                </Col>
                                <HeaderTags
                                    theme={textTheme}
                                    tags={bottomTags}
                                    className={b('tags', {bottom: true})}
                                />
                            </Col>
                        </Row>
                        {hasRightSideImage && (
                            <Media
                                className={b('media', {[curImageSize]: true})}
                                videoClassName={b('video')}
                                imageClassName={b('image')}
                                video={videoThemed}
                                image={imageThemed}
                            />
                        )}
                    </Col>
                </Row>
            </Grid>
        </header>
    );
};

export default HeaderBlock;
