import {BaseProps} from '../../schema/validators/common';

export const CaseStudyCard = {
    'case-study-card': {
        additionalProperties: false,
        required: [],
        properties: {
            ...BaseProps,
            title: {
                type: 'string',
            },
            image: {
                type: 'string',
            },
            text: {
                type: 'string',
            },
            cardInfo: {
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        overtext: {
                            type: 'string',
                        },
                        text: {
                            type: 'string',
                        },
                        undertext: {
                            type: 'string',
                        },
                    },
                    required: ['text'],
                },
            },
            lowerTags: {
                type: 'array',
                items: {
                    type: 'string',
                },
            },
        },
    },
};
