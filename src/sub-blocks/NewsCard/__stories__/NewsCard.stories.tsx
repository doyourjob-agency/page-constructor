import React from 'react';

import {Meta, StoryFn} from '@storybook/react-vite';

import CardLayout from '../../../blocks/CardLayout/CardLayout';
import {NewsCardProps} from '../../../models';
import NewsCard from '../NewsCard';

import data from './data.json';

export default {
    title: 'Components/Cards/NewsCard',
    component: NewsCard,
} as Meta;

const DefaultTemplate: StoryFn<NewsCardProps> = (args) => (
    <CardLayout animated={false} colSizes={{all: 12, md: 4}}>
        <NewsCard {...args} />
        <NewsCard {...args} />
        <NewsCard {...args} />
    </CardLayout>
);

export const Default = DefaultTemplate.bind({});

Default.args = data.default.content as NewsCardProps;
