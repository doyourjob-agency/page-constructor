import {BlockBaseProps} from '../../schema/validators/common';

export const MiniCaseCard = {
    'mini-case-card': {
        additionalProperties: false,
        required: [],
        properties: {
            ...BlockBaseProps,
            title: {type: 'string'},
            tagUsecase: {
                type: 'array',
                items: {type: 'string'},
            },
            tagIndustry: {
                type: 'array',
                items: {type: 'string'},
            },
            showStory: {type: 'boolean'},
            showQuote: {type: 'boolean'},
            text: {type: 'string'},
            quote: {type: 'string'},
            logo: {type: 'string'},
            avatar: {type: 'string'},
            author: {type: 'string'},
            position: {type: 'string'},
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
            backgroundData: {type: 'string'},
        },
    },
};
