import React, {useContext, useMemo} from 'react';

import {MiniCaseContext} from '../../context/miniCaseContext';
import {CaseStudyCardProps, MiniCaseBlockProps} from '../../models';
import {CaseStudyCard} from '../../sub-blocks';
import SliderNewBlock from '../SliderNew/Slider';

const MiniCaseBlock = (props: MiniCaseBlockProps) => {
    const {items, ...sliderProps} = props;
    const data = useContext(MiniCaseContext);

    const fullItems = useMemo<CaseStudyCardProps[]>(
        () =>
            items
                .map((item) => (data || {})[item])
                .filter((el): el is CaseStudyCardProps => Boolean(el)),
        [data, items],
    );

    return (
        <SliderNewBlock {...sliderProps} slidesToShow={1}>
            {fullItems.map((args, index) => (
                <CaseStudyCard key={index} {...args} />
            ))}
        </SliderNewBlock>
    );
};

export default MiniCaseBlock;
