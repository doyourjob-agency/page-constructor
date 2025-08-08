import {BaseProps, BlockHeaderProps} from '../../schema/validators/common';

export const MiniCaseBlock = {
    'mini-case-block': {
        additionalProperties: false,
        required: ['items'],
        properties: {
            ...BaseProps,
            ...BlockHeaderProps,
            items: {
                type: 'array',
                items: {
                    type: 'string',
                },
            },
        },
    },
};
