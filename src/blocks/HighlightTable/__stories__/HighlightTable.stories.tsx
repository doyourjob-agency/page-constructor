import React from 'react';

import {Meta, StoryFn} from '@storybook/react-vite';

import {yfmTransform} from '../../../../.storybook/utils';
import {PageConstructor} from '../../../containers/PageConstructor';
import {HighlightTableBlockModel} from '../../../models';
import HighlightTable from '../HighlightTable';

import data from './data.json';

const getArgs = (content: HighlightTableBlockModel) => {
    return {
        ...content,
        description: yfmTransform(content.description || ''),
        table: {
            ...content.table,
            content: content.table.content.map((row) =>
                row.map((col) =>
                    typeof col === 'object'
                        ? {...col, cell: yfmTransform(col.cell)}
                        : yfmTransform(col),
                ),
            ),
        },
    };
};

export default {
    component: HighlightTable,
    title: 'Blocks/HighlightTable',
    argTypes: {
        contentSize: {
            table: {
                defaultValue: {summary: 's'},
            },
        },
        legendPosition: {
            table: {
                defaultValue: {summary: 'top'},
            },
        },
        legendAlign: {
            table: {
                defaultValue: {summary: 'center'},
            },
        },
    },
} as Meta;

const DefaultTemplate: StoryFn<HighlightTableBlockModel> = (args) => (
    <PageConstructor content={{blocks: [args]}} />
);

export const Default = DefaultTemplate.bind({});
export const WithHover = DefaultTemplate.bind({});

Default.args = getArgs(data.default.content as HighlightTableBlockModel);
WithHover.args = getArgs(data.withHover.content as HighlightTableBlockModel);
