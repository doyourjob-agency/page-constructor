import React, { useEffect, useState } from 'react';
import { Link } from '@gravity-ui/uikit';
import { block } from '../../../utils';
import { i18n } from '../i18n';
import './ServicesStickyMenu.css';
const b = block('services-sticky-menu');
export const ServicesStickyMenu = ({ items }) => {
    const [activeSlug, setActiveSlug] = useState(items[0].slug);
    useEffect(() => {
        // This effect tracks active element in the menu
        const scrollHandler = () => {
            var _a;
            // Taking offsets of all available anchors, while shifting them a bit to the top
            const menuItemPositions = items.map(({ slug }) => {
                var _a, _b, _c;
                return ({
                    slug: slug,
                    offset: ((_c = (_b = (_a = document.getElementById(slug !== null && slug !== void 0 ? slug : '')) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect()) === null || _b === void 0 ? void 0 : _b.top) !== null && _c !== void 0 ? _c : 0) - 150,
                });
            });
            // Inverting them and setting inappropriate (i.e. ones that we've scrolled over already) offsets to infinity
            const offsets = menuItemPositions.map(({ offset }) => (offset > 0 ? Infinity : -offset));
            // Aquiring minimal appropriate offset
            const minimalOffset = Math.min(...offsets);
            // And setting new active element appropriately
            setActiveSlug((_a = menuItemPositions[offsets.indexOf(minimalOffset)]) === null || _a === void 0 ? void 0 : _a.slug);
        };
        scrollHandler();
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, [items]);
    return (React.createElement("div", { className: b() },
        React.createElement("h5", { className: b('title') }, i18n('menuTitle')),
        React.createElement("menu", { className: b('list') }, items.map(({ name, slug }) => (React.createElement("li", { key: slug, className: b('elem', { active: slug === activeSlug }) },
            React.createElement(Link, { className: b('link'), href: `#${slug}`, target: "_self" }, name)))))));
};
export default ServicesStickyMenu;
