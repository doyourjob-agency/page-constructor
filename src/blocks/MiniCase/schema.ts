import {BaseProps} from '../../schema/validators/common';

export const MiniCaseBlock = {
    'mini-case-block': {
        additionalProperties: false,
        required: ['items'],
        properties: {
            ...BaseProps,
            items: {
                type: 'array',
                items: {
                    type: 'string',
                },
            },
        },
    },
};
