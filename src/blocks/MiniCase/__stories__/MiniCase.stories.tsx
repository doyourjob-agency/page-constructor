import React from 'react';

import {Meta, StoryFn} from '@storybook/react-webpack5';

import {argMiniCaseContext} from '../../../../.storybook/utils';
import {PageConstructor} from '../../../containers/PageConstructor';
import {MiniCaseBlockModel, MiniCaseBlockProps} from '../../../models';
import MiniCaseBlock from '../MiniCase';

import data from './data.json';

export default {
    component: MiniCaseBlock,
    title: 'Blocks/MiniCaseBlock',
    args: argMiniCaseContext.args,
    argTypes: argMiniCaseContext.argTypes,
} as Meta;

const DefaultTemplate: StoryFn<MiniCaseBlockModel> = (args) => (
    <PageConstructor content={{blocks: [args]}} />
);

export const Default = DefaultTemplate.bind({});

const DefaultArgs = data.default.content;

Default.args = DefaultArgs as MiniCaseBlockProps;
