import React, { useContext } from 'react';
import { useUniqId } from '@gravity-ui/uikit';
import { Button, HTML, Media, RouterLink } from '../../components';
import { getMediaImage } from '../../components/Media/Image/utils';
import YFMWrapper from '../../components/YFMWrapper/YFMWrapper';
import { HeaderContext } from '../../context/headerContext';
import { MobileContext } from '../../context/mobileContext';
import { useTheme } from '../../context/theme';
import { Col, Grid, Row } from '../../grid';
import { block, getThemedValue } from '../../utils';
import BackButton from './BackButton/BackButton';
import Breadcrumbs from './Breadcrumbs/Breadcrumbs';
import HeaderTag from './HeaderTag/HeaderTag';
import HeaderTags from './HeaderTags/HeaderTags';
import { getImageSize, getTitleSizes, titleWithImageSizes } from './utils';
import './Header.css';
const b = block('header-block');
const Background = ({ background, isMobile }) => {
    const { url, image, fullWidthMedia, video, color } = background;
    const imageObject = url ? getMediaImage(url) : image;
    const renderMedia = !isMobile || (typeof image === 'object' && 'mobile' in image);
    return (React.createElement("div", { className: b('background', { media: true, 'full-width-media': fullWidthMedia }), style: { backgroundColor: color } }, renderMedia && (React.createElement(Media, Object.assign({}, background, { className: b('background-media'), imageClassName: b('image'), videoClassName: b('video'), isBackground: true, parallax: false, video: isMobile ? undefined : video, image: imageObject })))));
};
const FullWidthBackground = ({ background }) => (React.createElement("div", { className: b('background', { ['full-width']: true }), style: { backgroundColor: background === null || background === void 0 ? void 0 : background.color } }));
export const HeaderBlock = (props) => {
    const { title, topTags, bottomTags, overtitle, description, buttons, image, video, width = 's', imageSize, offset = 'default', background, theme: textTheme = 'light', verticalOffset = 'm', className, breadcrumbs, status, renderTitle, children, mediaView = 'full', } = props;
    const isMobile = useContext(MobileContext);
    const { backButton, blockTag } = useContext(HeaderContext);
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
    const fullWidth = (backgroundThemed === null || backgroundThemed === void 0 ? void 0 : backgroundThemed.fullWidth) || (backgroundThemed === null || backgroundThemed === void 0 ? void 0 : backgroundThemed.fullWidthMedia);
    const titleId = useUniqId();
    return (React.createElement("header", { className: b({
            ['has-media']: hasRightSideImage,
            ['full-width']: fullWidth,
            ['media-view']: mediaView,
            ['controls-view']: textTheme,
        }, className) },
        backgroundThemed && fullWidth && React.createElement(FullWidthBackground, { background: backgroundThemed }),
        backgroundThemed && React.createElement(Background, { background: backgroundThemed, isMobile: isMobile }),
        React.createElement(Grid, { containerClass: b('container-fluid') },
            React.createElement(Breadcrumbs, { breadcrumbs: breadcrumbs, theme: textTheme }),
            React.createElement(BackButton, { backButton: verticalOffset !== '0' && !breadcrumbs ? backButton : undefined, theme: textTheme }),
            React.createElement(Row, null,
                React.createElement(Col, { reset: true, className: b('content-wrapper') },
                    React.createElement(Row, null,
                        React.createElement(Col, { className: b('content', {
                                offset,
                                theme: textTheme,
                                'vertical-offset': curVerticalOffset,
                            }) },
                            React.createElement(HeaderTags, { theme: textTheme, tags: topTags, className: b('tags', { top: true }) }),
                            React.createElement(Col, { sizes: titleSizes, className: b('content-inner') },
                                overtitle && (React.createElement("div", { className: b('overtitle') },
                                    React.createElement(HTML, null, overtitle))),
                                React.createElement("h1", { className: b('title'), id: titleId },
                                    React.createElement(HeaderTag, { tag: blockTag }),
                                    status,
                                    renderTitle ? renderTitle(title) : React.createElement(HTML, null, title)),
                                description && (React.createElement("div", { className: b('description', { theme: textTheme }) },
                                    React.createElement(YFMWrapper, { content: description, modifiers: {
                                            constructor: true,
                                            constructorTheme: textTheme,
                                        } }))),
                                buttons && (React.createElement("div", { className: b('buttons'), "data-qa": "header-buttons" }, buttons.map((button, index) => (React.createElement(RouterLink, { href: button.url, key: index },
                                    React.createElement(Button, Object.assign({ key: index, className: b('button'), size: "xl", extraProps: Object.assign({ 'aria-describedby': titleId }, button.extraProps) }, button))))))),
                                children),
                            React.createElement(HeaderTags, { theme: textTheme, tags: bottomTags, className: b('tags', { bottom: true }) }))),
                    hasRightSideImage && (React.createElement(Media, { className: b('media', { [curImageSize]: true }), videoClassName: b('video'), imageClassName: b('image'), video: videoThemed, image: imageThemed })))))));
};
export default HeaderBlock;
