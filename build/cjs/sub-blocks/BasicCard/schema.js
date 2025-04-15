"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicCard = void 0;
const tslib_1 = require("tslib");
const omit_1 = tslib_1.__importDefault(require("lodash/omit"));
const schema_1 = require("../../components/Image/schema");
const common_1 = require("../../schema/validators/common");
const schema_2 = require("../Content/schema");
const BasicCardContentProps = (0, omit_1.default)(schema_2.ContentBase, ['size', 'theme', 'controlPosition']);
exports.BasicCard = {
    'basic-card': {
        additionalProperties: false,
        required: [],
        properties: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, common_1.BaseProps), common_1.CardBase), common_1.CardLayoutProps), BasicCardContentProps), { url: {
                type: 'string',
            }, urlTitle: {
                type: 'string',
            }, icon: schema_1.ImageProps, target: {
                type: 'string',
                enum: ['_blank', '_parent', '_top', '_self'],
            }, iconPosition: {
                type: 'string',
                enum: ['top', 'left'],
            }, controlPosition: {
                type: 'string',
                enum: ['content', 'footer'],
            } }),
    },
};
