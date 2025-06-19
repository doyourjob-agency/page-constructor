import React from 'react';

import {CaseStudyCardProps} from '../../models/constructor-items/sub-blocks';
import {block} from '../../utils';

import './CaseStudyCard.scss';

const b = block('case-study-card');

const CaseStudyCard = (props: CaseStudyCardProps) => {
    const {test} = props;
    return <div className={b()}>{test}</div>;
};

export default React.memo(CaseStudyCard);
