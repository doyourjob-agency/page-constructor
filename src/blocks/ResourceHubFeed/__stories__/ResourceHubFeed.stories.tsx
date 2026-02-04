import React from 'react';

import {Meta, StoryFn} from '@storybook/react-vite';

import {argBlogPostsContext, argFeedHeaderContext} from '../../../../.storybook/utils';
import {PageConstructor} from '../../../containers/PageConstructor';
import {ResourceHubFeedBlockModel} from '../../../models';
import ResourceHubFeed from '../ResourceHubFeed';

import data from './data.json';

export default {
    title: 'Blocks/ResourceHubFeed',
    component: ResourceHubFeed,
    args: {
        ...argFeedHeaderContext.args,
        ...argBlogPostsContext.args,
    },
    argTypes: {
        ...argFeedHeaderContext.argTypes,
        ...argBlogPostsContext.argTypes,
    },
} as Meta;

const DefaultTemplate: StoryFn<ResourceHubFeedBlockModel> = (args) => (
    <PageConstructor content={{blocks: [args]}} />
);

export const Default = DefaultTemplate.bind({});

const DefaultArgs = {
    ...data.default.content,
};

Default.args = DefaultArgs as ResourceHubFeedBlockModel;
