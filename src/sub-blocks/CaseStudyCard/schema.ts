import {BaseProps} from '../../schema/validators/common';

export const CaseStudyCard = {
    'case-study-card': {
        additionalProperties: false,
        required: [],
        properties: {
            ...BaseProps,
            test: {
                type: 'string',
            },
        },
    },
};
