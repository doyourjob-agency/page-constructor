import {BaseProps, LinkProps, TitleProps} from './../../schema/validators/common';

export const LinkTableBlock = {
    'link-table-block': {
        additionalProperties: false,
        required: ['items'],
        properties: {
            ...BaseProps,
            title: TitleProps,
            items: {
                type: 'array',
                items: {
                    type: 'array',
                    items: LinkProps,
                },
            },
        },
    },
};
