import React from 'react';

import {Meta, StoryFn} from '@storybook/react';

import {argReportsCardsContext} from '../../../../.storybook/utils';
import {PageConstructor} from '../../../containers/PageConstructor';
import {RelevantReportsCardsBlockModel} from '../../../models';
import RelevantReportsCards from '../RelevantReportsCards';

import data from './data.json';

export default {
    title: 'Blocks/RelevantReportsCards',
    component: RelevantReportsCards,
    args: {
        ...argReportsCardsContext.args,
    },
    argTypes: {
        ...argReportsCardsContext.argTypes,
    },
} as Meta;

const DefaultTemplate: StoryFn<RelevantReportsCardsBlockModel> = (args) => (
    <PageConstructor content={{blocks: [args]}} />
);

export const Default = DefaultTemplate.bind({});

const DefaultArgs = {
    ...data.default.content,
};

Default.args = DefaultArgs as RelevantReportsCardsBlockModel;
