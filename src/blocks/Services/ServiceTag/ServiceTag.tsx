import React from 'react';

import {block} from '../../../utils';

import './ServiceTag.scss';

const b = block('services-tag');

type ServiceTagProps = {
    tag?: string | null;
    small?: boolean;
};

export const ServiceTag = ({tag, small}: ServiceTagProps) => {
    if (!tag) return null;
    const capitalize = (str: string) => {
        return str[0].toUpperCase() + str.substring(1);
    };
    return (
        <span className={b({yellow: tag === 'new', blue: tag !== 'new', small})}>
            {capitalize(tag)}
        </span>
    );
};

export default ServiceTag;
