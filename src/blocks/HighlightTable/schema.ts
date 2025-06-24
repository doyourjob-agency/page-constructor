import {BaseProps, BlockBaseProps, contentSizes} from '../../schema/validators/common';

export const HighlightTableBlock = {
    'highlight-table-block': {
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
            legend: {
                type: 'array',
                items: {
                    type: 'string',
                },
            },
            contentSize: {
                type: 'string',
                enum: contentSizes,
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
                            enum: [12, 6, 4, 3, 2],
                        },
                    },
                },
            },
        },
    },
};
