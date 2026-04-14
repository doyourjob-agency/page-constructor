import React from 'react';

import type {Meta, StoryFn} from '@storybook/react';

import {PageConstructor} from '../../../containers/PageConstructor';
import {AudioBlockModel} from '../../../models';
import {Audio} from '../Audio';

import data from './data.json';

export default {
    title: 'Blocks/Audio',
    component: Audio,
} as Meta;

const DefaultTemplate: StoryFn<AudioBlockModel> = (args) => (
    <PageConstructor content={{blocks: [args]}} />
);

export const Default = DefaultTemplate.bind({});

Default.args = data.default.content as AudioBlockModel;
