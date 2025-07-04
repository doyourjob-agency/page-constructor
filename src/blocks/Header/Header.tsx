import React, {useContext} from 'react';

import {useUniqId} from '@gravity-ui/uikit';

import {Button, HTML, Media, RouterLink} from '../../components';
import {getMediaImage} from '../../components/Media/Image/utils';
import YFMWrapper from '../../components/YFMWrapper/YFMWrapper';
import {HeaderContext} from '../../context/headerContext';
import {MobileContext} from '../../context/mobileContext';
import {useTheme} from '../../context/theme';
import {Col, Grid, Row} from '../../grid';
import {ClassNameProps, HeaderBlockBackground, HeaderBlockProps} from '../../models';
import {block, getThemedValue} from '../../utils';

import BackButton from './BackButton/BackButton';
import Breadcrumbs from './Breadcrumbs/Breadcrumbs';
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
    } = props;
    const isMobile = useContext(MobileContext);
    const {backButton, blockTag} = useContext(HeaderContext);
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
