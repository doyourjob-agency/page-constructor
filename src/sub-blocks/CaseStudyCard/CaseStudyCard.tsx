import React from 'react';

import {Image} from '../../components';
import {CaseStudyCardProps} from '../../models/constructor-items/sub-blocks';
import {block} from '../../utils';

import './CaseStudyCard.scss';

const b = block('case-study-card');

const CaseStudyCard = (props: CaseStudyCardProps) => {
    const {image, lhsInfo, rhsInfo, lowerStamps} = props;

    return (
        <div className={b()}>
            <div className={b('lhs')}>
                <Image className={b('icon')} src={image} alt="" aria-hidden="true" />
                <h1 className={b('title')}>Stable diffusion inference</h1>
                <div className={b('lhs-lower')}>
                    <div className={b('main-info')}>
                        {lhsInfo.map(({prefix, text}) => (
                            <div key="text">
                                {prefix && (
                                    <React.Fragment>
                                        <span>{prefix}</span>{' '}
                                    </React.Fragment>
                                )}
                                {text}
                            </div>
                        ))}
                    </div>
                    <div className={b('lower-stamp-list')}>
                        {lowerStamps.map((text) => (
                            <div className={b('lower-stamp')} key={text}>
                                {text}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={b('rhs')}>
                {rhsInfo.map(({upper, lower}) => (
                    <div className={b('rhs-card')} key={upper}>
                        <div className={b('rhs-title')}>{upper}</div>
                        <div className={b('rhs-d')}>{lower}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default React.memo(CaseStudyCard);
