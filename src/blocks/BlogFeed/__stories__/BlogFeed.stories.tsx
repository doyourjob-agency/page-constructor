import React from 'react';

import {Meta, StoryFn} from '@storybook/react';

import {argBlogPostsContext, argFeedHeaderContext} from '../../../../.storybook/utils';
import {PageConstructor} from '../../../containers/PageConstructor';
import {BlogFeedBlockModel} from '../../../models';
import BlogFeed from '../BlogFeed';

import data from './data.json';

export default {
    title: 'Blocks/BlogFeed',
    component: BlogFeed,
    args: {
        ...argFeedHeaderContext.args,
        ...argBlogPostsContext.args,
    },
    argTypes: {
        ...argFeedHeaderContext.argTypes,
        ...argBlogPostsContext.argTypes,
    },
} as Meta;

const DefaultTemplate: StoryFn<BlogFeedBlockModel> = (args) => (
    <PageConstructor content={{blocks: [args]}} />
);

export const Default = DefaultTemplate.bind({});

const DefaultArgs = {
    ...data.default.content,
};

Default.args = DefaultArgs as BlogFeedBlockModel;
