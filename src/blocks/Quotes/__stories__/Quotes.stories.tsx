import React from 'react';

import {Meta, StoryFn} from '@storybook/react-webpack5';

import {PageConstructor} from '../../../containers/PageConstructor';
import {QuotesBlockModel} from '../../../models';
import Quotes from '../Quotes';

import data from './data.json';

export default {
    title: 'Blocks/Quotes',
    component: Quotes,
} as Meta;

const DefaultTemplate: StoryFn<QuotesBlockModel> = (args) => (
    <PageConstructor content={{blocks: [args]}} />
);

export const Default = DefaultTemplate.bind({});
export const LightTheme = DefaultTemplate.bind({});
export const DarkTheme = DefaultTemplate.bind({});

const DefaultArgs = data.default.content;

Default.args = DefaultArgs as QuotesBlockModel;

Default.argTypes = {
    theme: {table: {disable: true}},
};

LightTheme.args = {
    ...DefaultArgs,
    ...data.lightTheme.content,
} as QuotesBlockModel;

DarkTheme.args = {
    ...DefaultArgs,
    ...data.darkTheme.content,
} as QuotesBlockModel;
