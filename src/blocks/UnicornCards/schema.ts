import {AnimatableProps, BaseProps, TitleProps} from '../../schema/validators/common';

export const UnicornCardsBlock = {
    'unicorn-cards-block': {
        additionalProperties: false,
        required: false,
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
            text: {type: 'string'},
            unicornSdkUrl: {type: 'string'},
            items: {
                type: 'array',
                items: {
                    type: 'object',
                    additionalProperties: false,
                    required: false,
                    properties: {
                        title: {type: 'string'},
                        text: {type: 'string'},
                        unicorn: {type: 'string'},
                        unicornSdkUrl: {type: 'string'},
                        previewImage: {type: 'string'},
                    },
                },
            },
        },
    },
};
