import React, { Fragment } from 'react';
import { block } from '../../utils';
import Image from '../Image/Image';
import { getMediaImage } from '../Media/Image/utils';
import './IconWrapper.css';
const b = block('icon-wrapper');
const IconWrapper = (props) => {
    const { icon, children, className } = props;
    if (!icon) {
        return React.createElement(Fragment, null, children);
    }
    const iconProps = getMediaImage(icon.value);
    const iconPosition = icon === null || icon === void 0 ? void 0 : icon.position;
    return (React.createElement("div", { className: b({ ['icon-position']: iconPosition }, className) },
        iconProps && (React.createElement(Image, Object.assign({}, iconProps, { containerClassName: b('icon-container'), className: b('icon', { ['icon-position']: iconPosition }) }))),
        React.createElement("div", { className: b('content', { ['icon-position']: iconPosition }) }, children)));
};
export default IconWrapper;
