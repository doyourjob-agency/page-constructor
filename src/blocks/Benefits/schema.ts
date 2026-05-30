import {AnimatableProps, BaseProps, ThemeProps} from '../../schema/validators/common';

export const BenefitsBlock = {
    'benefits-block': {
        additionalProperties: false,
        required: false,
        properties: {
            ...BaseProps,
            ...AnimatableProps,
            theme: ThemeProps,
            title: {
                type: 'string',
            },
            text: {
                type: 'string',
            },
            video: {
                type: 'string',
            },
            items: {
                type: 'array',
                items: {
                    type: 'object',
                    additionalProperties: false,
                    required: false,
                    properties: {
                        icon: {type: 'string'},
                        text: {type: 'string'},
                    },
                },
            },
            itemBackground: {
                type: 'string',
            },
        },
    },
};
