import {BaseProps} from './../../schema/validators/common';

export const PressReleasesBlock = {
    'press-releases-block': {
        additionalProperties: false,
        required: [],
        properties: {
            ...BaseProps,
            title: {
                type: 'string',
            },
        },
    },
};
