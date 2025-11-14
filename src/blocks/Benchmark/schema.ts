import {
    AnimatableProps,
    BlockBaseProps,
    BlockHeaderProps,
    containerSizesObject,
} from '../../schema/validators/common';

export const BenchmarkBlock = {
    'benchmark-block': {
        additionalProperties: false,
        required: ['data'],
        properties: {
            ...BlockBaseProps,
            ...AnimatableProps,
            title: BlockHeaderProps.title,
            data: {
                type: 'array',
                items: {
                    type: 'object',
                    additionalProperties: false,
                    required: ['items'],
                    properties: {
                        title: {
                            type: 'string',
                        },
                        sizes: {
                            type: 'object',
                            additionalProperties: containerSizesObject,
                        },
                        items: {
                            type: 'array',
                            items: {
                                type: 'object',
                                additionalProperties: false,
                                required: ['value'],
                                properties: {
                                    top: {
                                        type: 'string',
                                    },
                                    bottom: {
                                        type: 'string',
                                    },
                                    value: {
                                        type: 'number',
                                    },
                                    postfix: {
                                        type: 'string',
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
    },
};
