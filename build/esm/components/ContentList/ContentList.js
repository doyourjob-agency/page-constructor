import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { block } from '../../utils';
import { getQaAttrubutes } from '../../utils/blocks';
import YFMWrapper from '../YFMWrapper/YFMWrapper';
import ItemIcon from './ContentListItemIcon';
import './ContentList.css';
const b = block('content-list');
function getHeadingLevel(size) {
    switch (size) {
        case 's':
            return 'h4';
        case 'l':
        default:
            return 'h3';
    }
}
const ContentList = ({ list, size = 'l', qa, theme }) => {
    const qaAttributes = getQaAttrubutes(qa, ['image', 'title', 'text']);
    return (React.createElement("div", { className: b({ size, theme }), "data-qa": qa }, list === null || list === void 0 ? void 0 : list.map((item) => {
        const { icon, title, text } = item;
        return (React.createElement("div", { className: b('item', { 'without-title': !title }), key: uuidv4() },
            React.createElement(ItemIcon, { icon: icon, className: b('icon'), qa: qaAttributes.image }),
            React.createElement("div", null,
                title &&
                    React.createElement(getHeadingLevel(size), { className: b('title'), 'data-qa': qaAttributes.title }, React.createElement(YFMWrapper, { content: title, modifiers: { constructor: true } })),
                text && (React.createElement(YFMWrapper, { className: b('text'), content: text, modifiers: { constructor: true }, qa: qaAttributes.text })))));
    })));
};
export default ContentList;
