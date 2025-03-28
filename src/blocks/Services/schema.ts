import {BaseProps} from './../../schema/validators/common';

export const ServicesBlock = {
    'services-block': {
        additionalProperties: false,
        required: [],
        properties: {
            ...BaseProps,
            title: {
                type: 'string',
            },
            serviceLinkType: {
                type: 'string',
                enum: ['doc', 'price'],
            },
        },
    },
};
