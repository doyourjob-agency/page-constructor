import React from 'react';

import {Meta, StoryFn} from '@storybook/react-vite';

import {PageConstructor} from '../../../containers/PageConstructor/PageConstructor';
import {SidebarWidgetBlockModel, SidebarWidgetBlockProps} from '../../../models';
import SidebarWidget from '../SidebarWidget';

import data from './data.json';

export default {
    title: 'Blocks/SidebarWidget',
    component: SidebarWidget,
} as Meta;

const DefaultTemplate: StoryFn<SidebarWidgetBlockModel> = (args) => (
    <PageConstructor content={{blocks: [args]}} />
);

export const Default = DefaultTemplate.bind([]);

Default.args = data.default.content as SidebarWidgetBlockProps;
