import {BlockBaseProps, ChildrenProps} from '../../schema/validators/common';

export const CatBlock = {
    ['cat-block']: {
        type: 'object',
        additionalProperties: false,
        required: ['children'],
        properties: {
            ...BlockBaseProps,
            children: ChildrenProps,
            title: {
                type: 'string',
            },
        },
    },
};
