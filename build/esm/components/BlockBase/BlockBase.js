import React from 'react';
import { Col } from '../../grid';
import { block } from '../../utils';
import Anchor from '../Anchor/Anchor';
import './BlockBase.css';
const b = block('block-base');
const BlockBase = (props) => {
    const { anchor, indent, backgroundFull, visible, hidden, children, className, resetPaddings, qa, } = props;
    const { top, bottom } = indent || (resetPaddings ? { top: '0', bottom: '0' } : { top: 'l', bottom: 'l' });
    const isBackgroundUrl = /^https?:\/\/[^\s/$.?#].[^\s]*$/i.test(backgroundFull || '');
    return (React.createElement(Col, { className: b({ ['reset-paddings']: resetPaddings, indentTop: top, indentBottom: bottom }, className), hidden: hidden, visible: visible, reset: true, qa: qa },
        anchor && React.createElement(Anchor, { id: anchor.url, className: b('anchor') }),
        backgroundFull && (React.createElement("div", { className: b('background-full', { top }), style: isBackgroundUrl
                ? { backgroundImage: `url(${backgroundFull})` }
                : { backgroundColor: backgroundFull } })),
        children));
};
export default BlockBase;
