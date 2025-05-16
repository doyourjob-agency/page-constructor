import React from 'react';
import { Col } from '../../../grid';
import { Content } from '../../../sub-blocks';
import { block } from '../../../utils';
import './TabsTextContent.css';
const b = block('tabs-block-text-content');
export const TabsTextContent = ({ centered, contentSize = 's', showMedia, data, imageProps, isReverse, }) => {
    if (!data) {
        return null;
    }
    const { media, title, text, additionalInfo, link, links, buttons, list } = data;
    return (React.createElement(Col, { sizes: { all: 12, md: showMedia ? 4 : 8 }, className: b({ centered: centered }) },
        React.createElement("div", { className: b('wrapper', {
                reverse: isReverse,
                'no-image': !(media || imageProps),
            }) },
            React.createElement(Content, { title: title, text: text, additionalInfo: additionalInfo, size: contentSize, list: list, links: [...(link ? [link] : []), ...(links || [])], buttons: buttons, colSizes: { all: 12 } }))));
};
export default TabsTextContent;
