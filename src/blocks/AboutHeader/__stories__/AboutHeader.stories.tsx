import React from 'react';

import {Meta, StoryFn} from '@storybook/react-vite';

import {yfmTransform} from '../../../../.storybook/utils';
import {PageConstructor} from '../../../containers/PageConstructor';
import {AboutHeaderBlockModel} from '../../../models';
import AboutHeader from '../AboutHeader';

import data from './data.json';

export default {
    title: 'Blocks/AboutHeader',
    component: AboutHeader,
} as Meta;

const DefaultTemplate: StoryFn<AboutHeaderBlockModel> = (args) => (
    <PageConstructor content={{blocks: [args]}} />
);

export const Default = DefaultTemplate.bind({});

const DefaultArgs = {
    ...data.default.content,
    text: yfmTransform(data.default.content.text),
};

Default.args = DefaultArgs as AboutHeaderBlockModel;
