import React from 'react';

import {Meta, StoryFn} from '@storybook/react-vite';

import {PageConstructor} from '../../../containers/PageConstructor/PageConstructor';
import {BannerMinifyBlockModel, BannerMinifyBlockProps} from '../../../models';
import BannerMinify from '../BannerMinify';

import data from './data.json';

export default {
    title: 'Blocks/BannerMinify',
    component: BannerMinify,
} as Meta;

const DefaultTemplate: StoryFn<BannerMinifyBlockModel> = (args) => (
    <PageConstructor
        content={{
            blocks: [args],
        }}
    />
);

export const Default = DefaultTemplate.bind([]);

Default.args = {
    ...data.default.content,
} as BannerMinifyBlockProps;
