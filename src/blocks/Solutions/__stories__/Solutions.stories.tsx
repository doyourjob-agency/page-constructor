import React from 'react';

import {Meta, StoryFn} from '@storybook/react-webpack5';

import {argSolutionsContext} from '../../../../.storybook/utils';
import {PageConstructor} from '../../../containers/PageConstructor';
import {SolutionsBlockModel} from '../../../models';
import Solutions from '../Solutions';

import data from './data.json';

export default {
    title: 'Blocks/Solutions',
    component: Solutions,
    args: argSolutionsContext.args,
    argTypes: argSolutionsContext.argTypes,
} as Meta;

const DefaultTemplate: StoryFn<SolutionsBlockModel> = (args) => (
    <PageConstructor content={{blocks: [args]}} />
);

export const Default = DefaultTemplate.bind({});

const DefaultArgs = {
    ...data.default.content,
};

Default.args = DefaultArgs as SolutionsBlockModel;
