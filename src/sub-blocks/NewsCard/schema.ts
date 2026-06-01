import {BaseProps} from '../../schema/validators/common';

export const NewsCard = {
    'news-card': {
        additionalProperties: false,
        required: ['image'],
        properties: {
            ...BaseProps,
            image: {
                type: 'string',
            },
            square: {
                type: 'boolean',
            },
            text: {
                type: 'string',
            },
            links: {
                type: 'array',
                items: {
                    type: 'object',
                    additionalProperties: false,
                    required: true,
                    properties: {
                        url: {type: 'string'},
                        icon: {type: 'string'},
                    },
                },
            },
        },
    },
};
