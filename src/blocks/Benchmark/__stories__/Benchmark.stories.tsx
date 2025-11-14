import React from 'react';

import {Meta, StoryFn} from '@storybook/react-vite';

import {PageConstructor} from '../../../containers/PageConstructor';
import {BenchmarkBlockModel, BenchmarkBlockProps} from '../../../models';
import Benchmark from '../Benchmark';

import data from './data.json';

export default {
    title: 'Blocks/Benchmark',
    component: Benchmark,
} as Meta;

const DefaultTemplate: StoryFn<BenchmarkBlockModel> = (args) => (
    <PageConstructor content={{blocks: [args]}} />
);

export const Default = DefaultTemplate.bind({});

Default.args = {
    ...data.default.content,
} as BenchmarkBlockProps;
