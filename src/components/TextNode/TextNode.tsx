import React from 'react';

import {block} from '../../utils';

import './TextNode.scss';

const b = block('tag');

export interface TextNodeProps {
    children?: string;
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div';
}

const TextNode = ({children, tag = 'div'}: TextNodeProps) => {
    if (!children) {
        return null;
    }

    return React.createElement(tag, {
        dangerouslySetInnerHTML: {__html: children},
        className: b(),
    });
};

export default TextNode;
