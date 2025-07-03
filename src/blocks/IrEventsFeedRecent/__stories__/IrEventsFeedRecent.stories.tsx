import React from 'react';

import {Meta, StoryFn} from '@storybook/react';

import {argEventsContext} from '../../../../.storybook/utils';
import {PageConstructor} from '../../../containers/PageConstructor';
import {IrEventsFeedRecentBlockModel} from '../../../models';
import IrEventsFeedRecent from '../IrEventsFeedRecent';

import data from './data.json';

export default {
    title: 'Blocks/IrEventsFeedRecent',
    component: IrEventsFeedRecent,
    args: {
        eventsRecentContext: argEventsContext.args.eventsRecentContext,
    },
    argTypes: {
        eventsRecentContext: argEventsContext.argTypes.eventsRecentContext,
    },
} as Meta;

const DefaultTemplate: StoryFn<IrEventsFeedRecentBlockModel> = (args) => (
    <PageConstructor content={{blocks: [args]}} />
);

export const Default = DefaultTemplate.bind({});

const DefaultArgs = {
    ...data.default.content,
};

Default.args = DefaultArgs as IrEventsFeedRecentBlockModel;
