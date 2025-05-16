import React from 'react';
import { AnimateBlock, HTML, Title } from '../../components/';
import Image from '../../components/Image/Image';
import { getMediaImage } from '../../components/Media/Image/utils';
import { useTheme } from '../../context/theme';
import { Col, Row } from '../../grid';
import { Content } from '../../sub-blocks';
import { block, getThemedValue } from '../../utils';
import './ExtendedFeatures.css';
const b = block('ExtendedFeaturesBlock');
const DEFAULT_SIZES = {
    all: 12,
    sm: 6,
    md: 4,
};
export const ExtendedFeaturesBlock = ({ title, description, items, colSizes = DEFAULT_SIZES, animated, }) => {
    const theme = useTheme();
    const itemTitleHeadingTag = title ? 'h3' : 'h2';
    return (React.createElement(AnimateBlock, { className: b(), animate: animated },
        React.createElement(Title, { title: title, subtitle: description, className: b('header') }),
        React.createElement("div", { className: b('items') },
            React.createElement(Row, null, items.map(({ title: itemTitle, text, list, link, links, label, icon, buttons, additionalInfo, }) => {
                const itemLinks = links || [];
                const iconThemed = icon && getThemedValue(icon, theme);
                const iconData = iconThemed && getMediaImage(iconThemed);
                if (link) {
                    itemLinks.push(link);
                }
                return (React.createElement(Col, { className: b('item'), key: text || itemTitle, sizes: colSizes },
                    iconData && (React.createElement("div", { className: b('icon-wrap'), "aria-hidden": true },
                        React.createElement(Image, Object.assign({}, iconData, { className: b('icon') })))),
                    React.createElement("div", { className: b('container') },
                        itemTitle &&
                            React.createElement(itemTitleHeadingTag, {
                                className: b('item-title'),
                            }, React.createElement(React.Fragment, null,
                                React.createElement(HTML, null, itemTitle),
                                label && (React.createElement("span", { className: b('item-label') }, label)))),
                        React.createElement(Content, { text: text, links: itemLinks, size: "s", list: list, colSizes: { all: 12, md: 12 }, buttons: buttons, additionalInfo: additionalInfo }))));
            })))));
};
export default ExtendedFeaturesBlock;
