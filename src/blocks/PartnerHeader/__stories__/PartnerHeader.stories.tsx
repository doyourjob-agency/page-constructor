import React from 'react';

import {Meta, StoryFn} from '@storybook/react-vite';

import {PageConstructor} from '../../../containers/PageConstructor';
import {PartnerHeaderBlockModel} from '../../../models';
import PartnerHeader from '../PartnerHeader';

import data from './data.json';

export default {
    title: 'Blocks/PartnerHeader',
    component: PartnerHeader,
} as Meta;

const DefaultTemplate: StoryFn<PartnerHeaderBlockModel> = (args) => (
    <PageConstructor content={{blocks: [args]}} />
);

export const Default = DefaultTemplate.bind({});

Default.args = data.default.content as PartnerHeaderBlockModel;
