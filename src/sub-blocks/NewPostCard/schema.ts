import {BaseProps} from '../../schema/validators/common';

export const NewPostCard = {
    'new-post-card': {
        additionalProperties: false,
        required: [],
        properties: {
            ...BaseProps,
            slug: {
                type: 'string',
            },
            url: {
                type: 'string',
            },
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
            pinned: {
                type: 'boolean',
            },
        },
    },
};
