import React from 'react';

import {Meta, StoryFn} from '@storybook/react';

import {PageConstructor} from '../../../containers/PageConstructor';
import {LinkTableBlockModel} from '../../../models';
import LinkTable from '../LinkTable';

import data from './data.json';

export default {
    title: 'Blocks/LinkTable',
    component: LinkTable,
} as Meta;

const DefaultTemplate: StoryFn<LinkTableBlockModel> = (args) => (
    <PageConstructor content={{blocks: [args]}} />
);

export const Default = DefaultTemplate.bind({});

const DefaultArgs = data.default.content;

Default.args = DefaultArgs as LinkTableBlockModel;
