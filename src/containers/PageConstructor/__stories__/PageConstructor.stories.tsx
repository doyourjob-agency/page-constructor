import React from 'react';

import {Meta, StoryFn} from '@storybook/react-vite';

import {argHeaderContext} from '../../../../.storybook/utils';
import {HeaderContext, HeaderContextProps} from '../../../context/headerContext';
import {PageConstructor, PageConstructorProps} from '../PageConstructor';

import data from './data.json';

export default {
    title: 'Containers/PageConstructor',
    component: PageConstructor,
    argTypes: {
        ...argHeaderContext.argTypes,
    },
} as Meta;

const DefaultTemplate: StoryFn<PageConstructorProps> = (args) => (
    <HeaderContext.Provider value={argHeaderContext.args as HeaderContextProps}>
        <PageConstructor {...args} />
    </HeaderContext.Provider>
);

const WithFullWidthBackgroundMediaTemplate: StoryFn<PageConstructorProps> = (args) => (
    <HeaderContext.Provider value={argHeaderContext.args as HeaderContextProps}>
        <PageConstructor {...args} />
    </HeaderContext.Provider>
);

export const Default = DefaultTemplate.bind({});
export const withNavigation = DefaultTemplate.bind({});
export const WithFullWidthBackgroundMedia = WithFullWidthBackgroundMediaTemplate.bind({});
export const Branded = DefaultTemplate.bind({});

Default.args = data.default as PageConstructorProps;
withNavigation.args = {
    content: {
        blocks: data.default.content.blocks,
    },
    navigation: data.navigation,
} as PageConstructorProps;
WithFullWidthBackgroundMedia.args = {
    content: {
        blocks: data.default.content.blocks,
        background: data.withFullWidthBackgroundMedia.background,
    },
} as PageConstructorProps;
Branded.args = {
    ...data.default,
    isBranded: true,
};
