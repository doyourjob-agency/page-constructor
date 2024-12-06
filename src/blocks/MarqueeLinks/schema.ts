import {BaseProps} from '../../schema/validators/common';

export const MarqueeLink = {
    type: 'object',
    additionalProperties: false,
    required: ['src'],
    properties: {
        src: {
            type: 'string',
        },
        url: {
            type: 'string',
        },
    },
};

export const MarqueeLinks = {
    'marquee-links-block': {
        additionalProperties: false,
        required: ['items'],
        properties: {
            ...BaseProps,
            speed: {
                type: 'number',
            },
            items: {
                type: 'array',
                items: MarqueeLink,
            },
        },
    },
};
