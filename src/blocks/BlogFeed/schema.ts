import {BaseProps} from './../../schema/validators/common';

export const BlogFeedBlock = {
    'blog-feed-block': {
        additionalProperties: false,
        required: [],
        properties: {
            ...BaseProps,
            title: {
                type: 'string',
            },
            image: {
                type: 'string',
            },
        },
    },
};
