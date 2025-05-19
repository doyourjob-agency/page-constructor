"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayoutItem = void 0;
const tslib_1 = require("tslib");
const omit_1 = tslib_1.__importDefault(require("lodash/omit"));
const schema_1 = tslib_1.__importDefault(require("../../components/MetaInfo/schema"));
const common_1 = require("../../schema/validators/common");
const event_1 = require("../../schema/validators/event");
const schema_2 = require("../../sub-blocks/Content/schema");
exports.LayoutItem = {
    type: 'object',
    additionalProperties: false,
    required: ['content', 'media'],
    properties: Object.assign(Object.assign(Object.assign({}, common_1.BaseProps), common_1.CardLayoutProps), { title: {
            type: 'object',
            additionalProperties: false,
            properties: {
                text: {
                    type: 'string',
                },
                size: {
                    type: 'string',
                    enum: common_1.titleTextSize,
                },
            },
        }, afterTitle: {
            type: 'object',
            additionalProperties: false,
            properties: {
                text: {
                    type: 'string',
                },
                size: {
                    type: 'string',
                    enum: common_1.titleTextSize,
                },
            },
        }, rightSpace: {
            type: 'boolean',
        }, media: common_1.MediaProps, content: (0, omit_1.default)(schema_2.ContentBase, ['colSize', 'size', 'centered']), metaInfo: schema_1.default, border: {
            type: 'boolean',
        }, fullscreen: {
            type: 'boolean',
        }, analyticsEvents: {
            oneOf: [
                Object.assign(Object.assign({}, event_1.AnalyticsEventSchema), { optionName: 'single' }),
                {
                    type: 'array',
                    items: event_1.AnalyticsEventSchema,
                    optionName: 'list',
                },
            ],
        } }),
};
