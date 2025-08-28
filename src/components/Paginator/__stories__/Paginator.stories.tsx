import React from 'react';

import {Meta, StoryFn} from '@storybook/react-vite';

import Paginator from '../Paginator';
import {PaginatorProps} from '../types';

import data from './data.json';

export default {
    component: Paginator,
    title: 'Components/Paginator',
} as Meta;

const DefaultTemplate: StoryFn<PaginatorProps> = (args) => (
    <div style={{display: 'flex', justifyContent: 'center', padding: 40}}>
        <Paginator {...args} />
    </div>
);

export const Default = DefaultTemplate.bind({});

Default.args = data.default.content;
