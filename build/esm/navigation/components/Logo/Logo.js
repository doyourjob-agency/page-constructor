import { __rest } from "tslib";
import React, { Fragment, useContext } from 'react';
import { Image } from '../../../components';
import { getMediaImage } from '../../../components/Media/Image/utils';
import RouterLink from '../../../components/RouterLink/RouterLink';
import { LocationContext } from '../../../context/locationContext';
import { useTheme } from '../../../context/theme';
import { block, getLinkProps, getThemedValue } from '../../../utils';
import { i18n } from './i18n';
import './Logo.css';
const b = block('logo');
export const Logo = (_a) => {
    var { alt = i18n('image-alt') } = _a, restProps = __rest(_a, ["alt"]);
    const props = Object.assign(Object.assign({}, restProps), { alt });
    const { hostname, Link } = useContext(LocationContext);
    const theme = useTheme();
    const themedLogoProps = getThemedValue(props, theme) || props;
    const imageData = getMediaImage(themedLogoProps.icon || props.icon);
    imageData.alt = alt;
    const textData = themedLogoProps.text || props.text;
    const url = themedLogoProps.url || props.url || '/';
    const urlTitle = themedLogoProps.urlTitle || props.urlTitle || textData;
    const linkExtraProps = getLinkProps(url, hostname);
    const content = (React.createElement(Fragment, null,
        imageData && React.createElement(Image, Object.assign({ className: b('icon') }, imageData)),
        React.createElement("span", { className: b('text') }, textData)));
    return (React.createElement(RouterLink, { href: url, passHref: true }, Link ? (React.createElement("span", { className: b(null, props.className) }, content)) : (React.createElement("a", Object.assign({ className: b(null, props.className), href: url, title: urlTitle }, linkExtraProps), content))));
};
export default Logo;
