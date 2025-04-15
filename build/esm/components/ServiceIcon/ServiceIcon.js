import React, { useContext } from 'react';
import { Icon } from '@gravity-ui/uikit';
import { ServicesContext } from '../../context/servicesContext';
import Image from '../Image/Image';
const ServiceIcon = ({ name, size }) => {
    const { icons } = useContext(ServicesContext);
    const data = name ? icons[name] : '';
    if (!data)
        return null;
    if (data.startsWith('/') || /^(http(s?):\/\/)/.test(data)) {
        return React.createElement(Image, { src: data, alt: "", "aria-hidden": "true" });
    }
    return React.createElement(Icon, { data: data, size: size, "aria-hidden": "true" });
};
export default ServiceIcon;
