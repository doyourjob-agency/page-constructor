import React from 'react';

import {Meta, StoryFn} from '@storybook/react-webpack5';

import {argServicesContext} from '../../../../.storybook/utils';
import {ServiceLabelProps} from '../../../models';
import ServiceLabel from '../ServiceLabel';

import data from './data.json';

export default {
    component: ServiceLabel,
    title: 'Components/ServiceLabel',
    args: argServicesContext.args,
    argTypes: argServicesContext.argTypes,
} as Meta;

const DefaultTemplate: StoryFn<ServiceLabelProps> = (args) => <ServiceLabel {...args} />;

export const Default = DefaultTemplate.bind({});

Default.args = data.default.content as ServiceLabelProps;
