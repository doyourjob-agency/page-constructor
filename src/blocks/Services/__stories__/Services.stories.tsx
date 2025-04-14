import React from 'react';

import {Meta, StoryFn} from '@storybook/react';

import {argServicesContext} from '../../../../.storybook/utils';
import {PageConstructor} from '../../../containers/PageConstructor';
import {ServicesBlockModel} from '../../../models';
import Services from '../Services';

import data from './data.json';

export default {
    title: 'Blocks/Services',
    component: Services,
    args: argServicesContext.args,
    argTypes: {
        ...argServicesContext.argTypes,
        serviceLinkType: {table: {disable: true}},
    },
} as Meta;

const DefaultTemplate: StoryFn<ServicesBlockModel> = (args) => (
    <PageConstructor content={{blocks: [args]}} />
);

export const Default = DefaultTemplate.bind({});
export const TypeDoc = DefaultTemplate.bind({});
export const TypePrice = DefaultTemplate.bind({});

const DefaultArgs = data.default.content;

Default.args = DefaultArgs as ServicesBlockModel;

TypeDoc.args = {
    ...DefaultArgs,
    ...data.typeDoc.content,
} as ServicesBlockModel;

TypePrice.args = {
    ...DefaultArgs,
    ...data.typePrice.content,
} as ServicesBlockModel;
