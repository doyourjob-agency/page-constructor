import React from 'react';

import {Meta, StoryFn} from '@storybook/react-vite';

import {ReportFileProps} from '../../../models';
import ReportFile from '../ReportFile';

import data from './data.json';

export default {
    component: ReportFile,
    title: 'Components/ReportFile',
} as Meta;

const DefaultTemplate: StoryFn<ReportFileProps> = (args) => (
    <div style={{display: 'flex'}}>
        <ReportFile {...args} />
    </div>
);

export const Default = DefaultTemplate.bind({});

Default.args = data.default.content;
