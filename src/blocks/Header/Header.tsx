import React, {useContext, useMemo, useRef} from 'react';

import {useUniqId} from '@gravity-ui/uikit';

import {BackgroundEffect, HTML, Media, UnicornScene} from '../../components';
import {getMediaImage} from '../../components/Media/Image/utils';
import TitleItem from '../../components/Title/TitleItem';
import {HeaderContext} from '../../context/headerContext';
import {MobileContext} from '../../context/mobileContext';
import {useTheme} from '../../context/theme';
import {Col, Grid, Row} from '../../grid';
import {
    ClassNameProps,
    HeaderBlockBackground,
    HeaderBlockProps,
    TitleItemProps,
} from '../../models';
import {block, getHeaderTag, getThemedValue} from '../../utils';

import BackButton from './BackButton/BackButton';
import Breadcrumbs from './Breadcrumbs/Breadcrumbs';
import HeaderButtons from './HeaderButtons/HeaderButtons';
import HeaderDescription from './HeaderDescription/HeaderDescription';
import HeaderStock from './HeaderStock/HeaderStock';
import HeaderTag from './HeaderTag/HeaderTag';
import HeaderTags from './HeaderTags/HeaderTags';
import SwitchingTitle from './SwitchingTitle/SwitchingTtitle';
import {useAdaptiveUnicornBackground} from './useAdaptiveUnicornBackground';
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

