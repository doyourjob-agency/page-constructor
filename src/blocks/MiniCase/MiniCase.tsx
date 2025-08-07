import React, {useContext, useMemo} from 'react';

import {MiniCaseContext} from '../../context/miniCaseContext';
import {CaseStudyCardProps, MiniCaseBlockProps} from '../../models';
import {CaseStudyCard} from '../../sub-blocks';
import SliderNewBlock from '../SliderNew/Slider';

const MiniCaseBlock = (props: MiniCaseBlockProps) => {
    const {items} = props;
    const data = useContext(MiniCaseContext);

    const fullItems = useMemo(() => {
        const res: CaseStudyCardProps[] = [];
        items.forEach((item) => {
            const el = (data || {})[item];
            if (el) {
                res.push(el);
            }
        });
        return res;
    }, [data, items]);

    return (
        <SliderNewBlock slidesToShow={1}>
            {fullItems.map((args, index) => (
                <CaseStudyCard key={index} {...args} />
            ))}
        </SliderNewBlock>
    );
};

export default MiniCaseBlock;
