import React from 'react';

import {Meta, StoryFn} from '@storybook/react';

import {argServicesContext, yfmTransform} from '../../../../.storybook/utils';
import {CardProps} from '../../../models/constructor-items/sub-blocks';
import Card from '../Card';

import data from './data.json';

export default {
    component: Card,
    title: 'Components/Cards/Card',
    args: argServicesContext.args,
    argTypes: argServicesContext.argTypes,
} as Meta;

const DefaultTemplate: StoryFn<CardProps> = (args) => (
    <div style={{maxWidth: '400px', margin: '0 auto'}}>
        <Card {...args} />
    </div>
);

export const Default = DefaultTemplate.bind({});
export const WithLabel = DefaultTemplate.bind({});
export const WithService = DefaultTemplate.bind({});
export const WithBorder = DefaultTemplate.bind({});

const DefaultArgs = {
    ...data.default.content,
    text: yfmTransform(data.default.content.text),
};

Default.args = DefaultArgs as CardProps;

WithLabel.args = {
    ...DefaultArgs,
    ...data.withLabel.content,
} as CardProps;

WithService.args = {
    ...data.withService.content,
    ...DefaultArgs,
} as CardProps;

WithBorder.args = {
    ...data.withBorder.content,
    ...DefaultArgs,
} as CardProps;
