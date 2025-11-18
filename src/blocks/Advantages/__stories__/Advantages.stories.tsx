import React from 'react';

import {Meta, StoryFn} from '@storybook/react';

import {yfmTransform} from '../../../../.storybook/utils';
import {PageConstructor} from '../../../containers/PageConstructor';
import {AdvantagesBlockModel, AdvantagesBlockProps} from '../../../models';
import Advantages from '../Advantages';

import data from './data.json';

export default {
    title: 'Blocks/Advantages',
    component: Advantages,
    args: {
        theme: 'light',
    },
} as Meta;

const DefaultTemplate: StoryFn<AdvantagesBlockModel> = (args) => (
    <PageConstructor content={{blocks: [args]}} />
);

export const Default = DefaultTemplate.bind({});

Default.args = {
    ...data.default.content,
    title: yfmTransform(data.default.content.title),
} as AdvantagesBlockProps;
