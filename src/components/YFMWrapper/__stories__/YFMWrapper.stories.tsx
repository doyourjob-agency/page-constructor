import React from 'react';

import {Meta, StoryFn} from '@storybook/react-vite';

import {ClassNameProps} from '../../../models';
import YFMWrapper, {YFMWrapperProps} from '../YFMWrapper';

import data from './data.json';

export default {
    component: YFMWrapper,
    title: 'Components/YFMWrapper',
} as Meta;

const DefaultTemplate: StoryFn<YFMWrapperProps & ClassNameProps> = (args) => (
    <YFMWrapper {...args} />
);

export const Default = DefaultTemplate.bind({});

Default.args = data.default.content;
