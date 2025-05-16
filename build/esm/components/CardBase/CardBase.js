import React, { Children, Fragment, isValidElement, useCallback, useMemo, } from 'react';
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
    const qaAttributes = useMemo(() => getQaAttrubutes(qa, 'header', 'footer', 'body', 'content'), [qa]);
    const { header, content, footer, image, headerClass, footerClass } = useMemo(() => {
        let _header, _content, _footer, _image, _headerClass, _footerClass;
        function handleChild(child) {
            switch (child.type) {
                case Header:
                    _header = child.props.children;
                    _image = child.props.image;
                    _headerClass = child.props.className;
                    break;
                case Content:
                    _content = child.props.children;
                    break;
                case Footer:
                    _footer = child.props.children;
                    _footerClass = child.props.className;
                    break;
            }
        }
        Children.toArray(children).forEach((child) => {
            if (isValidElement(child)) {
                handleChild(child);
            }
        });
        return {
            header: _header,
            content: _content,
            footer: _footer,
            image: _image,
            headerClass: _headerClass,
            footerClass: _footerClass,
        };
    }, [children]);
    const cardContent = useMemo(() => (React.createElement(Fragment, null,
        (header || image) && (React.createElement(BackgroundImage, Object.assign({ className: b('header', headerClass) }, (typeof image === 'string' ? { src: image } : image), { qa: qaAttributes.header }),
            React.createElement("div", { className: b('header-content') }, header))),
        React.createElement("div", { className: b('body', bodyClassName), "data-qa": qaAttributes.body },
            React.createElement("div", { className: b('content', contentClassName), "data-qa": qaAttributes.content }, content),
            footer && (React.createElement("div", { className: b('footer', footerClass), "data-qa": qaAttributes.footer }, footer))))), [
        header,
        content,
        image,
        headerClass,
        bodyClassName,
        contentClassName,
        footer,
        footerClass,
        qaAttributes,
    ]);
    const fullClassName = useMemo(() => b({ border }, className), [border, className]);
    const onClick = useCallback(() => {
        handleAnalytics(analyticsEvents);
    }, [handleAnalytics, analyticsEvents]);
    return url ? (React.createElement(RouterLink, { href: url },
        React.createElement(Link, { href: url, target: target, rel: target === '_blank' ? 'noopener noreferrer' : undefined, className: fullClassName, onClick: onClick, title: urlTitle, extraProps: Object.assign({ draggable: false, onDragStart: (e) => e.preventDefault() }, extraProps), qa: qa }, cardContent))) : (React.createElement("div", Object.assign({ className: fullClassName, "data-qa": qa }, extraProps), cardContent));
};
Layout.Header = Header;
Layout.Content = Content;
Layout.Footer = Footer;
export default Layout;
