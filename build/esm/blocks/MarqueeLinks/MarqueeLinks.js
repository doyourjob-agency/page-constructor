import React, { useCallback } from 'react';
import { Link, Text } from '@gravity-ui/uikit';
import Marquee from 'react-fast-marquee';
import { HTML, Image } from '../../components';
import { block } from '../../utils';
import './MarqueeLinks.css';
const b = block('marquee-links-block');
export const MarqueeLinksBlock = ({ title, description, textAlign = 'left', speed = 10, items, }) => {
    const renderItem = useCallback((item) => {
        if (item.url) {
            return (React.createElement(Link, { key: item.src, href: item.url, extraProps: { tabIndex: -1 } },
                React.createElement(Image, { src: item.src, alt: "" })));
        }
        return React.createElement(Image, { src: item.src, key: item.src, alt: "" });
    }, []);
    if (!items.length)
        return null;
    return (React.createElement("div", { className: b({ [textAlign]: true }) },
        title && (React.createElement("div", { className: b('header') },
            React.createElement(Text, { variant: "display-2" }, title))),
        description && (React.createElement("div", { className: b('description') },
            React.createElement(Text, { variant: "body-2" },
                React.createElement(HTML, null, description)))),
        React.createElement(Marquee, { gradient: true, autoFill: true, speed: speed, className: b('items') }, items.map(renderItem))));
};
export default MarqueeLinksBlock;
