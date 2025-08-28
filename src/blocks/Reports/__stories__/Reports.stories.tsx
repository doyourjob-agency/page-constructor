import React from 'react';

import {Meta, StoryFn} from '@storybook/react-vite';

import {argReportsContext} from '../../../../.storybook/utils';
import {PageConstructor} from '../../../containers/PageConstructor';
import {ReportsBlockModel} from '../../../models';
import Reports from '../Reports';

import data from './data.json';

export default {
    title: 'Blocks/Reports',
    component: Reports,
    args: argReportsContext.args,
    argTypes: argReportsContext.argTypes,
} as Meta;

const DefaultTemplate: StoryFn<ReportsBlockModel> = (args) => (
    <PageConstructor content={{blocks: [args]}} />
);

export const Default = DefaultTemplate.bind({});

const DefaultArgs = data.default.content;

Default.args = DefaultArgs as ReportsBlockModel;
