import {BaseProps, dividerEnum} from '../../schema/validators/common';

export const Divider = {
    divider: {
        additionalProperties: false,
        properties: {
            ...BaseProps,
            border: {
                type: 'boolean',
            },
            visibility: {
                type: 'string',
                enum: ['mobile', 'desktop'],
            },
            size: dividerEnum,
        },
    },
};
