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
    buttons: {
        type: 'array',
        items: {
            type: 'object',
            additionalProperties: false,
            required: ['text', 'url'],
            properties: {
                text: {type: 'string'},
                url: {type: 'string'},
                outline: {type: 'boolean'},
            },
        },
    },
    video: {
        type: 'string',
    },
    headerSpace: {
        type: 'boolean',
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
