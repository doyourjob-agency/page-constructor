import React from 'react';

import {Meta, StoryFn} from '@storybook/react-vite';

import EmptyPlug, {EmptyPlugProps} from '../EmptyPlug';

import data from './data.json';

export default {
    component: EmptyPlug,
    title: 'Components/EmptyPlug',
} as Meta;

const DefaultTemplate: StoryFn<EmptyPlugProps> = (args) => (
    <div style={{display: 'flex', justifyContent: 'center', padding: 40}}>
        <EmptyPlug {...args} />
    </div>
);

export const Default = DefaultTemplate.bind({});

Default.args = data.default.content;
