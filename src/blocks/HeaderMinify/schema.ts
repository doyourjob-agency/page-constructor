import {BlockBaseProps} from '../../schema/validators/common';

export const HeaderMinifyProperties = {
    title: {
        type: 'string',
        contentType: 'text',
    },
    description: {
        type: 'string',
        contentType: 'yfm',
        inputType: 'textarea',
    },
    button: {
        type: 'object',
        additionalProperties: false,
        required: ['text', 'url'],
        properties: {
            icon: {type: 'string'},
            text: {type: 'string'},
            url: {type: 'string'},
        },
    },
    backgroundEffect: {
        type: 'object',
        additionalProperties: false,
        required: ['firstSrc', 'secondSrc'],
        properties: {
            firstSrc: {type: 'string'},
            secondSrc: {type: 'string'},
        },
    },
};

export const HeaderMinifyBlock = {
    'header-minify-block': {
        additionalProperties: false,
        required: ['title'],
        properties: {
            ...BlockBaseProps,
            ...HeaderMinifyProperties,
        },
    },
};
