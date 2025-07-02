import {BaseProps, TitleProps} from './../../schema/validators/common';

export const ReportsCardsBlock = {
    'reports-cards-block': {
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
            postscript: {
                type: 'string',
            },
        },
    },
};
