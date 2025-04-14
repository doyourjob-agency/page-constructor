import React from 'react';

import {Meta, StoryFn} from '@storybook/react';

import {argEventsContext, argRouterContext} from '../../../../.storybook/utils';
import {PageConstructor} from '../../../containers/PageConstructor';
import {EventsFeedBlockModel} from '../../../models';
import EventsFeed from '../EventsFeed';

import data from './data.json';

export default {
    title: 'Blocks/EventsFeed',
    component: EventsFeed,
    args: {
        ...argRouterContext.args,
        ...argEventsContext.args,
    },
    argTypes: {
        ...argRouterContext.argTypes,
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
