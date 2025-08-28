import React from 'react';

import {Meta, StoryFn} from '@storybook/react-vite';

import {argEventsContext, argFeedHeaderContext} from '../../../../.storybook/utils';
import {PageConstructor} from '../../../containers/PageConstructor';
import {EventsFeedBlockModel} from '../../../models';
import EventsFeed from '../EventsFeed';

import data from './data.json';

export default {
    title: 'Blocks/EventsFeed',
    component: EventsFeed,
    args: {
        ...argFeedHeaderContext.args,
        ...argEventsContext.args,
    },
    argTypes: {
        ...argFeedHeaderContext.argTypes,
        ...argEventsContext.argTypes,
    },
} as Meta;

const DefaultTemplate: StoryFn<EventsFeedBlockModel> = (args) => (
    <PageConstructor content={{blocks: [args]}} />
);

export const Default = DefaultTemplate.bind({});

const DefaultArgs = {
    ...data.default.content,
};

Default.args = DefaultArgs as EventsFeedBlockModel;
