import React from 'react';

import {HTML, Image, Tag} from '../../components';
import {CaseStudyCardProps} from '../../models/constructor-items/sub-blocks';
import {block} from '../../utils';

import './CaseStudyCard.scss';

const b = block('case-study-card');

const CaseStudyCard = (props: CaseStudyCardProps) => {
    const {image, title, background, text, highlights, labels} = props;

    return (
        <div className={b()} style={{background}}>
            <div className={b('info')}>
                <Image src={image} alt="" aria-hidden="true" />
                <h2 className={`${b('title')} title-font-family`}>{title}</h2>
                <div className={b('content')}>
                    <HTML block>{text}</HTML>
                    <ul className={b('tags')}>
                        {labels &&
                            labels.map((label, index) => (
                                <li key={index}>
                                    <Tag {...label} />
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
            <div className={b('highlights')}>
                {highlights &&
                    highlights.map((item, index) => (
                        <div
                            style={{background: item.background}}
                            className={b('highlight')}
                            key={index}
                        >
                            {item.kicker && <div>{item.kicker}</div>}
                            <div className={`${b('highlight-title')} title-font-family`}>
                                {item.title}
                            </div>
                            {item.subtitle && <div>{item.subtitle}</div>}
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default React.memo(CaseStudyCard);
