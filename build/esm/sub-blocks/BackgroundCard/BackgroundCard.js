import React from 'react';
import { useUniqId } from '@gravity-ui/uikit';
import { BackgroundImage, CardBase } from '../../components/';
import { useTheme } from '../../context/theme';
import { block, getThemedValue } from '../../utils';
import Content from '../Content/Content';
import './BackgroundCard.css';
const b = block('background-card');
const BackgroundCard = (props) => {
    const { url, title, text, border, background, backgroundPosition = 'left', paddingBottom, backgroundColor, additionalInfo, theme: cardTheme = 'default', links, buttons, analyticsEvents, urlTitle, controlPosition = 'content', list, } = props;
    const titleId = useUniqId();
    const theme = useTheme();
    const hasBackgroundColor = backgroundColor || cardTheme !== 'default';
    const borderType = hasBackgroundColor ? 'none' : border;
    const areControlsInFooter = !paddingBottom && controlPosition === 'footer';
    return (React.createElement(CardBase, { className: b({
            padding: paddingBottom,
            theme: cardTheme,
            bgPosition: backgroundPosition,
        }), contentClassName: b('content'), url: url, border: borderType, analyticsEvents: analyticsEvents, urlTitle: urlTitle },
        React.createElement(CardBase.Content, null,
            React.createElement(BackgroundImage, Object.assign({ className: b('image') }, getThemedValue(background, theme), { style: { backgroundColor } })),
            React.createElement(Content, { titleId: titleId, title: title, text: text, additionalInfo: additionalInfo, size: "s", theme: cardTheme, links: links, buttons: buttons, list: list, colSizes: { all: 12, md: 12 }, controlPosition: areControlsInFooter ? 'bottom' : 'default' }))));
};
export default BackgroundCard;
