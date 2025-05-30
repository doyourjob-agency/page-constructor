import {BaseProps, TitleProps} from './../../schema/validators/common';

export const RelevantPostsBlock = {
    'relevant-posts-block': {
        additionalProperties: false,
        required: [],
        properties: {
            ...BaseProps,
            title: {
                oneOf: [
                    {
                        type: 'string',
                        optionName: 'text',
                    },
                    {
                        ...TitleProps,
                        optionName: 'options',
                    },
                ],
            },
            date: {
                oneOf: [
                    {
                        type: 'string',
                        enum: ['today', 'week', 'month'],
                    },
                    {
                        type: 'object',
                        additionalProperties: false,
                        required: [],
                        properties: {
                            start: {
                                type: 'string',
                            },
                            end: {
                                type: 'string',
                            },
                        },
                        optionName: 'options',
                    },
                ],
            },
            tags: {
                type: 'array',
                items: {
                    type: 'string',
                },
            },
            services: {
                type: 'array',
                items: {
                    type: 'string',
                },
            },
            pinnedPost: {
                type: 'string',
            },
        },
    },
};
