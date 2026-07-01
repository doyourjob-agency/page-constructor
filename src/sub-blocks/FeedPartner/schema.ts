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
                type: 'string',
            },
            imageScale: {
                type: 'number',
                minimum: 0,
            },
            imageWidth: {
                type: 'number',
                minimum: 0,
            },
            imageHeight: {
                type: 'number',
                minimum: 0,
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
