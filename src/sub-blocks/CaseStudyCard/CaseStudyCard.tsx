import React from 'react';

import {HTML, Image, Tag} from '../../components';
import {CaseStudyCardProps} from '../../models/constructor-items/sub-blocks';
import {block} from '../../utils';

import './CaseStudyCard.scss';

const b = block('case-study-card');

const CaseStudyCard = (props: CaseStudyCardProps) => {
    const {image, title, background, text, highlights, labels} = props;

    return (
        <div className={b()} style={{background: background}}>
            <div className={b('lhs')}>
                <Image className={b('icon')} src={image} alt="" aria-hidden="true" />
                <div className={`${b('title')} title-font-family`}>{title}</div>
                <div className={b('lhs-lower')}>
                    <HTML block className={b('main-info')}>
                        {text}
                    </HTML>
                    <div className={b('lower-stamp-list')}>
                        {labels && labels.map((label, index) => <Tag key={index} {...label} />)}
                    </div>
                </div>
            </div>
            <div className={b('rhs')}>
                {highlights &&
                    highlights.map((item, index) => (
                        <div
                            style={{background: item.background}}
                            className={b('rhs-card')}
                            key={index}
                        >
                            {item.kicker && <div className={b('rhs-kicker')}>{item.kicker}</div>}
                            <div className={`${b('rhs-title')} title-font-family`}>
                                {item.title}
                            </div>
                            {item.subtitle && (
                                <div className={b('rhs-subtitle')}>{item.subtitle}</div>
                            )}
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default React.memo(CaseStudyCard);
