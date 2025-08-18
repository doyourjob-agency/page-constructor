import React from 'react';

import {Meta, StoryFn} from '@storybook/react';

import {PageConstructor} from '../../../containers/PageConstructor';
import {PartnersBlockModel, PartnersBlockProps} from '../../../models';
import Partners from '../Partners';

import data from './data.json';

export default {
    title: 'Blocks/Partners',
    component: Partners,
} as Meta;

const DefaultTemplate: StoryFn<PartnersBlockModel> = (args) => (
    <PageConstructor content={{blocks: [args]}} />
);

export const Default = DefaultTemplate.bind({});

Default.args = data.default.content as PartnersBlockProps;
