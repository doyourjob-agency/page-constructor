import React, { useState } from 'react';
import { ChevronDown } from '@gravity-ui/icons';
import { Link } from '@gravity-ui/uikit';
import { block } from '../../../utils';
import { i18n } from '../i18n';
import './ServicesMobileMenu.css';
const b = block('services-mobile-menu');
export const ServicesMobileMenu = ({ items }) => {
    const [isActive, setIsActive] = useState(false);
    const toggleActive = () => {
        setIsActive(!isActive);
    };
    return (React.createElement("div", { className: b() },
        React.createElement("button", { className: b('title'), onClick: toggleActive },
            React.createElement("h5", { className: b('title-text') }, i18n('menuTitle')),
            React.createElement("div", { className: b('rotated-box', { rotate: isActive }) },
                React.createElement(ChevronDown, { height: 22, width: 22 }))),
        React.createElement("div", { className: b('list-container', { 'zero-height': !isActive }) },
            React.createElement("menu", { className: b('list') }, items.map(({ name, slug }) => (React.createElement("li", { key: slug, className: b('elem') },
                React.createElement(Link, { className: b('link'), href: `#${slug}`, target: "_self", view: "primary", onClick: toggleActive }, name))))))));
};
export default ServicesMobileMenu;
