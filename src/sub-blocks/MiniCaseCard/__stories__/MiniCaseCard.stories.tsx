import React from 'react';

import {Meta, StoryFn} from '@storybook/react-vite';

import {ScrollerBlock} from '../../../blocks';
import {MiniCaseCardModel, MiniCaseCardProps} from '../../../models';
import MiniCaseCard from '../MiniCaseCard';

import data from './data.json';

export default {
    title: 'Components/Cards/MiniCaseCard',
    component: MiniCaseCard,
    argTypes: {
        showStory: {control: 'boolean'},
        showQuote: {control: 'boolean'},
    },
} as Meta;

const DefaultTemplate: StoryFn<MiniCaseCardModel> = (args) => (
    <div style={{padding: 48}}>
        <MiniCaseCard {...args} />
    </div>
);

const ScrollerTemplate: StoryFn<MiniCaseCardModel> = (args) => (
    <div style={{padding: 48}}>
        <ScrollerBlock gapLong infinite>
            <MiniCaseCard {...args} />
            <MiniCaseCard {...args} />
            <MiniCaseCard {...args} />
            <MiniCaseCard {...args} />
        </ScrollerBlock>
    </div>
);

const withColors = (content: MiniCaseCardProps): MiniCaseCardProps => ({
    ...content,
    background: '#E0E4FF',
    backgroundData: '#614EFA',
});

export const OnlyText = DefaultTemplate.bind({});
export const OnlyQuoteAndAuthor = DefaultTemplate.bind({});
export const Both = DefaultTemplate.bind({});
export const BothWithScroller = ScrollerTemplate.bind({});

OnlyText.args = {
    ...withColors(data.default.content),
    showStory: true,
    showQuote: false,
} as MiniCaseCardProps;

OnlyQuoteAndAuthor.args = {
    ...withColors(data.default.content),
    showStory: false,
    showQuote: true,
} as MiniCaseCardProps;

Both.args = {
    ...withColors(data.default.content),
    showStory: true,
    showQuote: true,
} as MiniCaseCardProps;

BothWithScroller.args = {
    ...withColors(data.default.content),
    showStory: true,
    showQuote: true,
} as MiniCaseCardProps;
