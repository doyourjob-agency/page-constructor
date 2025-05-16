import { BaseProps } from './../../schema/validators/common';
export const PressReleasesBlock = {
    'press-releases-block': {
        additionalProperties: false,
        required: [],
        properties: Object.assign(Object.assign({}, BaseProps), { title: {
                type: 'string',
            } }),
    },
};
