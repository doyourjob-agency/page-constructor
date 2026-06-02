import {AnimatableProps, BaseProps, ChildrenCardsProps} from '../../schema/validators/common';

export const ScrollerControlsProps = {
    infinite: {
        type: 'boolean',
    },
    scrollSnapCenter: {
        type: 'boolean',
    },
    autoScroll: {
        type: 'boolean',
    },
    autoScrollInterval: {
        type: 'number',
    },
};

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
            fullWidth: {
                type: 'boolean',
            },
            ...ScrollerControlsProps,
            children: ChildrenCardsProps,
        },
    },
};
