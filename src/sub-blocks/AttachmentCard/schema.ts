import {BaseProps, CardBase, Tag, TitleProps, withTheme} from '../../schema/validators/common';

export const AttachmentCard = {
    'attachment-card': {
        additionalProperties: false,
        required: [],
        properties: {
            ...BaseProps,
            ...CardBase,
            url: {
                type: 'string',
            },
            title: {
                oneOf: [
                    {
                        type: 'string',
                        contentType: 'text',
                        optionName: 'text',
                    },
                    {
                        ...TitleProps,
                        optionName: 'options',
                    },
                ],
            },
            date: {
                type: 'string',
            },
            time: {
                type: 'string',
            },
            column: {
                type: 'boolean',
            },
            items: {
                type: 'array',
                items: {
                    additionalProperties: false,
                    required: true,
                    properties: {
                        icon: withTheme({
                            type: 'string',
                        }),
                        name: {
                            type: 'string',
                        },
                        link: {
                            type: 'string',
                        },
                        target: {
                            type: 'string',
                            enum: ['_blank', '_parent', '_top', '_self'],
                        },
                        download: {
                            type: 'boolean',
                        },
                    },
                },
            },
            label: Tag,
        },
    },
};
