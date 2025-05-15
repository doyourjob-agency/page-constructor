"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabsBlock = exports.tabsItem = void 0;
const tslib_1 = require("tslib");
const omit_1 = tslib_1.__importDefault(require("lodash/omit"));
const schema_1 = require("../../components/Image/schema");
const common_1 = require("../../schema/validators/common");
const utils_1 = require("../../schema/validators/utils");
const schema_2 = require("../../sub-blocks/Content/schema");
const TabsItemContentProps = (0, omit_1.default)(schema_2.ContentBase, ['size', 'colSizes', 'centered', 'theme']);
exports.tabsItem = {
    type: 'object',
    additionalProperties: false,
    required: ['tabName'],
    properties: Object.assign(Object.assign({}, TabsItemContentProps), { tabName: {
            type: 'string',
        }, caption: {
            type: 'string',
            contentType: 'text',
        }, media: (0, common_1.withTheme)({
            type: 'object',
            properties: common_1.MediaProps,
        }), 
        //TODO deprecated
        link: common_1.LinkProps, image: (0, common_1.withTheme)(schema_1.ImageProps), border: {
            type: 'string',
            enum: ['shadow', 'line', 'none'],
        } }),
};
exports.TabsBlock = {
    'tabs-block': {
        additionalProperties: false,
        required: ['title', 'items'],
        properties: Object.assign(Object.assign(Object.assign({}, common_1.BlockBaseProps), common_1.BlockHeaderProps), { tabsColSizes: common_1.containerSizesArray.reduce((acc, size) => (Object.assign(Object.assign({}, acc), { [size]: common_1.sizeNumber })), {}), direction: {
                type: 'string',
                enum: common_1.mediaDirection,
            }, centered: { type: 'boolean' }, items: (0, utils_1.filteredArray)(exports.tabsItem), contentSize: {
                type: 'string',
                enum: common_1.contentSizes,
            } }),
    },
};
