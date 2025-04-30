import React from 'react';
import { block } from '../../../utils';
import './HeaderTag.css';
const b = block('header-block-tag');
export const HeaderTag = ({ tag }) => {
    if (!tag)
        return null;
    return React.createElement("div", { className: b() }, tag);
};
export default HeaderTag;
