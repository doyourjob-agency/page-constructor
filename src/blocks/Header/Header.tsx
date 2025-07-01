import React, {useContext, useEffect, useMemo, useState} from 'react';

import {useUniqId} from '@gravity-ui/uikit';

import {Button, HTML, Media, RouterLink} from '../../components';
import {getMediaImage} from '../../components/Media/Image/utils';
import YFMWrapper from '../../components/YFMWrapper/YFMWrapper';
import {HeaderContext} from '../../context/headerContext';
import {MobileContext} from '../../context/mobileContext';
import {useTheme} from '../../context/theme';
import {Col, Grid, Row} from '../../grid';
import {
    ClassNameProps,
    HeaderBlockBackground,
    HeaderBlockProps,
    SwitchingTitleProps,
} from '../../models';
import {block, getThemedValue} from '../../utils';

import BackButton from './BackButton/BackButton';
import Breadcrumbs from './Breadcrumbs/Breadcrumbs';
import HeaderStock from './HeaderStock/HeaderStock';
import HeaderTag from './HeaderTag/HeaderTag';
import HeaderTags from './HeaderTags/HeaderTags';
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

const SwitchingTitle = (props: SwitchingTitleProps) => {
    const {text, switchingTime} = props;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [opacity, setOpacity] = useState(1);

    const texts = useMemo(() => {
        const deconstructText = (str: string): string[][] => {
            if (str.length == 0) return [['']];
            const fixedRegExp = new RegExp('\\[.*', 's');
            const fixedPart = str.replace(fixedRegExp, '');
            if (fixedPart == str) return [[fixedPart]];
            const switchingPartRegExp = new RegExp('\\][^/].*', 's');
            const switchingPart = str.slice(fixedPart.length + 1).replace(switchingPartRegExp, '');
            const switchingPartArr = switchingPart.replace(/[[\]]/g, '').split('/');
            const rest = str.slice(fixedPart.length + switchingPart.length + 2);
            return [[fixedPart], switchingPartArr, ...deconstructText(rest)];
        };
        return deconstructText(text);
    }, []);

    useEffect(() => {
        const intervalHandle = setInterval(() => {
            setOpacity(0);
            setTimeout(() => {
                setCurrentIndex((c) => (c + 1) % texts.reduce((acc, curr) => acc * curr.length, 1));
                setOpacity(1);
            }, 200);
        }, switchingTime);

        return () => clearInterval(intervalHandle);
    }, [texts, switchingTime]);

    return (
        <h1 className={`${b('title')} ${b('title--pre-wrap')}`}>
            {texts.map((text, index) => (
                <span
                    style={
                        text.length !== 1
                            ? {
                                  transition: 'opacity .2s',
                                  opacity: opacity,
                              }
                            : {}
                    }
                    key={index}
                >
                    {text[currentIndex % text.length]}
                </span>
            ))}
        </h1>
    );
};

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
                                        {title && (
                                            <h1
                                                style={switchingTitle ? {display: 'none'} : {}}
                                                className={b('title')}
                                                id={titleId}
                                            >
                                                <HeaderTag tag={blockTag} />
                                                {status}
                                                {renderTitle ? (
                                                    renderTitle(title)
                                                ) : (
                                                    <HTML>{title}</HTML>
                                                )}
                                            </h1>
                                        )}
                                        {switchingTitle && <SwitchingTitle {...switchingTitle} />}
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
