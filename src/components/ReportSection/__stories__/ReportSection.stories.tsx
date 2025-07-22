import React from 'react';

import {Meta, StoryFn} from '@storybook/react';

import {ReportSectionProps} from '../../../models';
import ReportSection from '../ReportSection';

import data from './data.json';

export default {
    component: ReportSection,
    title: 'Components/ReportSection',
} as Meta;

const DefaultTemplate: StoryFn<ReportSectionProps> = (args) => (
    <div style={{padding: 40}}>
        <ReportSection {...args} />
    </div>
);

export const Default = DefaultTemplate.bind({});

Default.args = data.default.content;
