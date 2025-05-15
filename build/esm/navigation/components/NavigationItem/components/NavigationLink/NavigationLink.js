import { __rest } from "tslib";
import React, { Fragment, useContext } from 'react';
import { RouterLink } from '../../../../../components';
import { getMediaImage } from '../../../../../components/Media/Image/utils';
import { LocationContext } from '../../../../../context/locationContext';
import { NavigationArrow } from '../../../../../icons';
import { block, getLinkProps } from '../../../../../utils';
import { ContentWrapper } from '../ContentWrapper/ContentWrapper';
import './NavigationLink.css';
const b = block('navigation-link');
export const NavigationLink = (props) => {
    const { hostname, Link } = useContext(LocationContext);
    const { url, text, icon, arrow, target, className, iconSize, urlTitle } = props, rest = __rest(props, ["url", "text", "icon", "arrow", "target", "className", "iconSize", "urlTitle"]);
    const linkExtraProps = getLinkProps(url, hostname, target);
    const iconData = icon && getMediaImage(icon);
    const classes = b(null, className);
    const content = (React.createElement(Fragment, null,
        React.createElement(ContentWrapper, { text: text, icon: iconData, iconSize: iconSize }),
        arrow && React.createElement(NavigationArrow, { className: b('arrow') })));
    if ((linkExtraProps === null || linkExtraProps === void 0 ? void 0 : linkExtraProps.target) || !Link) {
        return (React.createElement("a", Object.assign({ href: url, title: urlTitle || text, className: classes }, rest, linkExtraProps), content));
    }
    else {
        return (React.createElement(RouterLink, { href: url, passHref: true },
            React.createElement("a", Object.assign({ title: urlTitle || text }, rest, { className: classes }), content)));
    }
};
