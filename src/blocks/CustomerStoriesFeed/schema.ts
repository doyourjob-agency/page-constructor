import {BaseProps} from './../../schema/validators/common';

export const CustomerStoriesFeedBlock = {
    'customer-stories-feed-block': {
        additionalProperties: false,
        required: [],
        properties: {
            ...BaseProps,
        },
    },
};
