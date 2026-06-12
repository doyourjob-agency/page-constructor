import {AnimatableProps, BlockBaseProps, TitleProps} from '../../schema/validators/common';
import {ScrollerControlsProps} from '../Scroller/schema';

export const WhatsNewBlock = {
    'whats-new-block': {
        additionalProperties: false,
        required: ['items'],
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
            ...ScrollerControlsProps,
            items: {
                type: 'array',
                items: {
                    type: 'object',
                    required: ['image'],
                    properties: {
                        image: {
                            type: 'string',
                        },
                        square: {
                            type: 'boolean',
                        },
                        text: {
                            type: 'string',
                        },
                        links: {
                            type: 'array',
                            items: {
                                type: 'object',
                                additionalProperties: false,
                                required: ['url', 'icon'],
                                properties: {
                                    url: {type: 'string'},
                                    icon: {type: 'string'},
                                },
                            },
                        },
                    },
                },
            },
            footnote: {
                type: 'string',
            },
            links: {
                type: 'array',
                items: {
                    type: 'object',
                    additionalProperties: false,
                    required: ['url', 'icon'],
                    properties: {
                        url: {type: 'string'},
                        icon: {type: 'string'},
                    },
                },
            },
        },
    },
};
