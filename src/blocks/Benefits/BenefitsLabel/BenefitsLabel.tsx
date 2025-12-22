import React, {useCallback} from 'react';

import {BenefitsBlockItemLabel} from '../../../models';
import {block} from '../../../utils';

import './BenefitsLabel.scss';

const b = block('benefits-label');

type BenefitsLabelProps = BenefitsBlockItemLabel & {
    index: number;
    active?: boolean;
    onClick?: (index: number) => void;
};

export const BenefitsLabel = (props: BenefitsLabelProps) => {
    const {index, title, text, active, onClick} = props;

    const handleClick = useCallback(() => onClick?.(index), [onClick, index]);

    return (
        <button className={b({active})} onClick={handleClick}>
            <div className={b('title')}>{title}</div>
            <div className={b('text')}>{text}</div>
        </button>
    );
};

export default BenefitsLabel;
