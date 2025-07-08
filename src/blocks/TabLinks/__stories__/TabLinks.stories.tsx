import React from 'react';

import {Meta, StoryFn} from '@storybook/react';

import {PageConstructor} from '../../../containers/PageConstructor';
import {TabLinksBlockModel} from '../../../models';
import TabLinks from '../TabLinks';

import data from './data.json';

export default {
    title: 'Blocks/TabLinks',
    component: TabLinks,
} as Meta;

const DefaultTemplate: StoryFn<TabLinksBlockModel> = (args) => (
    <PageConstructor content={{blocks: [args]}} />
);

export const Default = DefaultTemplate.bind({});

Default.args = data.default.content as TabLinksBlockModel;
