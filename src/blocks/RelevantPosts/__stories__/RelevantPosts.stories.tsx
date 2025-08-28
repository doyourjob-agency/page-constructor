import React from 'react';

import {Meta, StoryFn} from '@storybook/react-vite';

import {argRelevantPostsContext} from '../../../../.storybook/utils';
import {PageConstructor} from '../../../containers/PageConstructor';
import {RelevantPostsBlockModel} from '../../../models';
import RelevantPosts from '../RelevantPosts';

import data from './data.json';

export default {
    title: 'Blocks/RelevantPosts',
    component: RelevantPosts,
    args: {
        ...argRelevantPostsContext.args,
    },
    argTypes: {
        ...argRelevantPostsContext.argTypes,
    },
} as Meta;

const DefaultTemplate: StoryFn<RelevantPostsBlockModel> = (args) => (
    <PageConstructor content={{blocks: [args]}} />
);

export const Default = DefaultTemplate.bind({});

const DefaultArgs = {
    ...data.default.content,
};

Default.args = DefaultArgs as RelevantPostsBlockModel;
