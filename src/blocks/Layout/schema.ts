import {BlockBaseProps, ChildrenProps} from '../../schema/validators/common';

export const LayoutBlock = {
    ['layout-block']: {
        type: 'object',
        additionalProperties: false,
        required: ['children'],
        properties: {
            ...BlockBaseProps,
            children: ChildrenProps,
            mobileOrder: {
                type: 'string',
                enum: ['reverse', 'straight'],
            },
            revertMode: {
                type: 'boolean',
            },
        },
    },
};
