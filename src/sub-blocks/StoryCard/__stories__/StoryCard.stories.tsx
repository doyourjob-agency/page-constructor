import React from 'react';

import {Meta, StoryFn} from '@storybook/react-vite';

import {SliderNewBlock} from '../../../blocks';
import {StoryCardModel, StoryCardProps} from '../../../models';
import StoryCard from '../StoryCard';

import data from './data.json';

export default {
    title: 'Components/Cards/StoryCard',
    component: StoryCard,
} as Meta;

const DefaultTemplate: StoryFn<StoryCardModel> = (args) => (
    <div style={{padding: 48}}>
        <StoryCard {...args} />
    </div>
);

const SliderTemplate: StoryFn<StoryCardModel> = (args) => (
    <SliderNewBlock slidesToShow={1}>
        <StoryCard {...args} />
        <StoryCard {...args} />
        <StoryCard {...args} />
        <StoryCard {...args} />
    </SliderNewBlock>
);

export const Default = DefaultTemplate.bind({});
export const WithSlider = SliderTemplate.bind({});

Default.args = {
    ...data.default.content,
} as StoryCardProps;

WithSlider.args = {
    ...data.default.content,
} as StoryCardProps;
