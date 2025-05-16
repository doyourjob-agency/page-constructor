"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentBlock = exports.ContentBase = exports.ContentItem = void 0;
const schema_1 = require("../../components/Image/schema");
const common_1 = require("../../schema/validators/common");
const utils_1 = require("../../schema/validators/utils");
exports.ContentItem = {
    additionalProperties: false,
    required: ['icon'],
    properties: {
        title: {
            type: 'string',
            contentType: 'text',
        },
        text: {
            type: 'string',
            contentType: 'yfm',
        },
        icon: (0, common_1.withTheme)(schema_1.ImageProps),
    },
};
exports.ContentBase = {
    title: {
        oneOf: [
            {
                type: 'string',
                contentType: 'text',
                optionName: 'text',
            },
            Object.assign(Object.assign({}, common_1.TitleProps), { optionName: 'options' }),
        ],
    },
    subtitle: {
        type: 'string',
    },
    text: {
        type: 'string',
        contentType: 'yfm',
        inputType: 'textarea',
    },
    additionalInfo: {
        type: 'string',
        contentType: 'yfm',
    },
    size: {
        type: 'string',
        enum: common_1.contentSizes,
    },
    links: (0, utils_1.filteredArray)(common_1.LinkProps),
    subtitleLinks: (0, utils_1.filteredArray)(common_1.LinkProps),
    buttons: (0, utils_1.filteredArray)(common_1.ButtonBlock),
    theme: {
        type: 'string',
        enum: common_1.contentThemes,
    },
    list: (0, utils_1.filteredArray)(exports.ContentItem),
    controlPosition: {
        type: 'string',
        enum: ['default', 'bottom'],
    },
};
exports.ContentBlock = {
    content: {
        additionalProperties: false,
        properties: Object.assign(Object.assign({}, exports.ContentBase), { colSizes: common_1.containerSizesArray.reduce((acc, size) => (Object.assign(Object.assign({}, acc), { [size]: common_1.sizeNumber })), {}), centered: {
                type: 'boolean',
            } }),
    },
};
