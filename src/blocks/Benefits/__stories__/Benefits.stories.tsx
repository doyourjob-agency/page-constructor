import React from 'react';

import {Meta, StoryFn} from '@storybook/react';

import {yfmTransform} from '../../../../.storybook/utils';
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

const content = data.default.content as BenefitsBlockProps;

Default.args = {
    ...content,
    textOne: yfmTransform(content.textOne || ''),
    textTwo: yfmTransform(content.textTwo || ''),
} as BenefitsBlockProps;
