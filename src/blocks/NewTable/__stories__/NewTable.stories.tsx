import React from 'react';

import {Meta, StoryFn} from '@storybook/react';

import {yfmTransform} from '../../../../.storybook/utils';
import {PageConstructor} from '../../../containers/PageConstructor';
import {NewTableBlockModel} from '../../../models';
import NewTable from '../NewTable';

import data from './data.json';

export default {
    component: NewTable,
    title: 'Blocks/NewTable',
} as Meta;

const DefaultTemplate: StoryFn<NewTableBlockModel> = (args) => (
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
} as NewTableBlockModel;
