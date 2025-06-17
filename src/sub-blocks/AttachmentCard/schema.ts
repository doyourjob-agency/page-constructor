import {
    BaseProps,
    CardBase,
    ThemeProps,
    TitleProps,
    withTheme,
} from '../../schema/validators/common';

export const AttachmentCard = {
    'attachment-card': {
        additionalProperties: false,
        required: [],
        properties: {
            ...BaseProps,
            ...CardBase,
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
                    },
                },
            },
            theme: ThemeProps,
        },
    },
};
