import React from 'react';

import {Meta, StoryFn} from '@storybook/react';

import {PageConstructor} from '../../../containers/PageConstructor';
import {MarqueeLinksModel, MarqueeLinksProps} from '../../../models';
import MarqueeLinks from '../MarqueeLinks';

import data from './data.json';

export default {
    title: 'Blocks/MarqueeLinks',
    component: MarqueeLinks,
} as Meta;

const DefaultTemplate: StoryFn<MarqueeLinksModel> = (args) => (
    <PageConstructor content={{blocks: [args]}} />
);

export const Default = DefaultTemplate.bind({});

Default.args = data.default.content as MarqueeLinksProps;
