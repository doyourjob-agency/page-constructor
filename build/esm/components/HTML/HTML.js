import React from 'react';
import { hasBlockTag } from '../../utils';
const HTML = ({ children, block = false, className, itemProp, id, qa, }) => {
    if (!children) {
        return null;
    }
    return React.createElement(block || hasBlockTag(children) ? 'div' : 'span', {
        dangerouslySetInnerHTML: { __html: children },
        className,
        itemProp,
        id,
        'data-qa': qa,
    });
};
export default HTML;
