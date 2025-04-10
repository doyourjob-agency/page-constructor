import { BaseProps, authorItem } from '../../schema/validators/common';
export const author = {
    author: {
        additionalProperties: false,
        required: ['author'],
        properties: Object.assign(Object.assign({}, BaseProps), { asides: {}, author: authorItem }),
    },
};
