import {BaseProps, CardBase} from '../../schema/validators/common';

export const Card = {
    card: {
        additionalProperties: false,
        required: ['header'],
        properties: {
            ...BaseProps,
            ...CardBase,
            header: {
                type: 'object',
                additionalProperties: false,
                required: ['image', 'title'],
                properties: {
                    image: {
                        type: 'string',
                    },
                    title: {
                        type: 'string',
                    },
                },
            },
            text: {
                type: 'string',
            },
            service: {
                type: 'object',
                additionalProperties: false,
                required: ['slug', 'name'],
                properties: {
                    slug: {
                        type: 'string',
                    },
                    name: {
                        type: 'string',
                    },
                },
            },
        },
    },
};
