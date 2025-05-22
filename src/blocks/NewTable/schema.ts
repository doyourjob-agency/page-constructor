import {BaseProps, BlockBaseProps} from '../../schema/validators/common';

export const NewTableBlock = {
    'new-table-block': {
        additionalProperties: false,
        required: ['table'],
        properties: {
            ...BlockBaseProps,
            title: {
                type: 'string',
            },
            description: {
                type: 'string',
            },
            table: {
                additionalProperties: false,
                required: ['content'],
                properties: {
                    ...BaseProps,
                    content: {
                        type: 'array',
                        items: {
                            type: 'array',
                            items: {
                                type: 'string',
                            },
                        },
                    },
                    justify: {
                        type: 'array',
                        items: {
                            type: 'string',
                            enum: ['left', 'center', 'right'],
                        },
                    },
                    highlighter: {
                        type: 'array',
                        items: {
                            type: 'string',
                        },
                    },
                    customColumnWidth: {
                        type: 'array',
                        items: {
                            type: 'string',
                            enum: ['xxl', 'xl', 'l', 'm', 's', 'xs'],
                        },
                    },
                },
            },
        },
    },
};
