import React from 'react';

import {Meta, StoryFn} from '@storybook/react';

import {yfmTransform} from '../../../../.storybook/utils';
import {PageConstructor} from '../../../containers/PageConstructor';
import {HighlightTableBlockModel} from '../../../models';
import HighlightTable from '../HighlightTable';

import data from './data.json';

export default {
    component: HighlightTable,
    title: 'Blocks/HighlightTable',
    argTypes: {
        contentSize: {
            control: {type: 'radio'},
            options: ['s', 'l'],
            table: {
                defaultValue: {summary: 's'},
            },
        },
    },
} as Meta;

const DefaultTemplate: StoryFn<HighlightTableBlockModel> = (args) => (
    <PageConstructor content={{blocks: [args]}} />
);

export const Default = DefaultTemplate.bind({});

Default.args = {
    ...data.default.content,
    description: yfmTransform(data.default.content.description),
    table: {
        ...data.default.content.table,
        content: data.default.content.table.content.map((row) =>
            row.map((col) => yfmTransform(col)),
        ),
    },
} as HighlightTableBlockModel;
