import React from 'react';

import {Meta, StoryFn} from '@storybook/react-vite';

import {PageConstructor} from '../../../containers/PageConstructor';
import {ScienceSuggestBlockModel} from '../../../models';
import ScienceSuggest from '../ScienceSuggest';

import data from './data.json';

export default {
    title: 'Blocks/ScienceSuggest',
    component: ScienceSuggest,
} as Meta;

const DefaultTemplate: StoryFn<ScienceSuggestBlockModel> = (args) => (
    <PageConstructor content={{blocks: [args]}} />
);

export const Default = DefaultTemplate.bind({});

Default.args = data.default.content as ScienceSuggestBlockModel;
