import React from 'react';

import {Meta, StoryFn} from '@storybook/react-vite';

import {PageConstructor} from '../../../containers/PageConstructor';
import {ScienceHeaderBlockModel} from '../../../models';
import {yfmTransformer} from '../../../text-transform';
import ScienceHeader from '../ScienceHeader';

import data from './data.json';

export default {
    title: 'Blocks/ScienceHeader',
    component: ScienceHeader,
} as Meta;

const DefaultTemplate: StoryFn<ScienceHeaderBlockModel> = (args) => (
    <PageConstructor content={{blocks: [args]}} />
);

export const Default = DefaultTemplate.bind({});

const DefaultArgs = {
    ...data.default.content,
    description: yfmTransformer('ru', data.default.content.description),
};

Default.args = DefaultArgs as ScienceHeaderBlockModel;
