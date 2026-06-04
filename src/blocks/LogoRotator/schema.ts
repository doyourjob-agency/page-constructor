import {
    AnimatableProps,
    BaseProps,
    ThemeProps,
    TitleProps,
    containerSizesObject,
} from '../../schema/validators/common';

export const LogoRotatorBlock = {
    'logo-rotator-block': {
        additionalProperties: false,
        required: ['items', 'count'],
        properties: {
            ...BaseProps,
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
            count: {
                type: 'number',
            },
            minRotateCount: {
                type: 'number',
            },
            maxRotateCount: {
                type: 'number',
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
