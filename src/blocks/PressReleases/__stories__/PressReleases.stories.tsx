import React from 'react';

import {Meta, StoryFn} from '@storybook/react-webpack5';

import {argPressReleasesContext} from '../../../../.storybook/utils';
import {PageConstructor} from '../../../containers/PageConstructor';
import {PressReleasesBlockModel} from '../../../models';
import PressReleases from '../PressReleases';

import data from './data.json';

export default {
    title: 'Blocks/PressReleases',
    component: PressReleases,
    args: {
        ...argPressReleasesContext.args,
    },
    argTypes: {
        ...argPressReleasesContext.argTypes,
    },
} as Meta;

const DefaultTemplate: StoryFn<PressReleasesBlockModel> = (args) => (
    <PageConstructor content={{blocks: [args]}} />
);

export const Default = DefaultTemplate.bind({});

const DefaultArgs = {
    ...data.default.content,
};

Default.args = DefaultArgs as PressReleasesBlockModel;
