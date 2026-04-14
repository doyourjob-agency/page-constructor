import React from 'react';

import type {Meta, StoryFn} from '@storybook/react';

import {PageConstructor} from '../../../containers/PageConstructor';
import {CatBlockModel} from '../../../models';
import {Cat} from '../Cat';

import data from './data.json';

export default {
    title: 'Blocks/Cat',
    component: Cat,
} as Meta;

const DefaultTemplate: StoryFn<CatBlockModel> = (args) => (
    <PageConstructor content={{blocks: [args]}} />
);

export const Default = DefaultTemplate.bind({});

Default.args = {
    ...data.default.content,
    children: data.children,
} as CatBlockModel;
