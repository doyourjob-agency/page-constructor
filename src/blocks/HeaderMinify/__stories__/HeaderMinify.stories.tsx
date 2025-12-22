import React from 'react';

import {Meta, StoryFn} from '@storybook/react-vite';

import {yfmTransform} from '../../../../.storybook/utils';
import {PageConstructor} from '../../../containers/PageConstructor';
import {HeaderMinifyBlockModel, HeaderMinifyBlockProps} from '../../../models';
import HeaderMinifyBlock from '../HeaderMinify';

import data from './data.json';

export default {
    title: 'Blocks/HeaderMinify',
    component: HeaderMinifyBlock,
} as Meta;

const DefaultArgs = {
    ...data.default.content,
    description: yfmTransform(data.default.content.description),
};

const DefaultTemplate: StoryFn<HeaderMinifyBlockModel> = (args) => (
    <PageConstructor content={{blocks: [args]}} />
);

export const Default = DefaultTemplate.bind({});

Default.args = {...DefaultArgs} as HeaderMinifyBlockProps;
