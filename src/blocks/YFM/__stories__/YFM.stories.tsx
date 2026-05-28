import React from 'react';

import type {Meta, StoryFn} from '@storybook/react-vite';

import {yfmTransform} from '../../../../.storybook/utils';
import {PageConstructor} from '../../../containers/PageConstructor';
import {YFMBlockModel} from '../../../models';
import YFM from '../YFM';

import data from './data.json';

export default {
    title: 'Blocks/YFM',
    component: YFM,
    args: {
        theme: 'light',
    },
} as Meta;

const DefaultTemplate: StoryFn<YFMBlockModel> = (args) => (
    <PageConstructor content={{blocks: [args]}} />
);

export const Default = DefaultTemplate.bind({});

Default.args = {
    ...data.default.content,
    text: yfmTransform(data.default.content.text),
} as YFMBlockModel;
