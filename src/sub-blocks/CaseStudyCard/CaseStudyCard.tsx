import React from 'react';

import {HTML, Image, Tag} from '../../components';
import {CaseStudyCardProps} from '../../models/constructor-items/sub-blocks';
import {block} from '../../utils';

import './CaseStudyCard.scss';

const b = block('case-study-card');

const CaseStudyCard = (props: CaseStudyCardProps) => {
    const {image, title, text, highlights, labels} = props;

    return (
        <div className={b()}>
            <div className={b('lhs')}>
                <Image className={b('icon')} src={image} alt="" aria-hidden="true" />
                <h1 className={b('title')}>{title}</h1>
                <div className={b('lhs-lower')}>
                    <div className={b('main-info')}>
                        <HTML>{text}</HTML>
                    </div>
                    <div className={b('lower-stamp-list')}>
                        {labels &&
                            labels.map((text) => (
                                <Tag
                                    key={text}
                                    text={text}
                                    textColor="black"
                                    backgroundColor="rgb(205, 240, 253)"
                                    withoutMarginBottom
                                />
                            ))}
                    </div>
                </div>
            </div>
            <div className={b('rhs')}>
                {highlights &&
                    highlights.map(({kicker, title, subtitle}) => (
                        <div className={b('rhs-card')} key={title}>
                            {kicker && <div className={b('rhs-kicker')}>{kicker}</div>}
                            <h1 className={b('rhs-title')}>{title}</h1>
                            {subtitle && <div className={b('rhs-subtitle')}>{subtitle}</div>}
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default React.memo(CaseStudyCard);
