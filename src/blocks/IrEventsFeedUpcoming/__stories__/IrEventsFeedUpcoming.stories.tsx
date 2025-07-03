import React from 'react';

import {Meta, StoryFn} from '@storybook/react';

import {argEventsContext} from '../../../../.storybook/utils';
import {PageConstructor} from '../../../containers/PageConstructor';
import {IrEventsFeedUpcomingBlockModel} from '../../../models';
import IrEventsFeedUpcoming from '../IrEventsFeedUpcoming';

import data from './data.json';

export default {
    title: 'Blocks/IrEventsFeedUpcoming',
    component: IrEventsFeedUpcoming,
    args: {
        eventsUpcomingContext: argEventsContext.args.eventsUpcomingContext,
    },
    argTypes: {
        eventsUpcomingContext: argEventsContext.argTypes.eventsUpcomingContext,
    },
} as Meta;

const DefaultTemplate: StoryFn<IrEventsFeedUpcomingBlockModel> = (args) => (
    <PageConstructor content={{blocks: [args]}} />
);

export const Default = DefaultTemplate.bind({});

const DefaultArgs = {
    ...data.default.content,
};

Default.args = DefaultArgs as IrEventsFeedUpcomingBlockModel;
