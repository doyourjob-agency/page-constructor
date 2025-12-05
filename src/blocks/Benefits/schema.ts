import {BaseProps, ThemeProps} from '../../schema/validators/common';

export const BenefitsBlock = {
    'benefits-block': {
        additionalProperties: false,
        required: false,
        properties: {
            ...BaseProps,
            titleOne: {type: 'string'},
            postTitleOne: {type: 'string'},
            textOne: {type: 'string'},
            titleTwo: {type: 'string'},
            postTitleTwo: {type: 'string'},
            textTwo: {type: 'string'},
            background: {type: 'string'},
            cards: {
                type: 'array',
                items: {
                    additionalProperties: false,
                    required: ['icon', 'title', 'text'],
                    properties: {
                        icon: {type: 'string'},
                        title: {type: 'string'},
                        text: {type: 'string'},
                    },
                },
            },
            items: {
                type: 'array',
                items: {
                    type: 'object',
                    additionalProperties: false,
                    required: ['title', 'text'],
                    properties: {
                        title: {type: 'string'},
                        text: {type: 'string'},
                        images: {
                            type: 'array',
                            items: {
                                type: 'string',
                            },
                        },
                        columns: {
                            type: 'array',
                            items: {
                                type: 'number',
                            },
                        },
                        rows: {
                            type: 'array',
                            items: {
                                type: 'number',
                            },
                        },
                    },
                },
            },
            theme: ThemeProps,
            accentColor: {type: 'string'},
            time: {type: 'number'},
        },
    },
};
