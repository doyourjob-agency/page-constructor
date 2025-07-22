import React from 'react';

import {Meta, StoryFn} from '@storybook/react';

import {argEventsContext} from '../../../../.storybook/utils';
import {PageConstructor} from '../../../containers/PageConstructor';
import {EventsSectionBlockModel} from '../../../models';
import EventsSection from '../EventsSection';

import data from './data.json';

export default {
    title: 'Blocks/EventsSection',
    component: EventsSection,
    args: argEventsContext.args,
    argTypes: argEventsContext.argTypes,
} as Meta;

const DefaultTemplate: StoryFn<EventsSectionBlockModel> = (args) => (
    <PageConstructor content={{blocks: [args]}} />
);

export const Default = DefaultTemplate.bind({});

const DefaultArgs = {
    ...data.default.content,
};

Default.args = DefaultArgs as EventsSectionBlockModel;
