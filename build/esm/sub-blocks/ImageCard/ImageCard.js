import React from 'react';
import { Link, useUniqId } from '@gravity-ui/uikit';
import { Image } from '../../components';
import { getMediaImage } from '../../components/Media/Image/utils';
import { useTheme } from '../../context/theme';
import { ImageCardDirection } from '../../models';
import { block, getThemedValue } from '../../utils';
import Content from '../Content/Content';
import './ImageCard.css';
const b = block('image-card');
const CONTENT_COL_SIZES = { all: 12, md: 12 };
const ImageCard = (props) => {
    const { border = 'shadow', title, text, image, enableImageBorderRadius = false, direction = ImageCardDirection.Direct, margins, backgroundColor, url, target, urlTitle, additionalInfo, links, buttons, list, theme: cardTheme = 'default', size = 's', controlPosition = 'content', } = props;
    const globalTheme = useTheme();
    const areControlsInFooter = controlPosition === 'footer';
    const hasContent = Boolean(text || title || buttons || links || list);
    const themedImage = getThemedValue(image, globalTheme);
    const imageProps = getMediaImage(themedImage);
    const titleId = useUniqId();
    const cardContent = (React.createElement(React.Fragment, null,
        React.createElement("div", { className: b('image', { margins }) },
            React.createElement(Image, Object.assign({ className: b('image_inner', { radius: enableImageBorderRadius }) }, imageProps))),
        hasContent && (React.createElement("div", { className: b('content') },
            React.createElement(Content, { titleId: titleId, title: title, text: text, links: links, buttons: buttons, list: list, theme: cardTheme, additionalInfo: additionalInfo, size: size, colSizes: CONTENT_COL_SIZES, controlPosition: areControlsInFooter ? 'bottom' : 'default' })))));
    return url ? (React.createElement(Link, { href: url, target: target, rel: target === '_blank' ? 'noopener noreferrer' : undefined, className: b({ border, 'with-content': hasContent, direction }), title: urlTitle, style: { backgroundColor }, extraProps: {
            draggable: false,
            onDragStart: (e) => e.preventDefault(),
        } }, cardContent)) : (React.createElement("div", { className: b({ border, 'with-content': hasContent, direction }), style: { backgroundColor } }, cardContent));
};
export default ImageCard;
