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
    image: {
        type: 'string',
    },
    video: {
        type: 'string',
    },
    headerSpace: {
        type: 'boolean',
    },
    verticalOffset: {
        type: 'string',
        enum: ['0', 's', 'm', 'l', 'xl', 'xxl'],
    },
    verticalOffsetTop: {
        type: 'string',
        enum: ['0', 's', 'm', 'l', 'xl', 'xxl'],
    },
    verticalOffsetBottom: {
        type: 'string',
        enum: ['0', 's', 'm', 'l', 'xl', 'xxl'],
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
