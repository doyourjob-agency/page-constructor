"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageCard = void 0;
const tslib_1 = require("tslib");
const omit_1 = tslib_1.__importDefault(require("lodash/omit"));
const common_1 = require("../../schema/validators/common");
const components_1 = require("../../schema/validators/components");
const schema_1 = require("../Content/schema");
const ImageCardBlockContentProps = (0, omit_1.default)(schema_1.ContentBase, ['centered', 'colSizes', 'controlPosition']);
exports.ImageCard = {
    'image-card': {
        additionalProperties: false,
        required: ['image'],
        properties: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, common_1.BaseProps), common_1.CardBase), common_1.CardLayoutProps), ImageCardBlockContentProps), { image: components_1.ImageProps, direction: {
                type: 'string',
                enum: ['direct', 'reverse'],
            }, margins: {
                type: 'string',
                enum: ['s', 'm'],
            }, backgroundColor: {
                type: 'string',
            }, url: {
                type: 'string',
            }, urlTitle: {
                type: 'string',
            } }),
    },
};
