import React, { Children, Fragment, isValidElement, } from 'react';
import { Link } from '@gravity-ui/uikit';
import { useAnalytics } from '../../hooks';
import { DefaultEventNames, } from '../../models';
import { block, getQaAttrubutes } from '../../utils';
import BackgroundImage from '../BackgroundImage/BackgroundImage';
import RouterLink from '../RouterLink/RouterLink';
import './CardBase.css';
const b = block('card-base-block');
const Header = () => null;
const Content = () => null;
const Footer = () => null;
export const Layout = (props) => {
    const { className, bodyClassName, analyticsEvents, contentClassName, children, url, target, border = 'shadow', urlTitle, qa, extraProps = {}, } = props;
    const handleAnalytics = useAnalytics(DefaultEventNames.CardBase, url);
    let header, content, footer, image, headerClass, footerClass;
    const qaAttributes = getQaAttrubutes(qa, 'header', 'footer', 'body', 'content');
    function handleChild(child) {
        switch (child.type) {
            case Header:
                header = child.props.children;
                image = child.props.image;
                headerClass = child.props.className;
                break;
            case Content:
                content = child.props.children;
                break;
            case Footer:
                footer = child.props.children;
                footerClass = child.props.className;
                break;
        }
    }
    Children.toArray(children).forEach((child) => {
        if (isValidElement(child)) {
            handleChild(child);
        }
    });
    const cardContent = (React.createElement(Fragment, null,
        (header || image) && (React.createElement(BackgroundImage, Object.assign({ className: b('header', headerClass) }, (typeof image === 'string' ? { src: image } : image), { qa: qaAttributes.header }),
            React.createElement("div", { className: b('header-content') }, header))),
        React.createElement("div", { className: b('body', bodyClassName), "data-qa": qaAttributes.body },
            React.createElement("div", { className: b('content', contentClassName), "data-qa": qaAttributes.content }, content),
            footer && (React.createElement("div", { className: b('footer', footerClass), "data-qa": qaAttributes.footer }, footer)))));
    const fullClassName = b({ border }, className);
    const onClick = () => {
        handleAnalytics(analyticsEvents);
    };
    return url ? (React.createElement(RouterLink, { href: url },
        React.createElement(Link, { href: url, target: target, rel: target === '_blank' ? 'noopener noreferrer' : undefined, className: fullClassName, onClick: onClick, title: urlTitle, extraProps: Object.assign({ draggable: false, onDragStart: (e) => e.preventDefault() }, extraProps), qa: qa }, cardContent))) : (React.createElement("div", Object.assign({ className: fullClassName, "data-qa": qa }, extraProps), cardContent));
};
Layout.Header = Header;
Layout.Content = Content;
Layout.Footer = Footer;
export default Layout;
