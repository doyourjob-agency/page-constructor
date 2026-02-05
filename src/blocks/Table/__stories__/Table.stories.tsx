import React from 'react';

import {Meta, StoryFn} from '@storybook/react-vite';

import {yfmTransform} from '../../../../.storybook/utils';
import {PageConstructor} from '../../../containers/PageConstructor';
import {TableBlockModel} from '../../../models';
import Table from '../Table';

import data from './data.json';

export default {
    component: Table,
    title: 'Blocks/Table',
} as Meta;

const DefaultTemplate: StoryFn<TableBlockModel> = (args) => (
    <PageConstructor content={{blocks: [args]}} />
);

export const Default = DefaultTemplate.bind({});

Default.args = {
    ...data.default.content,
    description: yfmTransform(data.default.content.description),
} as TableBlockModel;

export const Tick = DefaultTemplate.bind({});

Tick.args = {
    ...data.tick.content,
    description: yfmTransform(data.tick.content.description),
} as TableBlockModel;

export const TitleSizeXS = DefaultTemplate.bind({});

TitleSizeXS.args = {
    ...data.default.content,
    description: yfmTransform(data.default.content.description),
    titleSize: 'xs',
} as TableBlockModel;

export const TitleSizeS = DefaultTemplate.bind({});

TitleSizeS.args = {
    ...data.default.content,
    description: yfmTransform(data.default.content.description),
    titleSize: 's',
} as TableBlockModel;

export const TitleSizeM = DefaultTemplate.bind({});

TitleSizeM.args = {
    ...data.default.content,
    description: yfmTransform(data.default.content.description),
    titleSize: 'm',
} as TableBlockModel;

export const TitleSizeL = DefaultTemplate.bind({});

TitleSizeL.args = {
    ...data.default.content,
    description: yfmTransform(data.default.content.description),
    titleSize: 'l',
} as TableBlockModel;
