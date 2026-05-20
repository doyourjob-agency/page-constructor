import {BaseProps} from '../../schema/validators/common';

export const FeedPartner = {
    type: 'object',
    additionalProperties: false,
    properties: {
        ...BaseProps,
        url: {
            type: 'string',
        },
        image: {
            type: 'string',
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
};
