import {
    BaseProps,
    BlockBaseProps,
    ButtonBlock,
    JustifyProps,
    LinkProps,
} from '../../schema/validators/common';
import {filteredArray} from '../../schema/validators/utils';

export const TableBlock = {
    'table-block': {
        additionalProperties: false,
        required: ['title', 'table'],
        properties: {
            ...BlockBaseProps,
            title: {
                type: 'string',
                contentType: 'text',
            },
            description: {
                type: 'string',
            },
            links: filteredArray(LinkProps),
            buttons: filteredArray(ButtonBlock),
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
                                oneOf: [
                                    {
                                        type: 'string',
                                        contentType: 'text',
                                        optionName: 'text',
                                    },
                                    {
                                        type: 'number',
                                        contentType: 'text',
                                        optionName: 'number',
                                    },
                                ],
                            },
                        },
                    },
                    legend: {
                        type: 'array',
                        items: {
                            type: 'string',
                            contentType: 'yfm',
                        },
                    },
                    hideLegend: {
                        type: 'boolean',
                    },
                    justify: {
                        type: 'array',
                        items: JustifyProps,
                    },
                    marker: {
                        type: 'string',
                        enum: ['disk', 'tick'],
                    },
                    caption: {
                        type: 'string',
                    },
                },
            },
        },
    },
};
