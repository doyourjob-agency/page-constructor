"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackgroundCard = void 0;
const tslib_1 = require("tslib");
const omit_1 = tslib_1.__importDefault(require("lodash/omit"));
const schema_1 = require("../../components/Image/schema");
const common_1 = require("../../schema/validators/common");
const event_1 = require("../../schema/validators/event");
const schema_2 = require("../Content/schema");
const BackgroundCardContentProps = (0, omit_1.default)(schema_2.ContentBase, ['size', 'controlPosition']);
exports.BackgroundCard = {
    'background-card': {
        additionalProperties: false,
        required: ['title', 'text'],
        properties: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, common_1.BaseProps), common_1.CardBase), common_1.CardLayoutProps), BackgroundCardContentProps), { url: {
                type: 'string',
            }, urlTitle: {
                type: 'string',
            }, target: {
                type: 'string',
                enum: ['_blank', '_parent', '_top', '_self'],
            }, background: (0, common_1.withTheme)(schema_1.ImageObjectProps), backgroundColor: {
                type: 'string',
            }, backgroundPosition: {
                type: 'string',
                enum: ['left', 'right', 'center', 'top', 'bottom'],
            }, paddingBottom: {
                type: 'string',
                enum: ['s', 'm', 'l', 'xl'],
            }, analyticsEvents: {
                oneOf: [
                    Object.assign(Object.assign({}, event_1.AnalyticsEventSchema), { optionName: 'single' }),
                    {
                        type: 'array',
                        items: event_1.AnalyticsEventSchema,
                        optionName: 'list',
                    },
                ],
            }, controlPosition: {
                type: 'string',
                enum: ['content', 'footer'],
            } }),
    },
};
