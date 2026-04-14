import {BlockBaseProps} from '../../schema/validators/common';

export const AudioBlock = {
    ['audio-block']: {
        type: 'object',
        additionalProperties: false,
        required: ['url'],
        properties: {
            ...BlockBaseProps,
            url: {
                type: 'string',
            },
        },
    },
};
