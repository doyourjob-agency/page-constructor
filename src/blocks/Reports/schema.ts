import {BaseProps} from './../../schema/validators/common';

export const ReportsBlock = {
    'reports-block': {
        additionalProperties: false,
        required: ['typeKey'],
        properties: {
            ...BaseProps,
            typeKey: {
                type: 'string',
            },
            empty: {
                type: 'string',
            },
        },
    },
};
