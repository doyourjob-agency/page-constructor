import React from 'react';

import {ServiceLabelProps} from '../../models';
import {block} from '../../utils';
import ServiceIcon from '../ServiceIcon/ServiceIcon';

import './ServiceLabel.scss';

const b = block('service-label');

const ServiceLabel = ({name, slug}: ServiceLabelProps) => (
    <div className={b()}>
        <div className={b('wrap')} aria-hidden="true">
            <ServiceIcon name={slug} size={8} />
        </div>
        <span className={b('name')}>
            <span>{name}</span>
        </span>
    </div>
);

export default ServiceLabel;
