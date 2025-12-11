import React from 'react';

import {ImageBase} from '../../../components';
import {BenefitsBlockCard} from '../../../models';
import {block} from '../../../utils';

import './BenefitsCard.scss';

const b = block('benefits-card');

export const BenefitsCard = (props: BenefitsBlockCard) => {
    const {icon, title, text} = props;

    return (
        <div className={b()}>
            <ImageBase className={b('icon')} src={icon} />
            <div className={b('title')}>{title}</div>
            <div className={b('text')}>{text}</div>
        </div>
    );
};

export default BenefitsCard;
