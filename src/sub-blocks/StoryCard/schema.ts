import {BlockBaseProps, BlockHeaderProps} from '../../schema/validators/common';

export const StoryCard = {
    'story-card': {
        additionalProperties: false,
        required: [],
        properties: {
            ...BlockBaseProps,
            title: BlockHeaderProps.title,
            text: {type: 'string'},
            quote: {type: 'string'},
            logo: {type: 'string'},
            avatar: {type: 'string'},
            autor: {type: 'string'},
            items: {
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
