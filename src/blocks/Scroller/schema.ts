import {BaseProps, ChildrenCardsProps} from '../../schema/validators/common';

export const ScrollerBlock = {
    'scroller-block': {
        additionalProperties: false,
        required: false,
        properties: {
            ...BaseProps,
            title: {
                type: 'string',
            },
            text: {
                type: 'string',
            },
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
