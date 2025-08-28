import React from 'react';

import {Meta, StoryFn} from '@storybook/react-vite';

import {argReportsCardsContext, yfmTransform} from '../../../../.storybook/utils';
import {PageConstructor} from '../../../containers/PageConstructor';
import {ReportsCardsBlockModel} from '../../../models';
import ReportsCards from '../ReportsCards';

import data from './data.json';

export default {
    title: 'Blocks/ReportsCards',
    component: ReportsCards,
    args: argReportsCardsContext.args,
    argTypes: argReportsCardsContext.argTypes,
} as Meta;

const DefaultTemplate: StoryFn<ReportsCardsBlockModel> = (args) => (
    <PageConstructor content={{blocks: [args]}} />
);

export const Default = DefaultTemplate.bind({});

const DefaultArgs = {
    ...data.default.content,
    postscript: yfmTransform(data.default.content.postscript),
};

Default.args = DefaultArgs as ReportsCardsBlockModel;
