import React, { Fragment, useContext } from 'react';
import { HTML, ToggleArrow } from '../';
import { LocationContext } from '../../context/locationContext';
import { MobileContext } from '../../context/mobileContext';
import { block, getHeaderTag, getLinkProps } from '../../utils';
import Anchor from '../Anchor/Anchor';
import './TitleItem.css';
const b = block('title-item');
export function getArrowSize(size, isMobile) {
    switch (size) {
        case 'xs':
            return 13;
        case 's':
            return 16;
        case 'm':
            return isMobile ? 22 : 24;
        case 'l':
            return isMobile ? 26 : 38;
        case 'xl':
            return isMobile ? 26 : 38;
        default:
            return 20;
    }
}
const TitleItem = (props) => {
    const isMobile = useContext(MobileContext);
    const { textSize = 'm', text, anchor, justify, url, onClick, custom, className, qa, resetMargin = true, urlTitle, } = props;
    const { hostname } = useContext(LocationContext);
    const textMarkup = (React.createElement(React.Fragment, null,
        React.createElement(HTML, { className: b('text') }, text),
        custom && (React.createElement(React.Fragment, null,
            "\u00A0",
            React.createElement("span", { className: b('custom') }, custom)))));
    let content;
    const insideClickableContent = (React.createElement("span", { className: b('wrapper') },
        textMarkup,
        "\u00A0",
        React.createElement(ToggleArrow, { className: b('arrow', { size: textSize }), size: getArrowSize(textSize, isMobile), type: 'horizontal', iconType: "navigation", open: false })));
    if (!url && !onClick) {
        content = textMarkup;
    }
    else if (url) {
        content = (React.createElement("a", Object.assign({ className: b('link'), href: url }, getLinkProps(url, hostname), { onClick: onClick, title: urlTitle }), insideClickableContent));
    }
    else if (onClick) {
        content = (React.createElement("button", { className: b('link'), onClick: onClick, title: urlTitle }, insideClickableContent));
    }
    return (React.createElement(Fragment, null,
        anchor && React.createElement(Anchor, { id: anchor, className: b('anchor') }),
        React.createElement(getHeaderTag(textSize), {
            className: b({ size: textSize, justify, 'reset-margin': resetMargin }, className),
            'data-qa': `${qa}-header`,
        }, content)));
};
export default TitleItem;
