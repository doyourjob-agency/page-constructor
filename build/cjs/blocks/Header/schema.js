"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderBlock = exports.HeaderProperties = exports.HeaderBackgroundProps = void 0;
const schema_1 = require("../../components/Image/schema");
const common_1 = require("../../schema/validators/common");
const utils_1 = require("../../schema/validators/utils");
exports.HeaderBackgroundProps = {
    type: 'object',
    additionalProperties: false,
    required: [],
    properties: Object.assign(Object.assign({}, common_1.MediaProps), { fullWidth: { type: 'boolean' }, fullWidthMedia: { type: 'boolean' } }),
};
exports.HeaderProperties = {
    title: {
        type: 'string',
        contentType: 'text',
    },
    overtitle: {
        type: 'string',
        contentType: 'text',
    },
    description: {
        type: 'string',
        contentType: 'yfm',
        inputType: 'textarea',
    },
    width: {
        type: 'string',
        enum: ['s', 'm', 'l'],
    },
    buttons: (0, utils_1.filteredArray)(common_1.ButtonBlock),
    offset: {
        type: 'string',
        enum: ['default', 'large'],
    },
    image: (0, common_1.withTheme)(schema_1.ImageProps),
    video: (0, common_1.withTheme)(common_1.VideoProps),
    mediaView: {
        type: 'string',
        enum: common_1.mediaView,
    },
    backLink: {
        type: 'object',
        required: ['url', 'title'],
        properties: {
            url: {
                type: 'string',
            },
            title: {
                type: 'string',
                contentType: 'text',
            },
        },
    },
    imageSize: {
        type: 'string',
        enum: ['s', 'm'],
    },
    verticalOffset: {
        type: 'string',
        enum: ['0', 's', 'm', 'l', 'xl'],
    },
    background: (0, common_1.withTheme)(exports.HeaderBackgroundProps),
    theme: {
        type: 'string',
        enum: ['default', 'dark'],
    },
    breadcrumbs: {
        type: 'object',
        additionalProperties: false,
        required: ['items'],
        properties: {
            items: {
                type: 'array',
                items: {
                    type: 'object',
                    additionalProperties: false,
                    required: ['url', 'text'],
                    properties: {
                        url: {
                            type: 'string',
                        },
                        text: {
                            type: 'string',
                            contentType: 'text',
                        },
                    },
                },
            },
            theme: { type: 'string', enum: ['light', 'dark'] },
        },
    },
    status: {
        type: 'string',
    },
    topTags: {
        type: 'array',
        items: {
            type: 'object',
            additionalProperties: false,
            required: ['text'],
            properties: {
                text: { type: 'string' },
                url: { type: 'string' },
                icon: { type: 'string', enum: ['map', 'clock'] },
                target: { type: 'string' },
            },
        },
    },
    bottomTags: {
        type: 'array',
        items: {
            type: 'object',
            additionalProperties: false,
            required: ['text'],
            properties: {
                text: { type: 'string' },
                url: { type: 'string' },
                icon: { type: 'string', enum: ['map', 'clock'] },
                target: { type: 'string' },
            },
        },
    },
};
exports.HeaderBlock = {
    'header-block': {
        additionalProperties: false,
        required: ['title'],
        properties: Object.assign(Object.assign({}, common_1.BlockBaseProps), exports.HeaderProperties),
    },
};
