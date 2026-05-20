import React from 'react';

import {Meta, StoryFn} from '@storybook/react-vite';

import {argFeedHeaderContext, argPartnersContext} from '../../../../.storybook/utils';
import {PageConstructor} from '../../../containers/PageConstructor';
import {PartnersFeedBlockModel} from '../../../models';
import PartnersFeed from '../PartnersFeed';

import data from './data.json';

export default {
    title: 'Blocks/PartnersFeed',
    component: PartnersFeed,
    args: {
        ...argFeedHeaderContext.args,
        ...argPartnersContext.args,
    },
    argTypes: {
        ...argFeedHeaderContext.argTypes,
        ...argPartnersContext.argTypes,
    },
} as Meta;

const DefaultTemplate: StoryFn<PartnersFeedBlockModel> = (args) => (
    <PageConstructor content={{blocks: [args]}} />
);

export const Default = DefaultTemplate.bind({});

const DefaultArgs = {
    ...data.default.content,
};

Default.args = DefaultArgs as PartnersFeedBlockModel;
