"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackgroundImageProps = exports.ImageProps = exports.ImageObjectProps = exports.ImageBaseObjectProps = exports.ImageDeviceProps = exports.imageUrlPattern = void 0;
const utils_1 = require("../../schema/validators/utils");
exports.imageUrlPattern = '^(files\\.[^:\\s]+|((http[s]?|ftp):\\/)?\\/?([^:\\/\\s]+)((\\/\\w+)*\\/)([\\w\\-\\.]+[^#?\\s]+)(.*)?(#[\\w\\-]+)?)$';
const ImageBase = {
    alt: {
        type: 'string',
        contentType: 'text',
    },
    disableCompress: {
        type: 'boolean',
    },
    loading: {
        type: 'string',
        enum: ['eager', 'lazy'],
    },
    fetchPriority: {
        type: 'string',
        enum: ['high', 'low', 'auto'],
    },
};
const StyleBase = {
    type: 'object',
    additionalProperties: false,
    required: [],
    properties: {
        backgroundColor: { type: 'string' },
        height: { type: ['string', 'number'] },
        width: { type: ['string', 'number'] },
        color: { type: 'string' },
    },
};
exports.ImageDeviceProps = {
    type: 'object',
    additionalProperties: false,
    required: ['desktop', 'mobile'],
    properties: Object.assign(Object.assign({}, ImageBase), { desktop: { type: 'string', pattern: exports.imageUrlPattern }, tablet: {
            type: 'string',
            pattern: exports.imageUrlPattern,
        }, mobile: {
            type: 'string',
            pattern: exports.imageUrlPattern,
        } }),
};
exports.ImageBaseObjectProps = {
    type: 'object',
    additionalProperties: false,
    properties: Object.assign(Object.assign({}, ImageBase), { src: {
            type: 'string',
            pattern: exports.imageUrlPattern,
        }, style: StyleBase }),
};
exports.ImageObjectProps = Object.assign(Object.assign({}, exports.ImageBaseObjectProps), { required: ['src'] });
exports.ImageProps = {
    oneOf: [
        {
            type: 'string',
            pattern: exports.imageUrlPattern,
            optionName: 'url',
        },
        (0, utils_1.filteredItem)(Object.assign(Object.assign({}, exports.ImageObjectProps), { optionName: 'options' })),
        (0, utils_1.filteredItem)(Object.assign(Object.assign({}, exports.ImageDeviceProps), { optionName: 'device options' })),
        {
            type: 'array',
            items: (0, utils_1.filteredItem)(Object.assign({}, exports.ImageObjectProps)),
            optionName: 'options list',
        },
        {
            type: 'array',
            items: (0, utils_1.filteredItem)(Object.assign({}, exports.ImageDeviceProps)),
            optionName: 'device options list',
        },
    ],
};
exports.BackgroundImageProps = {
    anyOf: [
        Object.assign(Object.assign({}, exports.ImageBaseObjectProps), { optionName: 'options' }),
        Object.assign(Object.assign({}, exports.ImageDeviceProps), { optionName: 'device options' }),
    ],
};
