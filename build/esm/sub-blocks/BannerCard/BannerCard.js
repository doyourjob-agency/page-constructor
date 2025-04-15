import React from 'react';
import { BackgroundImage, Button, HTML, RouterLink, YFMWrapper } from '../../components';
import { useTheme } from '../../context/theme';
import { block, getThemedValue } from '../../utils';
import './BannerCard.css';
const b = block('banner-card');
export const BannerCard = (props) => {
    const { title, subtitle, button: { url, text, target, theme: buttonTheme = 'raised' } = {}, color, theme: textTheme = 'light', image, disableCompress, mediaView = 'full', } = props;
    const theme = useTheme();
    const contentStyle = {};
    if (color) {
        contentStyle.backgroundColor = getThemedValue(color, theme);
    }
    return (React.createElement("div", { className: b({ theme: textTheme, ['media-view']: mediaView }) },
        React.createElement("div", { className: b('content'), style: contentStyle },
            React.createElement("div", { className: b('info') },
                React.createElement("div", { className: b('text') },
                    React.createElement("h2", { className: b('title') },
                        React.createElement(HTML, null, title)),
                    subtitle && (React.createElement(YFMWrapper, { className: b('subtitle'), content: subtitle, modifiers: { constructor: true } }))),
                url && (React.createElement(RouterLink, { href: url },
                    React.createElement(Button, { className: b('button'), theme: buttonTheme, size: "xl", text: text !== null && text !== void 0 ? text : '', url: url, target: target })))),
            React.createElement(BackgroundImage, { className: b('image'), src: getThemedValue(image, theme), disableCompress: disableCompress }))));
};
export default BannerCard;
