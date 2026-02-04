import React from 'react';

import {Meta, StoryFn} from '@storybook/react-vite';

import {argBlogPostsContext, argFeedHeaderContext} from '../../../../.storybook/utils';
import {PageConstructor} from '../../../containers/PageConstructor';
import {ResourseHubFeedBlockModel} from '../../../models';
import ResourseHubFeed from '../ResourseHubFeed';

import data from './data.json';

export default {
    title: 'Blocks/ResourseHubFeed',
    component: ResourseHubFeed,
    args: {
        ...argFeedHeaderContext.args,
        ...argBlogPostsContext.args,
    },
    argTypes: {
        ...argFeedHeaderContext.argTypes,
        ...argBlogPostsContext.argTypes,
    },
} as Meta;

const DefaultTemplate: StoryFn<ResourseHubFeedBlockModel> = (args) => (
    <PageConstructor content={{blocks: [args]}} />
);

export const Default = DefaultTemplate.bind({});

const DefaultArgs = {
    ...data.default.content,
};

Default.args = DefaultArgs as ResourseHubFeedBlockModel;
