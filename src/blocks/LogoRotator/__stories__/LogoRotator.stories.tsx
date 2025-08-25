import React from 'react';

import {Meta, StoryFn} from '@storybook/react';

import {PageConstructor} from '../../../containers/PageConstructor';
import {LogoRotatorBlockModel, LogoRotatorBlockProps} from '../../../models';
import LogoRotator from '../LogoRotator';

import data from './data.json';

export default {
    title: 'Blocks/LogoRotator',
    component: LogoRotator,
} as Meta;

const DefaultTemplate: StoryFn<LogoRotatorBlockModel> = (args) => (
    <PageConstructor content={{blocks: [args]}} />
);

export const Default = DefaultTemplate.bind({});
export const Light = DefaultTemplate.bind({});

Default.args = data.default.content as LogoRotatorBlockProps;
Light.args = data.light.content as LogoRotatorBlockProps;
