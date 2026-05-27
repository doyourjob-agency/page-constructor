import {BaseProps} from './../../schema/validators/common';

export const ResourceHubPostsBlock = {
    'resource-hub-posts-block': {
        additionalProperties: false,
        required: [],
        properties: {
            ...BaseProps,
            title: {
                type: 'string',
            },
            text: {
                type: 'string',
            },
            image: {
                type: 'string',
            },
        },
    },
};
