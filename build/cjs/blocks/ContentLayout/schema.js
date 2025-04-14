"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentLayoutBlock = void 0;
const schema_1 = require("../../components/Image/schema");
const common_1 = require("../../schema/validators/common");
const utils_1 = require("../../schema/validators/utils");
const schema_2 = require("../../sub-blocks/Content/schema");
const ContentLayoutBlockProperties = {
    size: {
        type: 'string',
        enum: common_1.contentSizes,
    },
    background: schema_1.BackgroundImageProps,
    centered: {
        type: 'boolean',
    },
    theme: {
        type: 'string',
        enum: common_1.contentThemes,
    },
    textWidth: {
        type: 'string',
        enum: common_1.contentTextWidth,
    },
};
exports.ContentLayoutBlock = {
    'content-layout-block': {
        additionalProperties: false,
        properties: Object.assign(Object.assign(Object.assign({}, common_1.BlockBaseProps), { textContent: schema_2.ContentBlock === null || schema_2.ContentBlock === void 0 ? void 0 : schema_2.ContentBlock.content, fileContent: (0, utils_1.filteredArray)(common_1.FileLinkProps), 
            /**
             * @deprecated Use params on top level instead
             */
            properties: ContentLayoutBlockProperties }), ContentLayoutBlockProperties),
    },
};
