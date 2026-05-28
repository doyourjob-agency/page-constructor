import React from 'react';

import type {Meta, StoryFn} from '@storybook/react-vite';

import {PageConstructor} from '../../../containers/PageConstructor';
import {LayoutBlockModel} from '../../../models';
import Layout from '../Layout';

import data from './data.json';

export default {
    title: 'Blocks/Layout',
    component: Layout,
} as Meta;

const DefaultTemplate: StoryFn<LayoutBlockModel> = (args) => (
    <PageConstructor content={{blocks: [args]}} />
);

export const Default = DefaultTemplate.bind({});

Default.args = data.default.content as unknown as LayoutBlockModel;
