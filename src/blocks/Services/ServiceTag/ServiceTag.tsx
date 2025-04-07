import React from 'react';

import {block, capitalize} from '../../../utils';

import './ServiceTag.scss';

const b = block('services-tag');

type ServiceTagProps = {
    tag?: string | null;
    small?: boolean;
};

export const ServiceTag = ({tag, small}: ServiceTagProps) => {
    if (!tag) return null;
    const isNew = tag === 'new';
    return <span className={b({yellow: isNew, blue: !isNew, small})}>{capitalize(tag)}</span>;
};

export default ServiceTag;
