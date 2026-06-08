import React from 'react';

import {Meta, StoryFn} from '@storybook/react-vite';

import {yfmTransform} from '../../../../.storybook/utils';
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

const withTransformedContent = (content: MiniCaseCardProps): MiniCaseCardProps => ({
    ...withColors(content),
    text: content.text && yfmTransform(content.text),
    quote: content.quote && yfmTransform(content.quote),
    author: content.author && yfmTransform(content.author),
    position: content.position && yfmTransform(content.position),
    data: content.data?.map((item) => ({
        ...item,
        label: item.label && yfmTransform(item.label),
    })),
});

export const OnlyText = DefaultTemplate.bind({});
export const OnlyQuoteAndAuthor = DefaultTemplate.bind({});
export const Both = DefaultTemplate.bind({});
export const BothWithScroller = ScrollerTemplate.bind({});

OnlyText.args = {
    ...withTransformedContent(data.default.content),
    showStory: true,
    showQuote: false,
} as MiniCaseCardProps;

OnlyQuoteAndAuthor.args = {
    ...withTransformedContent(data.default.content),
    showStory: false,
    showQuote: true,
} as MiniCaseCardProps;

Both.args = {
    ...withTransformedContent(data.default.content),
    showStory: true,
    showQuote: true,
} as MiniCaseCardProps;

BothWithScroller.args = {
    ...withTransformedContent(data.default.content),
    showStory: true,
    showQuote: true,
} as MiniCaseCardProps;
