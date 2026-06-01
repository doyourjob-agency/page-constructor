import {AnimatableProps, BaseProps, ChildrenCardsProps} from '../../schema/validators/common';

export const ScrollerBlock = {
    'scroller-block': {
        additionalProperties: false,
        required: false,
        properties: {
            ...BaseProps,
            ...AnimatableProps,
            widths: {
                type: 'array',
                items: {
                    type: 'string',
                },
            },
            gapLong: {
                type: 'boolean',
            },
            children: ChildrenCardsProps,
        },
    },
};
