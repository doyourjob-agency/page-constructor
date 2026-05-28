import {BlockBaseProps} from '../../schema/validators/common';

export const YFMBlock = {
    ['yfm-block']: {
        type: 'object',
        additionalProperties: false,
        required: ['text'],
        properties: {
            ...BlockBaseProps,
            text: {
                type: 'string',
                contentType: 'yfm',
            },
            textSize: {
                type: 'string',
                enum: ['xs', 's', 'm', 'l', 'xl'],
            },
        },
    },
};
