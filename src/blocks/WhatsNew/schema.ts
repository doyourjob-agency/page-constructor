import {AnimatableProps, BlockBaseProps, BlockHeaderProps} from '../../schema/validators/common';

export const WhatsNewBlock = {
    'whats-new-block': {
        additionalProperties: false,
        required: ['items'],
        properties: {
            ...BlockBaseProps,
            ...AnimatableProps,
            ...BlockHeaderProps,
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
