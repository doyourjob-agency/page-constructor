import { __rest } from "tslib";
import React from 'react';
import { useUniqId } from '@gravity-ui/uikit';
import { CardBase, IconWrapper } from '../../components';
import { useTheme } from '../../context/theme';
import { IconPosition } from '../../models/constructor-items/sub-blocks';
import { block, getThemedValue } from '../../utils';
import Content from '../Content/Content';
import './BasicCard.css';
const b = block('basic-card');
const BasicCard = (props) => {
    const { title, text, icon, additionalInfo, links, list, buttons, iconPosition = IconPosition.Top, controlPosition = 'content' } = props, cardParams = __rest(props, ["title", "text", "icon", "additionalInfo", "links", "list", "buttons", "iconPosition", "controlPosition"]);
    const titleId = useUniqId();
    const descriptionId = useUniqId();
    const areControlsInFooter = controlPosition === 'footer';
    const theme = useTheme();
    const themedIcon = getThemedValue(icon, theme);
    return (React.createElement(CardBase, Object.assign({ className: b(), contentClassName: b('content') }, cardParams, { extraProps: { 'aria-describedby': descriptionId, 'aria-labelledby': titleId } }),
        React.createElement(CardBase.Content, null,
            React.createElement(IconWrapper, { icon: themedIcon ? { value: themedIcon, position: iconPosition } : undefined, className: b('wrapper') },
                React.createElement(Content, { title: title, titleId: titleId, text: text, textId: descriptionId, additionalInfo: additionalInfo, links: links, list: list, buttons: buttons, size: "s", colSizes: { all: 12, md: 12 }, controlPosition: areControlsInFooter ? 'bottom' : 'default' })))));
};
export default React.memo(BasicCard);
