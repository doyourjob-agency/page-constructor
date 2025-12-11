import {
    AnimatableProps,
    BaseProps,
    ThemeProps,
    containerSizesObject,
} from '../../schema/validators/common';

export const LogoRotatorBlock = {
    'logo-rotator-block': {
        additionalProperties: false,
        required: ['items', 'count'],
        properties: {
            ...BaseProps,
            ...AnimatableProps,
            title: {type: 'string'},
            theme: ThemeProps,
            items: {
                type: 'array',
                items: {
                    type: 'object',
                    additionalProperties: false,
                    required: ['url', 'src'],
                    properties: {
                        url: {type: 'string'},
                        src: {type: 'string'},
                    },
                },
            },
            count: {
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
