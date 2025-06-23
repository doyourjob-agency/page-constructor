import React from 'react';

import {HTML, Image, Tag} from '../../components';
import {CaseStudyCardProps} from '../../models/constructor-items/sub-blocks';
import {block} from '../../utils';

import './CaseStudyCard.scss';

const b = block('case-study-card');

const CaseStudyCard = (props: CaseStudyCardProps) => {
    const {image, title, text, cardInfo, lowerTags} = props;

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
                        {lowerTags &&
                            lowerTags.map((text) => (
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
                {cardInfo &&
                    cardInfo.map(({overtext, text, undertext}) => (
                        <div className={b('rhs-card')} key={text}>
                            {overtext && <div className={b('rhs-d')}>{overtext}</div>}
                            <h2 className={b('rhs-title')}>{text}</h2>
                            {undertext && <div className={b('rhs-d')}>{undertext}</div>}
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default React.memo(CaseStudyCard);
