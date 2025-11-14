import {AnimatableProps, BaseProps} from '../../schema/validators/common';

export const AdvantagesBlock = {
    'advantages-block': {
        additionalProperties: false,
        required: false,
        properties: {
            ...BaseProps,
            ...AnimatableProps,
            title: {
                type: 'string',
            },
            link: {
                type: 'object',
                additionalProperties: false,
                required: true,
                properties: {
                    url: {type: 'string'},
                    text: {type: 'string'},
                },
            },
            hoverColor: {
                type: 'string',
            },
            items: {
                type: 'array',
                items: {
                    type: 'object',
                    additionalProperties: false,
                    required: true,
                    properties: {
                        url: {type: 'string'},
                        icon: {type: 'string'},
                        title: {type: 'string'},
                        description: {type: 'string'},
                    },
                },
            },
        },
    },
};
