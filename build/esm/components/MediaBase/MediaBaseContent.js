import React from 'react';
import { Content } from '../../sub-blocks';
import { block } from '../../utils';
import './MediaBaseContent.css';
const b = block('media-base-content');
const MediaContent = (props) => {
    const { title, description, subtitle, subtitleLinks, button, links, buttons = [], additionalInfo, size = 'l', list, } = props;
    const allButtons = button ? [Object.assign(Object.assign({}, button), { size: 'xl' }), ...buttons] : buttons;
    return (React.createElement("div", { className: b() },
        React.createElement(Content, { title: title, text: description, subtitle: subtitle, subtitleLinks: subtitleLinks, links: links, theme: "default", buttons: allButtons, list: list, additionalInfo: additionalInfo, size: size, colSizes: { all: 12, md: 12 } })));
};
export default MediaContent;
