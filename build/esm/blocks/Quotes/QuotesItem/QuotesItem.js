import React from 'react';
import { Button, Image } from '../../../components';
import { block } from '../../../utils';
import { i18n } from '../i18n';
import './QuotesItem.css';
const b = block('quotes-item');
export const QuotesItem = ({ theme = 'light', avatar, logo, name, description, quote, style = 'normal', buttonText, buttonUrl, }) => (React.createElement("div", { className: b({ theme }) },
    React.createElement("div", { className: b('header') },
        React.createElement("div", { className: b('author') },
            avatar && (React.createElement(Image, { className: b('author-avatar'), src: avatar, alt: i18n('avatar') })),
            React.createElement("div", { className: b('author-wrap') },
                name && React.createElement("div", { className: b('author-title') }, name),
                description && React.createElement("div", { className: b('author-text') }, description))),
        logo && React.createElement(Image, { className: b('logo'), src: logo, alt: i18n('logo') })),
    React.createElement("blockquote", { className: b('body', { style }) }, quote),
    buttonText && (React.createElement("div", { className: b('footer') },
        React.createElement(Button, { theme: theme === 'light' ? 'outlined' : 'outlined-contrast', text: buttonText, size: "xl", url: buttonUrl })))));
export default QuotesItem;
