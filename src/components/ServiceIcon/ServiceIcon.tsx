import React, {useContext} from 'react';

import {Icon} from '@gravity-ui/uikit';

import {ServicesContext} from '../../context/servicesContext';
import Image from '../Image/Image';

export interface ServiceIconProps {
    name?: string;
    size?: number;
}

const ServiceIcon = ({name, size}: ServiceIconProps) => {
    const {icons} = useContext(ServicesContext);
    const data = name ? icons[name] : '';
    if (!data) return null;
    if (data.startsWith('/') || /^(http(s?):\/\/)/.test(data)) {
        return <Image src={data} alt="" aria-hidden="true" />;
    }
    return <Icon data={data} size={size} aria-hidden="true" />;
};

export default ServiceIcon;
