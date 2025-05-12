"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaBlock = exports.MediaBlockBaseProps = exports.Media = void 0;
const tslib_1 = require("tslib");
const omit_1 = tslib_1.__importDefault(require("lodash/omit"));
const common_1 = require("../../schema/validators/common");
const schema_1 = require("../../sub-blocks/Content/schema");
exports.Media = {
    type: 'object',
    additionalProperties: false,
    required: [],
    properties: common_1.MediaProps,
};
const MediaBlockContentProps = (0, omit_1.default)(schema_1.ContentBase, ['text', 'theme']);
exports.MediaBlockBaseProps = Object.assign(Object.assign(Object.assign(Object.assign({}, common_1.BlockBaseProps), common_1.AnimatableProps), MediaBlockContentProps), { description: {
        type: 'string',
        contentType: 'yfm',
    }, direction: {
        type: 'string',
        enum: common_1.mediaDirection,
    }, mobileDirection: {
        type: 'string',
        enum: common_1.mediaDirection,
    }, largeMedia: {
        type: 'boolean',
    }, smallMedia: {
        type: 'boolean',
    }, mediaOnly: {
        type: 'boolean',
    }, 
    /**
     * @deprecated use border='none' or border='line' instead
     */
    disableShadow: {
        type: 'boolean',
    }, button: common_1.ButtonBlock, mediaOnlyColSizes: common_1.containerSizesObject, border: {
        type: 'string',
        enum: ['shadow', 'line', 'none'],
    } });
exports.MediaBlock = {
    'media-block': {
        additionalProperties: false,
        required: ['title', 'media'],
        properties: Object.assign(Object.assign({}, exports.MediaBlockBaseProps), { media: (0, common_1.withTheme)(exports.Media) }),
    },
};
