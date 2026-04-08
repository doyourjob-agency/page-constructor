import {BaseProps} from './../../schema/validators/common';

export const ScienceFeedBlock = {
    'science-feed-block': {
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
            caption: {
                type: 'string',
            },
            logo: {
                type: 'string',
            },
            image: {
                type: 'string',
            },
        },
    },
};
