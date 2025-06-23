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
            highlights: {
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        kicker: {
                            type: 'string',
                        },
                        title: {
                            type: 'string',
                        },
                        subtitle: {
                            type: 'string',
                        },
                    },
                    required: ['text'],
                },
            },
            labels: {
                type: 'array',
                items: {
                    type: 'string',
                },
            },
        },
    },
};
