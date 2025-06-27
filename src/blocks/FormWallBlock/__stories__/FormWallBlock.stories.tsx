import React from 'react';

import {Meta, StoryFn} from '@storybook/react';
import {v4 as uuidv4} from 'uuid';

import {argFormListContext} from '../../../../.storybook/utils';
import {PageConstructor} from '../../../containers/PageConstructor';
import {FormWallBlockModel, FormWallBlockProps} from '../../../models';
import FormWallBlock from '../FormWallBlock';

import data from './data.json';

export default {
    component: FormWallBlock,
    title: 'Blocks/FormWallBlock',
    args: {
        ...argFormListContext.args,
    },
} as Meta;

function __getFormData(
    formData: FormWallBlockModel['formData'],
): FormWallBlockModel['formData'] | undefined {
    const id = uuidv4();
    return {hubspot: {...formData.hubspot, formInstanceId: id}} as FormWallBlockModel['formData'];
}

const DefaultTemplate: StoryFn<FormWallBlockModel> = (args) => (
    <PageConstructor
        content={{
            blocks: [
                {
                    ...args,
                    formData: __getFormData(args.formData),
                },
            ],
        }}
    />
);

export const Default = DefaultTemplate.bind({});

const DefaultArgs = data.default;

Default.args = DefaultArgs as FormWallBlockProps;
