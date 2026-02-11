import {AnimatableProps, BlockBaseProps} from '../../schema/validators/common';

export const BannerMinifyBlock = {
    'banner-minify-block': {
        additionalProperties: false,
        properties: {
            ...BlockBaseProps,
            ...AnimatableProps,
            theme: {
                type: 'string',
                enum: ['light', 'dark'],
            },
            title: {
                type: 'string',
            },
            text: {
                type: 'string',
            },
            buttons: {
                type: 'array',
                items: {
                    type: 'object',
                    additionalProperties: false,
                    required: ['text', 'url'],
                    properties: {
                        text: {
                            type: 'string',
                        },
                        url: {
                            type: 'string',
                        },
                        theme: {
                            type: 'string',
                            enum: ['normal', 'outline'],
                        },
                    },
                },
            },
        },
    },
};
