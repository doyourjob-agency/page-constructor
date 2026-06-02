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
    argTypes: {
        infinite: {control: 'boolean'},
        scrollSnapCenter: {control: 'boolean'},
        autoScroll: {control: 'boolean'},
        autoScrollInterval: {control: 'number'},
    },
} as Meta;

const DefaultTemplate: StoryFn<ScrollerBlockModel> = (args) => (
    <PageConstructor content={{blocks: [args]}} />
);

export const Default = DefaultTemplate.bind({});
export const Story = DefaultTemplate.bind({});
export const Finite = DefaultTemplate.bind({});

Default.args = {
    ...data.default.content,
} as ScrollerBlockProps;

Story.args = {
    ...data.story.content,
} as ScrollerBlockProps;

Finite.args = {
    ...data.story.content,
    infinite: false,
} as ScrollerBlockProps;
