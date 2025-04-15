import React from 'react';
import { block, getQaAttrubutes } from '../../utils';
import Image from '../Image/Image';
import './BackgroundImage.css';
export const qaIdByDefault = 'background-image';
const b = block('storage-background-image');
const BackgroundImage = (props) => {
    const { children, src, desktop, className, imageClassName, style, hide, qa } = props;
    const qaAttributes = getQaAttrubutes(qa || qaIdByDefault);
    return (React.createElement("div", { className: b(null, className), style: style, "data-qa": qa || qaIdByDefault },
        (src || desktop) && !hide && (React.createElement(Image, Object.assign({}, props, { className: b('img', imageClassName), qa: qaAttributes.image }))),
        children && React.createElement("div", { className: b('container') }, children)));
};
export default BackgroundImage;
