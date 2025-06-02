import {BaseProps, BlockHeaderProps} from './../../schema/validators/common';

export const RelevantPostsBlock = {
    'relevant-posts-block': {
        additionalProperties: false,
        required: [],
        properties: {
            ...BaseProps,
            ...BlockHeaderProps,
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
                type: 'boolean',
            },
        },
    },
};
