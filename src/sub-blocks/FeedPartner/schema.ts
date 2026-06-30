import {BaseProps} from '../../schema/validators/common';

export const FeedPartner = {
    'feed-partner': {
        additionalProperties: false,
        required: ['url'],
        properties: {
            ...BaseProps,
            url: {
                type: 'string',
            },
            label: {
                type: 'string',
            },
            level: {
                type: 'string',
            },
            levelColorText: {
                type: 'string',
            },
            levelColorBackground: {
                type: 'string',
            },
            background: {
                type: 'string',
            },
            image: {
                oneOf: [
                    {
                        type: 'string',
                    },
                    {
                        type: 'object',
                        additionalProperties: false,
                        required: ['src'],
                        properties: {
                            src: {
                                type: 'string',
                            },
                            width: {
                                type: 'number',
                            },
                            height: {
                                type: 'number',
                            },
                            vertical: {
                                type: 'string',
                                enum: ['center', 'bottom', 'top'],
                            },
                        },
                    },
                ],
            },
            title: {
                type: 'string',
            },
            subtitle: {
                type: 'string',
            },
            tags: {
                type: 'array',
                items: {
                    type: 'string',
                },
            },
            jumpOnHover: {
                type: 'boolean',
            },
        },
    },
};
