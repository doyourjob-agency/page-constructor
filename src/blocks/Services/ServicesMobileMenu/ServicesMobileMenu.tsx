import React, {useState} from 'react';

import {ChevronDown} from '@gravity-ui/icons';
import {Link} from '@gravity-ui/uikit';

import {ServiceCategory} from '../../../context/servicesContext';
import {block} from '../../../utils';
import {i18n} from '../i18n';

import './ServicesMobileMenu.scss';

const b = block('services-mobile-menu');

type ServicesMobileMenuProps = {
    items: ServiceCategory[];
};

export const ServicesMobileMenu = ({items}: ServicesMobileMenuProps) => {
    const [isActive, setIsActive] = useState(false);
    const toggleActive = () => {
        setIsActive(!isActive);
    };
    return (
        <div className={b()}>
            <button className={b('title')} onClick={toggleActive}>
                <h5 className={b('title-text')}>{i18n('menuTitle')}</h5>
                <div className={b('rotated-box', {rotate: isActive})}>
                    <ChevronDown height={22} width={22} />
                </div>
            </button>
            <div className={b('list-container', {'zero-height': !isActive})}>
                <menu className={b('list')}>
                    {items.map(({name, slug}) => (
                        <li key={slug} className={b('elem')}>
                            <Link
                                className={b('link')}
                                href={`#${slug}`}
                                target="_self"
                                view="primary"
                                onClick={toggleActive}
                            >
                                {name}
                            </Link>
                        </li>
                    ))}
                </menu>
            </div>
        </div>
    );
};

export default ServicesMobileMenu;
