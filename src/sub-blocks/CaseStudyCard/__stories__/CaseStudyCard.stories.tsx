import React from 'react';

import {Meta, StoryFn} from '@storybook/react';

import {SliderBlock} from '../../../blocks';
import {CaseStudyCardProps} from '../../../models';
import CaseStudyCard from '../CaseStudyCard';

import data from './data.json';

export default {
    component: CaseStudyCard,
    title: 'Components/Cards/CaseStudyCard',
} as Meta;

const DefaultTemplate: StoryFn<CaseStudyCardProps> = (args) => (
    <div>
        <CaseStudyCard {...args} />
    </div>
);

const SliderTemplate: StoryFn<CaseStudyCardProps> = (args) => (
    <SliderBlock slidesToShow={1}>
        <CaseStudyCard {...args} />
        <CaseStudyCard {...args} />
        <CaseStudyCard {...args} />
        <CaseStudyCard {...args} />
    </SliderBlock>
);

export const Default = DefaultTemplate.bind({});
export const WithSlider = SliderTemplate.bind({});

const DefaultArgs = data.default.content;

Default.args = DefaultArgs as CaseStudyCardProps;
WithSlider.args = DefaultArgs as CaseStudyCardProps;
