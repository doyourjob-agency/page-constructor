import {
    AnimatableProps,
    BaseProps,
    ThemeProps,
    containerSizesObject,
} from '../../schema/validators/common';

export const LogoRotatorBlock = {
    'logo-rotator-block': {
        additionalProperties: false,
        required: ['items', 'countMobile'],
        properties: {
            ...BaseProps,
            ...AnimatableProps,
            title: {
                type: 'string',
            },
            text: {
                type: 'string',
            },
            theme: ThemeProps,
            items: {
                type: 'array',
                items: {
                    type: 'object',
                    additionalProperties: false,
                    required: ['src'],
                    properties: {
                        url: {type: 'string'},
                        src: {type: 'string'},
                        isStatic: {type: 'boolean'},
                    },
                },
            },
            countMobile: {
                type: 'number',
            },
            countDesktop: {
                type: 'number',
            },
            minRotateCount: {
                type: 'number',
            },
            maxRotateCount: {
                type: 'number',
            },
            swapAnimation: {
                type: 'string',
                enum: ['fade', 'morph'],
            },
            colSizes: {
                type: 'object',
                additionalProperties: containerSizesObject,
            },
            rowMode: {
                type: 'boolean',
            },
        },
    },
};
