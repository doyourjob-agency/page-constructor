import React, {useCallback, useMemo, useState} from 'react';

import {HTML, ImageBase} from '../../components';
import {BenefitsBlockProps} from '../../models';
import {block} from '../../utils';

import BenefitsCard from './BenefitsCard/BenefitsCard';
import BenefitsLabel from './BenefitsLabel/BenefitsLabel';

import './Benefits.scss';

const b = block('benefits-block');

export const BenefitsBlock = (props: BenefitsBlockProps) => {
    const {
        titleOne,
        postTitleOne,
        textOne,
        titleTwo,
        postTitleTwo,
        textTwo,
        background,
        cards,
        items,
        theme,
        accentColor,
    } = props;
    const [activeIndex, setActiveIndex] = useState(0);

    const data = items?.[activeIndex];

    const handleClick = useCallback((index: number) => setActiveIndex(index), []);

    const styles = useMemo<React.CSSProperties>(
        () =>
            accentColor
                ? ({
                      ['--local-accent-color']: accentColor,
                  } as React.CSSProperties)
                : {},

        [accentColor],
    );

    return (
        <div className={b({theme})} style={styles}>
            <div className={b('background')} style={{background}} />
            {(titleOne || postTitleOne || textOne) && (
                <div className={b('header')}>
                    {(titleOne || postTitleOne) && (
                        <div className={b('title')}>
                            {titleOne}
                            <span>{postTitleOne}</span>
                        </div>
                    )}
                    {textOne && <HTML className={b('text')}>{textOne}</HTML>}
                </div>
            )}
            {Boolean(cards?.length) && (
                <div className={b('cards')}>
                    {cards?.map((card, index) => (
                        <BenefitsCard key={index} {...card} />
                    ))}
                </div>
            )}
            {(titleTwo || postTitleTwo || textTwo) && (
                <div className={b('header')}>
                    {(titleTwo || postTitleTwo) && (
                        <div className={b('title')}>
                            {titleTwo}
                            <span>{postTitleTwo}</span>
                        </div>
                    )}
                    {textTwo && <HTML className={b('text')}>{textTwo}</HTML>}
                </div>
            )}
            {Boolean(items?.length) && (
                <div className={b('labels')}>
                    {items?.map((item, index) => (
                        <BenefitsLabel
                            key={index}
                            {...item}
                            active={index === activeIndex}
                            index={index}
                            onClick={handleClick}
                        />
                    ))}
                </div>
            )}
            {data && (
                <div className={b('images')}>
                    {data.images.map((image, index) => (
                        <div
                            key={index}
                            style={{
                                gridColumn: `span ${data.columns[index]}`,
                                gridRow: `span ${data.rows[index]}`,
                            }}
                        >
                            <ImageBase className={b('image')} src={image} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default BenefitsBlock;
