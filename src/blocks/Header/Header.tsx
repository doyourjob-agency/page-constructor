import React, {useContext, useMemo} from 'react';

import {useUniqId} from '@gravity-ui/uikit';

import {HTML, Media} from '../../components';
import {getMediaImage} from '../../components/Media/Image/utils';
import {HeaderContext} from '../../context/headerContext';
import {MobileContext} from '../../context/mobileContext';
import {useTheme} from '../../context/theme';
import {Col, Grid, Row} from '../../grid';
import {ClassNameProps, HeaderBlockBackground, HeaderBlockProps} from '../../models';
import {block, getThemedValue} from '../../utils';

import BackButton from './BackButton/BackButton';
import BackgroundEffect from './BackgroundEffect/BackgroundEffect';
import Breadcrumbs from './Breadcrumbs/Breadcrumbs';
import HeaderButtons from './HeaderButtons/HeaderButtons';
import HeaderDescription from './HeaderDescription/HeaderDescription';
import HeaderStock from './HeaderStock/HeaderStock';
import HeaderTag from './HeaderTag/HeaderTag';
import HeaderTags from './HeaderTags/HeaderTags';
import SwitchingTitle from './SwitchingTitle/SwitchingTtitle';
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
        className,
        breadcrumbs,
        status,
        renderTitle,
        children,
        mediaView = 'full',
        backgroundEffect = {},
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
            <BackgroundEffect {...backgroundEffect} />
            <Grid containerClass={b('container-fluid')}>
                <Breadcrumbs breadcrumbs={breadcrumbs} theme={textTheme} />
                <BackButton
                    backButton={verticalOffset !== '0' && !breadcrumbs ? backButton : undefined}
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
                                    sizes={titleSizes}
                                />
                                <Col sizes={titleSizes} className={b('content-inner')}>
                                    <div>
                                        {overtitle && (
                                            <div className={b('overtitle')}>
                                                <HTML>{overtitle}</HTML>
                                            </div>
                                        )}
                                        <h1
                                            className={b('title', {
                                                'pre-wrap': Boolean(switchingTitle),
                                            })}
                                            id={titleId}
                                        >
                                            <HeaderTag tag={blockTag} />
                                            {status}
                                            {switchingTitle ? (
                                                <SwitchingTitle {...switchingTitle} />
                                            ) : (
                                                <React.Fragment>
                                                    {renderTitle ? (
                                                        renderTitle(title)
                                                    ) : (
                                                        <HTML>{title}</HTML>
                                                    )}
                                                </React.Fragment>
                                            )}
                                        </h1>
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
