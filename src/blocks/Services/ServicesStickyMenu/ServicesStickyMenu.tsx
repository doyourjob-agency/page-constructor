import React, {useEffect, useState} from 'react';

import {Link} from '@gravity-ui/uikit';

import {ServiceCategory} from '../../../context/servicesContext';
import {block} from '../../../utils';
import {i18n} from '../i18n';

import './ServicesStickyMenu.scss';

const b = block('services-sticky-menu');

type ServicesStickyMenuProps = {
    items: ServiceCategory[];
};

export const ServicesStickyMenu = ({items}: ServicesStickyMenuProps) => {
    const [activeSlug, setActiveSlug] = useState(items[0].slug);

    useEffect(() => {
        // This effect tracks active element in the menu
        const scrollHandler = () => {
            // Taking offsets of all available anchors, while shifting them a bit to the top
            const menuItemPositions = items.map(({slug}) => ({
                slug: slug,
                offset:
                    (document.getElementById(slug ?? '')?.getBoundingClientRect()?.top ?? 0) - 150,
            }));
            // Inverting them and setting inappropriate (i.e. ones that we've scrolled over already) offsets to infinity
            const offsets = menuItemPositions.map(({offset}) => (offset > 0 ? Infinity : -offset));
            // Aquiring minimal appropriate offset
            const minimalOffset = Math.min(...offsets);
            // And setting new active element appropriately
            setActiveSlug(menuItemPositions[offsets.indexOf(minimalOffset)]?.slug);
        };
        scrollHandler();
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, [items]);

    return (
        <div className={b()}>
            <h5 className={b('title')}>{i18n('menuTitle')}</h5>
            <menu className={b('list')}>
                {items.map(({name, slug}) => (
                    <li key={slug} className={b('elem', {active: slug === activeSlug})}>
                        <Link className={b('link')} href={`#${slug}`} target="_self">
                            {name}
                        </Link>
                    </li>
                ))}
            </menu>
        </div>
    );
};

export default ServicesStickyMenu;
