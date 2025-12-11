import {BlockBaseProps, TitleProps} from '../../schema/validators/common';

export const BannerMinifyBlock = {
    'banner-minify-block': {
        additionalProperties: false,
        properties: {
            ...BlockBaseProps,
            theme: {
                type: 'string',
                enum: ['light', 'dark'],
            },
            title: TitleProps,
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
