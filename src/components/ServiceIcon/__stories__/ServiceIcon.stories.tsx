import React from 'react';

import {Meta, StoryFn} from '@storybook/react';

import {argServicesContext} from '../../../../.storybook/utils';
import ServiceIcon, {ServiceIconProps} from '../ServiceIcon';

import data from './data.json';

export default {
    component: ServiceIcon,
    title: 'Components/ServiceIcon',
    args: argServicesContext.args,
    argTypes: argServicesContext.argTypes,
} as Meta;

const DefaultTemplate: StoryFn<ServiceIconProps> = (args) => <ServiceIcon {...args} />;

export const Default = DefaultTemplate.bind({});

Default.args = data.default.content as ServiceIconProps;
