import {BaseProps, Tag} from '../../schema/validators/common';

export const CaseStudyCard = {
    'case-study-card': {
        additionalProperties: false,
        required: ['title', 'image', 'text', 'highlights', 'labels'],
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
            background: {
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
                        background: {
                            type: 'string',
                        },
                    },
                    required: ['text'],
                },
            },
            labels: {
                type: 'array',
                items: Tag,
            },
        },
    },
};
