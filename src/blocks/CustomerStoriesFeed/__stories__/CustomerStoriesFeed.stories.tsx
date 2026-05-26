import React from 'react';

import {Meta, StoryFn} from '@storybook/react-vite';

import {argCustomerStoriesPostsContext} from '../../../../.storybook/utils';
import {PageConstructor} from '../../../containers/PageConstructor';
import {CustomerStoriesFeedBlockModel} from '../../../models';
import CustomerStoriesFeed from '../CustomerStoriesFeed';

import data from './data.json';

export default {
    title: 'Blocks/CustomerStoriesFeed',
    component: CustomerStoriesFeed,
    args: argCustomerStoriesPostsContext.args,
    argTypes: argCustomerStoriesPostsContext.argTypes,
} as Meta;

const DefaultTemplate: StoryFn<CustomerStoriesFeedBlockModel> = (args) => (
    <PageConstructor content={{blocks: [args]}} />
);

export const Default = DefaultTemplate.bind({});

Default.args = data.default.content as CustomerStoriesFeedBlockModel;
