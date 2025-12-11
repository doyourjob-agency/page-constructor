import React from 'react';

import {Meta, StoryFn} from '@storybook/react';

import {PageConstructor} from '../../../containers/PageConstructor';
import {ScrollerBlockModel, ScrollerBlockProps} from '../../../models';
import Scroller from '../Scroller';

import data from './data.json';

export default {
    title: 'Blocks/Scroller',
    component: Scroller,
    args: {
        theme: 'light',
    },
} as Meta;

const DefaultTemplate: StoryFn<ScrollerBlockModel> = (args) => (
    <PageConstructor content={{blocks: [args]}} />
);

export const Default = DefaultTemplate.bind({});
export const Story = DefaultTemplate.bind({});

Default.args = {
    ...data.default.content,
} as ScrollerBlockProps;

Story.args = {
    ...data.story.content,
} as ScrollerBlockProps;
