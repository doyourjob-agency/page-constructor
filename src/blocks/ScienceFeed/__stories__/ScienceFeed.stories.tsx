import React from 'react';

import {Meta, StoryFn} from '@storybook/react-vite';

import {argSciencePostsContext} from '../../../../.storybook/utils';
import {PageConstructor} from '../../../containers/PageConstructor';
import {ScienceFeedBlockModel} from '../../../models';
import {yfmTransformer} from '../../../text-transform';
import ScienceFeed from '../ScienceFeed';

import data from './data.json';

export default {
    title: 'Blocks/ScienceFeed',
    component: ScienceFeed,
    args: argSciencePostsContext.args,
    argTypes: argSciencePostsContext.argTypes,
} as Meta;

const DefaultTemplate: StoryFn<ScienceFeedBlockModel> = (args) => (
    <PageConstructor content={{blocks: [args]}} />
);

export const Default = DefaultTemplate.bind({});

const DefaultArgs = {
    ...data.default.content,
    text: yfmTransformer('ru', data.default.content.text),
};

Default.args = DefaultArgs as ScienceFeedBlockModel;
