import React from 'react';

import {Meta, StoryFn} from '@storybook/react-vite';

import {yfmTransform} from '../../../../.storybook/utils';
import {PageConstructor} from '../../../containers/PageConstructor';
import {
    FilterCardLayoutBlockModel,
    FilterCardLayoutBlockProps,
    FilterCardLayoutItem,
    LayoutItemModel,
} from '../../../models';
import FilterCardLayout from '../FilterCardLayout';

import data from './data.json';

export default {
    title: 'Blocks/FilterCardLayout',
    component: FilterCardLayout,
} as Meta;

const createCardList: (count: number) => LayoutItemModel[] = (count) =>
    Array.from(
        {length: count},
        (_, index) =>
            ({
                ...data.default.card,
                content: {
                    title: data.default.card.content.title
                        ? `${data.default.card.content.title}&nbsp;${index + 1}`
                        : `${index + 1}`,
                },
            } as LayoutItemModel),
    );

const createItemList: (count: number) => FilterCardLayoutItem[] = (count) =>
    Array.from(
        {length: count},
        (_, index) =>
            ({
                tags: [data.default.filters[index % data.default.filters.length].id],
                ...data.default.layout,
                title: data.default.layout.title
                    ? `${data.default.layout.title}&nbsp;${index + 1}`
                    : `${index + 1}`,
                children: createCardList(6),
            } as FilterCardLayoutItem),
    );

const createArgs = (overrides: Partial<FilterCardLayoutBlockProps>) =>
    ({
        type: 'filter-card-layout-block',
        title: data.default.content.title,
        description: yfmTransform(data.default.content.description),
        tags: data.default.filters,
        items: createItemList(2),
        ...overrides,
    } as FilterCardLayoutBlockProps);

const DefaultTemplate: StoryFn<FilterCardLayoutBlockModel> = (args) => (
    <PageConstructor content={{blocks: [args]}} />
);

export const Default = DefaultTemplate.bind({});
Default.args = createArgs({allTag: false});

export const WithDefaultAllTag = DefaultTemplate.bind({});
WithDefaultAllTag.args = createArgs({allTag: true});

export const WithCustomAllTag = DefaultTemplate.bind({});
WithCustomAllTag.args = createArgs({allTag: 'Custom All Tag Label'});
