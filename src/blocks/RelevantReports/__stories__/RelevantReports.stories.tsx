import React from 'react';

import {Meta, StoryFn} from '@storybook/react';

import {argReportsContext} from '../../../../.storybook/utils';
import {PageConstructor} from '../../../containers/PageConstructor';
import {RelevantReportsBlockModel} from '../../../models';
import RelevantReports from '../RelevantReports';

import data from './data.json';

export default {
    title: 'Blocks/RelevantReports',
    component: RelevantReports,
    args: {
        ...argReportsContext.args,
    },
    argTypes: {
        ...argReportsContext.argTypes,
    },
} as Meta;

const DefaultTemplate: StoryFn<RelevantReportsBlockModel> = (args) => (
    <PageConstructor content={{blocks: [args]}} />
);

export const Default = DefaultTemplate.bind({});

const DefaultArgs = {
    ...data.default.content,
};

Default.args = DefaultArgs as RelevantReportsBlockModel;
