import React from 'react';

import {Meta, StoryFn} from '@storybook/react';

import {argReportsSectionsContext} from '../../../../.storybook/utils';
import {PageConstructor} from '../../../containers/PageConstructor';
import {ReportsSectionsBlockModel} from '../../../models';
import ReportsSections from '../ReportsSections';

import data from './data.json';

export default {
    title: 'Blocks/ReportsSections',
    component: ReportsSections,
    args: argReportsSectionsContext.args,
    argTypes: argReportsSectionsContext.argTypes,
} as Meta;

const DefaultTemplate: StoryFn<ReportsSectionsBlockModel> = (args) => (
    <PageConstructor content={{blocks: [args]}} />
);

export const Default = DefaultTemplate.bind({});

const DefaultArgs = data.default.content;

Default.args = DefaultArgs as ReportsSectionsBlockModel;
