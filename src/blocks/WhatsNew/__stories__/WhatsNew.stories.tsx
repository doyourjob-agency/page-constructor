import React from 'react';

import {Meta, StoryFn} from '@storybook/react-vite';

import {PageConstructor} from '../../../containers/PageConstructor';
import {WhatsNewBlockModel, WhatsNewBlockProps} from '../../../models';
import WhatsNew from '../WhatsNew';

import data from './data.json';

export default {
    title: 'Blocks/WhatsNew',
    component: WhatsNew,
} as Meta;

const DefaultTemplate: StoryFn<WhatsNewBlockModel> = (args) => (
    <PageConstructor content={{blocks: [args]}} />
);

export const Default = DefaultTemplate.bind({});
export const AutoScroll = DefaultTemplate.bind({});

Default.args = {
    ...data.default.content,
} as WhatsNewBlockProps;

AutoScroll.args = {
    ...data.default.content,
    autoScrollInterval: 5000,
} as WhatsNewBlockProps;
