import React from 'react';

import {Meta, StoryFn} from '@storybook/react';

import {ReportItemProps} from '../../../models';
import ReportItem from '../ReportItem';

import data from './data.json';

export default {
    component: ReportItem,
    title: 'Components/ReportItem',
} as Meta;

const DefaultTemplate: StoryFn<ReportItemProps> = (args) => (
    <ul style={{display: 'flex', listStyle: 'none', padding: 0, flexDirection: 'column'}}>
        <ReportItem {...args} />
    </ul>
);

export const Default = DefaultTemplate.bind({});

Default.args = data.default.content;
