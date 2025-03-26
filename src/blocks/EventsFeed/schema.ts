import {BaseProps} from './../../schema/validators/common';

export const EventsFeedBlock = {
    'events-feed-block': {
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
