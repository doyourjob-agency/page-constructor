import React from 'react';

import {Meta, StoryFn} from '@storybook/react-vite';
import {v4 as uuidv4} from 'uuid';

import {argFormListContext, yfmTransform} from '../../../../.storybook/utils';
import {PageConstructor} from '../../../containers/PageConstructor';
import {
    FormBlockDirection,
    FormBlockModel,
    isHubspotDataForm,
    isYandexDataForm,
} from '../../../models';
import FormBlock from '../Form';

import data from './data.json';

export default {
    title: 'Blocks/Form',
    component: FormBlock,
    args: {
        ...data.default,
        textContent: {
            ...data.default.textContent,
            text: yfmTransform(data.default.textContent.text),
        },
        textFormContent: {
            ...data.default.textFormContent,
            text: yfmTransform(data.default.textFormContent.text),
        },
        ...argFormListContext.args,
    },
    argTypes: {
        type: {control: false},
        direction: {options: FormBlockDirection, control: {type: 'select'}},
        ...argFormListContext.argTypes,
    },
} as Meta;

const __getFormData = (
    formData: FormBlockModel['formData'],
): FormBlockModel['formData'] | undefined => {
    const id = uuidv4();
    if (isHubspotDataForm(formData)) {
        return {hubspot: {...formData.hubspot, formInstanceId: id}} as FormBlockModel['formData'];
    }
    if (isYandexDataForm(formData)) {
        return {yandex: formData.yandex} as FormBlockModel['formData'];
    }
    return undefined;
};

const DefaultTemplate: StoryFn<FormBlockModel> = (args) => (
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

const ContentDirectionTemplate: StoryFn<FormBlockModel> = (args) => (
    <PageConstructor
        content={{
            blocks: [
                {
                    ...args,
                    direction: FormBlockDirection.FormContent,
                    textContent: {...args.textContent, title: 'FormContent'},
                    textFormContent: {...args.textFormContent, title: 'FormContent'},
                    formData: __getFormData(args.formData),
                },
                {
                    ...args,
                    direction: FormBlockDirection.ContentForm,
                    textContent: {
                        ...args.textContent,
                        title: 'ContentForm',
                    },
                    textFormContent: {
                        ...args.textFormContent,
                        title: 'ContentForm',
                    },
                    formData: __getFormData(args.formData),
                },
                {
                    ...args,
                    direction: FormBlockDirection.Center,
                    textContent: {...args.textContent, title: 'Center'},
                    textFormContent: {...args.textFormContent, title: 'Center'},
                    formData: __getFormData(args.formData),
                },
            ],
        }}
    />
);

const FormDataTemplate: StoryFn<FormBlockModel> = (args) => (
    <React.Fragment>
        <ContentDirectionTemplate {...args} />
        <ContentDirectionTemplate
            {...args}
            {...(data.default as FormBlockModel)}
            {...data.withBackground}
        />
    </React.Fragment>
);

export const Default = DefaultTemplate.bind({});
export const ContentDirection = ContentDirectionTemplate.bind({});
export const WithFullWidth = ContentDirectionTemplate.bind({});
export const WithBackgroundColor = ContentDirectionTemplate.bind({});
export const WithBackgroundImage = ContentDirectionTemplate.bind({});
export const DarkTheme = ContentDirectionTemplate.bind({});
export const FormData = FormDataTemplate.bind({});

WithFullWidth.args = data.withFullWidth;

WithBackgroundColor.args = data.withBackground;

WithBackgroundImage.args = data.withBackgroundImage;

DarkTheme.args = data.darkTheme as FormBlockModel;

FormData.args = {...data.yandexForm, ...data.withBackgroundImage};
