import React from 'react';
import { block } from '../../../utils';
import { i18n } from './i18n';
import './Iframe.css';
const b = block('media-component-iframe');
const Iframe = (props) => {
    const { iframe, margins = true } = props;
    const { height = 400, src, width, name, title } = iframe;
    return iframe ? (React.createElement("div", { className: b({ margins }), style: { height } },
        React.createElement("iframe", { className: b('item'), loading: "lazy", title: title || i18n('iframe-title'), frameBorder: 0, src: src, width: width, height: height, name: name }))) : null;
};
export default Iframe;