// eslint-disable-next-line complexity
export const HeaderBlock = (props: React.PropsWithChildren<HeaderBlockFullProps>) => {
    const {
        title,
        switchingTitle,
        topTags,
        bottomTags,
        overtitle,
        description,
        buttons,
        stock,
        stockPrice,
        stockShares,
        image,
        video,
        width = 's',
        imageSize,
        offset = 'default',
        background,
        theme: textTheme = 'light',
        verticalOffset = 'm',
        verticalOffsetTop,
        verticalOffsetBottom,
        className,
        breadcrumbs,
        status,
        renderTitle,
        children,
        mediaView = 'full',
        backgroundEffect,
        headerSpace,
        backLink,
        unicorn,
        unicornSdkUrl,
        unicornFallbackImage,
        unicornFallbackImageMobile,
        forceMobileImage = true,
    } = props;
    const isMobile = useContext(MobileContext);
    const {backButton, blockTag} = useContext(HeaderContext);
    const theme = useTheme();
    const hasRightSideImage = Boolean(image || video);
    const curImageSize = useMemo(() => imageSize || getImageSize(width), [imageSize, width]);
    const titleSizes = useMemo(
        () => (hasRightSideImage ? titleWithImageSizes(curImageSize) : getTitleSizes(width)),
        [curImageSize, hasRightSideImage, width],
    );
    const curVerticalOffset = useMemo(
        () => verticalOffset ?? (hasRightSideImage ? 'm' : verticalOffset),
        [hasRightSideImage, verticalOffset],
    );

    const backgroundThemed = useMemo(
        () => background && getThemedValue(background, theme),
        [background, theme],
    );
    const imageThemed = useMemo(() => image && getThemedValue(image, theme), [image, theme]);
    const videoThemed = useMemo(() => video && getThemedValue(video, theme), [theme, video]);
    const fullWidth = backgroundThemed?.fullWidth || backgroundThemed?.fullWidthMedia;
    const fallbackImage = isMobile
        ? unicornFallbackImageMobile || unicornFallbackImage
        : unicornFallbackImage || unicornFallbackImageMobile;
    const forceFallbackOnMobile = isMobile && forceMobileImage && Boolean(fallbackImage);
    const {
        backgroundRef,
        handleFallbackImageLoad,
        handleFallbackTransitionEnd,
        handleSceneLoad,
        isFallbackVisible,
        shouldMountScene,
        shouldPlayScene,
        showFallback,
    } = useAdaptiveUnicornBackground({
        enabled: Boolean(unicorn) && !forceFallbackOnMobile,
        fallbackAvailable: Boolean(fallbackImage),
    });
    const showFallbackImage = forceFallbackOnMobile || showFallback;
    const isFallbackImageVisible = forceFallbackOnMobile || isFallbackVisible;
    const shouldRenderScene = !forceFallbackOnMobile && shouldMountScene;
    const titleId = useUniqId();
    const headerRef = useRef<HTMLElement>(null);
    const hasBackground = Boolean(backgroundThemed || backgroundEffect);
    const backButtonItem = useMemo(() => {
        if (backLink) {
            return {link: backLink.url, text: backLink.title};
        }
        if (verticalOffset !== '0' && !breadcrumbs) {
            return backButton;
        }
        return undefined;
    }, [backButton, backLink, breadcrumbs, verticalOffset]);

    const {
        text,
        textSize = 'l',
        ...titleItemProps
    } = useMemo(
        () =>
            !title || typeof title === 'string'
                ? ({text: title, textSize: 'l'} as TitleItemProps)
                : {textSize: 'l', ...title},
        [title],
    );

    const titlePrefix = (
        <React.Fragment>
            <HeaderTag tag={blockTag} />
            {status}
        </React.Fragment>
    );

    return (
        <header
            ref={headerRef}
            className={b(
                {
                    ['has-media']: hasRightSideImage,
                    ['has-background']: hasBackground,
                    ['full-width']: fullWidth,
                    ['media-view']: mediaView,
                    ['controls-view']: textTheme,
                    ['header-space']: headerSpace,
                },
                className,
            )}
        >
            {backgroundThemed && fullWidth && <FullWidthBackground background={backgroundThemed} />}
            {backgroundThemed && <Background background={backgroundThemed} isMobile={isMobile} />}
            {backgroundEffect && backgroundEffect.firstSrc && backgroundEffect.secondSrc && (
                <BackgroundEffect {...backgroundEffect} attachRef={headerRef} />
            )}
            {unicorn && (
                <div
                    ref={backgroundRef}
                    className={b('background', {
                        unicorn: true,
                        'unicorn-fallback': showFallbackImage,
                    })}
                >
                    {showFallbackImage && fallbackImage && (
                        <picture
                            className={b('fallback', {visible: isFallbackImageVisible})}
                            onTransitionEnd={handleFallbackTransitionEnd}
                        >
                            {unicornFallbackImageMobile && (
                                <source
                                    media="(max-width: 768px)"
                                    srcSet={unicornFallbackImageMobile}
                                />
                            )}
                            <img
                                alt=""
                                aria-hidden="true"
                                className={b('fallback-image')}
                                onLoad={handleFallbackImageLoad}
                                src={fallbackImage}
                            />
                        </picture>
                    )}
                    {shouldRenderScene && (
                        <UnicornScene
                            jsonFilePath={unicorn}
                            onLoad={handleSceneLoad}
                            play={shouldPlayScene}
                            sdkUrl={unicornSdkUrl}
                        />
                    )}
                </div>
            )}
            <Grid containerClass={b('container-fluid')}>
                <Breadcrumbs breadcrumbs={breadcrumbs} theme={textTheme} />
                <BackButton backButton={backButtonItem} theme={textTheme} />
                <Row>
                    <Col reset className={b('content-wrapper')}>
                        <Row>
                            <Col
                                className={b('content', {
                                    offset,
                                    theme: textTheme,
                                    'vertical-offset': curVerticalOffset,
                                    'vertical-offset-top': verticalOffsetTop,
                                    'vertical-offset-bottom': verticalOffsetBottom,
                                })}
                            >
                                <HeaderTags
                                    theme={textTheme}
                                    tags={topTags}
                                    className={b('tags', {top: true})}
                                    sizes={titleSizes}
                                />
                                <Col sizes={titleSizes} className={b('content-inner')}>
                                    <div>
                                        {overtitle && (
                                            <div className={b('overtitle')}>
                                                <HTML>{overtitle}</HTML>
                                            </div>
                                        )}
                                        {switchingTitle || renderTitle ? (
                                            React.createElement(
                                                getHeaderTag(textSize),
                                                {
                                                    className: b('title', {
                                                        'pre-wrap': Boolean(switchingTitle),
                                                        size: textSize,
                                                    }),
                                                    id: titleId,
                                                },
                                                titlePrefix,
                                                switchingTitle ? (
                                                    <SwitchingTitle {...switchingTitle} />
                                                ) : (
                                                    renderTitle?.(text)
                                                ),
                                            )
                                        ) : (
                                            <TitleItem
                                                text={text}
                                                textSize={textSize}
                                                resetMargin
                                                className={b('title')}
                                                id={titleId}
                                                prefix={titlePrefix}
                                                {...titleItemProps}
                                            />
                                        )}
                                        <HeaderDescription
                                            className={b('description', {theme: textTheme})}
                                            description={description}
                                            theme={textTheme}
                                        />
                                        <HeaderButtons buttons={buttons} titleId={titleId} />
                                        {children}
                                    </div>
                                    {stock && (
                                        <HeaderStock
                                            type={stock}
                                            stockPrice={stockPrice}
                                            stockShares={stockShares}
                                            theme={textTheme}
                                        />
                                    )}
                                </Col>
                                <HeaderTags
                                    theme={textTheme}
                                    tags={bottomTags}
                                    className={b('tags', {bottom: true})}
                                    sizes={titleSizes}
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
