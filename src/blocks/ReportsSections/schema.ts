import {BaseProps, TitleProps} from './../../schema/validators/common';

export const ReportsSectionsBlock = {
    'reports-sections-block': {
        additionalProperties: false,
        required: ['typeKey'],
        properties: {
            ...BaseProps,
            title: {
                oneOf: [
                    {
                        type: 'string',
                        contentType: 'text',
                        optionName: 'text',
                    },
                    {
                        ...TitleProps,
                        optionName: 'options',
                    },
                ],
            },
            typeKey: {
                type: 'string',
            },
            empty: {
                type: 'string',
            },
        },
    },
};
