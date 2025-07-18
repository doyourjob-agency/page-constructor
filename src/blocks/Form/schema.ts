import omit from 'lodash/omit';

import {ImageBaseObjectProps, ImageDeviceProps, ImageProps} from '../../components/Image/schema';
import {YandexFormProps} from '../../components/YandexForm/schema';
import {BlockBaseProps, BorderProps, withTheme} from '../../schema/validators/common';
import {ContentBase} from '../../sub-blocks/Content/schema';
import {HubspotFormProps} from '../../sub-blocks/HubspotForm/schema';

const FormBlockContentProps = omit(ContentBase, ['size', 'centered', 'colSizes']);

export const FormBlock = {
    'form-block': {
        additionalProperties: false,
        required: [],
        properties: {
            ...BlockBaseProps,
            title: {
                type: 'string',
            },
            slug: {
                type: 'string',
            },
            formData: {
                oneOf: [
                    {
                        type: 'object',
                        optionName: 'yandex',
                        properties: {
                            yandex: withTheme(YandexFormProps),
                        },
                    },
                    {
                        type: 'object',
                        optionName: 'hubspot',
                        properties: {
                            hubspot: withTheme(HubspotFormProps),
                        },
                    },
                ],
            },
            textContent: {
                additionalProperties: false,
                properties: FormBlockContentProps,
            },
            textFormContent: {
                additionalProperties: false,
                properties: FormBlockContentProps,
            },
            direction: {
                enum: ['content-form', 'form-content', 'center'],
            },
            image: ImageProps,
            backgroundColor: {
                type: 'string',
            },
            background: {
                anyOf: [
                    {
                        ...ImageBaseObjectProps,
                        properties: {...ImageBaseObjectProps.properties, border: BorderProps},
                        optionName: 'options',
                    },
                    {
                        ...ImageDeviceProps,
                        properties: {...ImageDeviceProps.properties, border: BorderProps},
                        optionName: 'device options',
                    },
                ],
            },
            fullWidth: {
                type: 'boolean',
            },
            fullWidthContent: {
                type: 'boolean',
            },
        },
    },
};
