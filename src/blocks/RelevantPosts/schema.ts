import {BaseProps, BlockHeaderProps} from './../../schema/validators/common';

export const RelevantPostsBlock = {
    'relevant-posts-block': {
        additionalProperties: false,
        required: [],
        properties: {
            ...BaseProps,
            ...BlockHeaderProps,
            slider: {
                type: 'boolean',
            },
            date: {
                type: 'string',
                enum: ['today', 'week', 'month'],
            },
            dateStart: {
                type: 'string',
            },
            dateEnd: {
                type: 'string',
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
