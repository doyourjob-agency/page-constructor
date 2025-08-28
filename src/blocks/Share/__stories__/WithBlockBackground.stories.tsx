import React from 'react';

import {Lang as UIKitLang, configure as uikitConfigure} from '@gravity-ui/uikit';
import {Meta, StoryFn} from '@storybook/react-vite';

import {PageConstructor} from '../../../containers/PageConstructor';
import {ShareBLockModel, ShareBlockProps} from '../../../models';
import Share from '../Share';

import data from './data.json';

export default {
    component: Share,
    title: 'Blocks/WithBlockBackground',
} as Meta;

uikitConfigure({lang: UIKitLang.En});

const DefaultTemplate: StoryFn<ShareBLockModel> = (args) => (
    <PageConstructor content={{blocks: [args]}} />
);

export const Default = DefaultTemplate.bind({});
export const BlockBackground = DefaultTemplate.bind({});
export const BlockBackgroundGradient = DefaultTemplate.bind({});

Default.args = data.withBlockBackgroundString.content as ShareBlockProps;
BlockBackground.args = data.withBlockBackground.content as ShareBlockProps;
BlockBackgroundGradient.args = data.withBlockBackgroundGradient.content as ShareBlockProps;
