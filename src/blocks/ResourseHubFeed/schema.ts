import {BaseProps} from './../../schema/validators/common';

export const ResourseHubFeedBlock = {
    'resourse-hub-feed-block': {
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
