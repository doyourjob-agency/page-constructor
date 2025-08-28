import React, {Fragment} from 'react';

import {Meta, StoryFn} from '@storybook/react-vite';

import {yfmTransform} from '../../../../.storybook/utils';
import {PageConstructor} from '../../../containers/PageConstructor';
import {TabsHighlightTableBlockModel, TabsHighlightTableBlockProps} from '../../../models';
import TabsHighlightTableBlock from '../TabsHighlightTable';

import data from './data.json';

export default {
    title: 'Blocks/TabsHighlightTable',
    component: TabsHighlightTableBlock,
    argTypes: {
        description: {control: 'text'},
    },
} as Meta;

const DefaultTemplate: StoryFn<TabsHighlightTableBlockModel> = (args) => (
    <PageConstructor content={{blocks: [args]}} />
);

const ButtonsColSizesTemplate: StoryFn<TabsHighlightTableBlockModel> = (args) => (
    <Fragment>
        <DefaultTemplate
            {...args}
            tabsColSizes={data.buttonsColSizes.wide.colSizes}
            title={data.buttonsColSizes.wide.title}
        />
        <DefaultTemplate
            {...args}
            tabsColSizes={data.buttonsColSizes.narrow.colSizes}
            title={data.buttonsColSizes.narrow.title}
        />
    </Fragment>
);

export const Default = DefaultTemplate.bind({});
export const TabsButtonsColSizes = ButtonsColSizesTemplate.bind({});
export const Centered = DefaultTemplate.bind({});

const DefaultArgs = {
    ...data.default.content,
    items: data.default.content.items.map((item) => ({
        ...item,
        description: yfmTransform(item.description),
        table: {
            ...item.table,
            content: item.table.content.map((row) => row.map((col) => yfmTransform(col))),
        },
    })),
};

Default.args = {
    ...DefaultArgs,
    description: yfmTransform(data.description),
} as TabsHighlightTableBlockProps;

TabsButtonsColSizes.args = {
    ...data.default.content,
    items: DefaultArgs.items.concat(
        DefaultArgs.items.map((item, index) => {
            return {
                ...item,
                tabName: `${item.tabName} ${index}`,
            };
        }),
        DefaultArgs.items.map((item, index) => {
            return {
                ...item,
                tabName: `${item.tabName} ${index} ${index}`,
            };
        }),
    ),
} as TabsHighlightTableBlockModel;

Centered.args = {
    ...DefaultArgs,
    description: yfmTransform(data.description),
    centered: true,
} as TabsHighlightTableBlockModel;
