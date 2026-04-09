import {BaseProps} from '../../schema/validators/common';

export const ScienceHeaderBlock = {
    'science-header-block': {
        additionalProperties: false,
        required: [],
        properties: {
            ...BaseProps,
            title: {
                type: 'string',
            },
            date: {
                type: 'string',
            },
            readingTime: {
                type: 'number',
            },
            image: {
                type: 'string',
            },
            description: {
                type: 'string',
            },
            topic: {
                type: 'string',
            },
            author: {
                type: 'string',
            },
            shareOptions: {
                type: 'array',
                items: {
                    type: 'string',
                },
            },
            shareUrl: {
                type: 'string',
            },
        },
    },
};
