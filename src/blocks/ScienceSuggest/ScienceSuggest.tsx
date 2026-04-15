import React from 'react';

import {ScienceSuggestBlockProps} from '../../models';
import {NewPostCard} from '../../sub-blocks';
import SliderBlock from '../Slider/Slider';

import {i18n} from './i18n';

const slidesToShow = {xl: 3, lg: 2, sm: 1};

const ScienceSuggestBlock = ({items}: ScienceSuggestBlockProps) => {
    return (
        <SliderBlock slidesToShow={slidesToShow} title={{text: i18n('title')}}>
            {items.map((item) => (
                <NewPostCard key={item.slug} {...item} />
            ))}
        </SliderBlock>
    );
};

export default React.memo(ScienceSuggestBlock);
