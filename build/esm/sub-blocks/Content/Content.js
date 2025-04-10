import React from 'react';
import { useUniqId } from '@gravity-ui/uikit';
import { Buttons, ContentList, Links, Title, YFMWrapper } from '../../components';
import { Col } from '../../grid';
import { block } from '../../utils';
import { getQaAttrubutes } from '../../utils/blocks';
import './Content.css';
const b = block('content');
function getTextSize(size) {
    switch (size) {
        case 's':
            return 's';
        case 'l':
        default:
            return 'm';
    }
}
const Content = (props) => {
    const { title, subtitle, subtitleLinks, titleId: titleIdFromProps, text, textId, additionalInfo, size = 'l', links, buttons, colSizes = { all: 12, sm: 8 }, centered, theme, className, list, qa, controlPosition, } = props;
    const qaAttributes = getQaAttrubutes(qa, ['links', 'link', 'buttons', 'button', 'list']);
    const titleProps = !title || typeof title === 'string'
        ? { text: title, textSize: getTextSize(size) }
        : title;
    const hasTitle = Boolean(title);
    const defaultTitleId = useUniqId();
    const titleId = titleIdFromProps || defaultTitleId;
    return (React.createElement(Col, { className: b({ size, centered, theme, 'control-position': controlPosition }, className), reset: true, sizes: colSizes, qa: qaAttributes.container },
        title && (React.createElement(Title, { className: b('title'), title: titleProps, subtitle: subtitle, subtitleBold: true, colSizes: { all: 12 }, id: titleId })),
        subtitleLinks && (React.createElement(Links, { className: b('subtitle-links', { size }), size: size, links: subtitleLinks, titleId: titleId, qa: qaAttributes.links, linkQa: qaAttributes.link })),
        text && (React.createElement("div", { className: b('text', { ['without-title']: !hasTitle }) },
            React.createElement(YFMWrapper, { content: text, modifiers: { constructor: true, [`constructor-size-${size}`]: true }, id: textId }))),
        (list === null || list === void 0 ? void 0 : list.length) ? (React.createElement("div", { className: b('list') },
            React.createElement(ContentList, { list: list, size: size, qa: qaAttributes.list, theme: theme }))) : null,
        additionalInfo && (React.createElement("div", { className: b('notice') },
            React.createElement(YFMWrapper, { content: additionalInfo, modifiers: {
                    constructor: true,
                    'constructor-notice': true,
                    [`constructor-size-${size}`]: true,
                } }))),
        links && (React.createElement(Links, { className: b('links', { size }), size: size, links: links, titleId: titleId, qa: qaAttributes.links, linkQa: qaAttributes.link })),
        buttons && (React.createElement(Buttons, { className: b('buttons', { size }), size: size, buttons: buttons, titleId: titleId, qa: qaAttributes.buttons, buttonQa: qaAttributes.button }))));
};
export default Content;
