import {AnimatableProps, BlockBaseProps, TitleProps} from '../../schema/validators/common';

export const BenchmarkBlock = {
    'benchmark-block': {
        additionalProperties: false,
        required: ['data'],
        properties: {
            ...BlockBaseProps,
            ...AnimatableProps,
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
            text: {
                type: 'string',
            },
            duration: {
                type: 'number',
            },
            items: {
                type: 'array',
                items: {
                    type: 'object',
                    additionalProperties: false,
                    required: ['value'],
                    properties: {
                        text: {
                            type: 'string',
                        },
                        init: {
                            type: 'number',
                        },
                        postfix: {
                            type: 'string',
                        },
                        value: {
                            type: 'number',
                        },
                    },
                },
            },
        },
    },
};
