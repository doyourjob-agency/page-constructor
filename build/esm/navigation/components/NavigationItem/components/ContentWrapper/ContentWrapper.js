import React, { Fragment, useMemo } from 'react';
import { Image } from '../../../../../components';
import { block } from '../../../../../utils';
import './ContentWrapper.css';
const b = block('content-wrapper');
export const ContentWrapper = ({ text, icon, iconSize }) => {
    const iconSizeStyle = useMemo(() => (iconSize ? { height: `${iconSize}px`, width: `${iconSize}px` } : {}), [iconSize]);
    return (React.createElement(Fragment, null,
        icon && typeof icon !== 'string' && (React.createElement(Image, Object.assign({ className: b('icon') }, icon, { style: iconSizeStyle }))),
        React.createElement("span", { className: b('text') }, text)));
};
