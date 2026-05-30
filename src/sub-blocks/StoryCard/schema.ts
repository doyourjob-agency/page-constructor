import {BlockBaseProps} from '../../schema/validators/common';

export const StoryCard = {
    'story-card': {
        additionalProperties: false,
        required: [],
        properties: {
            ...BlockBaseProps,
            title: {type: 'string'},
            tag: {type: 'string'},
            text: {type: 'string'},
            quote: {type: 'string'},
            logo: {type: 'string'},
            avatar: {type: 'string'},
            autor: {type: 'string'},
            data: {
                type: 'array',
                items: {
                    type: 'object',
                    additionalProperties: false,
                    required: ['value'],
                    properties: {
                        value: {type: 'string'},
                        label: {type: 'string'},
                    },
                },
            },
            background: {type: 'string'},
        },
    },
};
