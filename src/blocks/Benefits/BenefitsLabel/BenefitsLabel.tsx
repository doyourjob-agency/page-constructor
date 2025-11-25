import React from 'react';

import {BenefitsBlockItemLabel} from '../../../models';
import {block} from '../../../utils';

import './BenefitsLabel.scss';

const b = block('benefits-label');

type BenefitsLabelProps = BenefitsBlockItemLabel & {
    active?: boolean;
};

export const BenefitsLabel = (props: BenefitsLabelProps) => {
    const {title, text, active} = props;

    return (
        <div className={b({active})}>
            <div className={b('title')}>{title}</div>
            <div className={b('text')}>{text}</div>
        </div>
    );
};

export default BenefitsLabel;
