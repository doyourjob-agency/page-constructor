import React from 'react';

import {Meta, StoryFn} from '@storybook/react-vite';

import {argFeedHeaderContext, argResourceHubPostsContext} from '../../../../.storybook/utils';
import {PageConstructor} from '../../../containers/PageConstructor';
import {ResourceHubPostsBlockModel} from '../../../models';
import ResourceHubPosts from '../ResourceHubPosts';

import data from './data.json';

export default {
    title: 'Blocks/ResourceHubPosts',
    component: ResourceHubPosts,
    args: {
        ...argFeedHeaderContext.args,
        ...argResourceHubPostsContext.args,
    },
    argTypes: {
        ...argFeedHeaderContext.argTypes,
        ...argResourceHubPostsContext.argTypes,
    },
} as Meta;

const DefaultTemplate: StoryFn<ResourceHubPostsBlockModel> = (args) => (
    <PageConstructor content={{blocks: [args]}} />
);

export const Default = DefaultTemplate.bind({});

const DefaultArgs = {
    ...data.default.content,
};

Default.args = DefaultArgs as ResourceHubPostsBlockModel;
