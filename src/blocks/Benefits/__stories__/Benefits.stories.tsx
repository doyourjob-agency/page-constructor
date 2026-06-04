import React from 'react';

import {Meta, StoryFn} from '@storybook/react';

import {PageConstructor} from '../../../containers/PageConstructor';
import {BenefitsBlockModel, BenefitsBlockProps} from '../../../models';
import Benefits from '../Benefits';

import data from './data.json';

export default {
    title: 'Blocks/Benefits',
    component: Benefits,
    args: {
        theme: 'light',
    },
} as Meta;

const DefaultTemplate: StoryFn<BenefitsBlockModel> = (args) => (
    <PageConstructor content={{blocks: [args]}} />
);

export const Default = DefaultTemplate.bind({});
Default.args = data.default.content as BenefitsBlockProps;

export const Animated = DefaultTemplate.bind({});
Animated.args = {
    ...data.default.content,
    animated: true,
} as BenefitsBlockProps;
