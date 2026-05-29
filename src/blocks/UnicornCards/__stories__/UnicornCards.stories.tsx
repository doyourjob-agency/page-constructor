import React from 'react';

import {Meta, StoryFn} from '@storybook/react-vite';

import {PageConstructor} from '../../../containers/PageConstructor';
import {UnicornCardsBlockModel, UnicornCardsBlockProps} from '../../../models';
import UnicornCards from '../UnicornCards';

import data from './data.json';

export default {
    title: 'Blocks/UnicornCards',
    component: UnicornCards,
} as Meta;

const DefaultTemplate: StoryFn<UnicornCardsBlockModel> = (args) => (
    <PageConstructor content={{blocks: [args]}} />
);

export const Default = DefaultTemplate.bind({});

Default.args = data.default.content as UnicornCardsBlockProps;
