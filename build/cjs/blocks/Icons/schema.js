"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconsBlock = exports.IconsProps = void 0;
const common_1 = require("../../schema/validators/common");
const event_1 = require("../../schema/validators/event");
exports.IconsProps = {
    additionalProperties: false,
    required: ['size', 'items'],
    properties: Object.assign(Object.assign(Object.assign({}, common_1.BlockBaseProps), common_1.AnimatableProps), { title: {
            type: 'string',
            contentType: 'text',
        }, description: {
            type: 'string',
            contentType: 'text',
        }, size: {
            type: 'string',
            enum: ['s', 'm', 'l'],
            default: 's',
        }, colSizes: common_1.containerSizesObject, items: {
            type: 'array',
            items: {
                type: 'object',
                additionalProperties: false,
                required: ['url', 'text', 'src'],
                properties: {
                    url: {
                        type: 'string',
                    },
                    text: {
                        type: 'string',
                        contentType: 'text',
                    },
                    src: {
                        type: 'string',
                    },
                },
                analyticsEvents: {
                    oneOf: [
                        Object.assign(Object.assign({}, event_1.AnalyticsEventSchema), { optionName: 'single' }),
                        {
                            type: 'array',
                            items: event_1.AnalyticsEventSchema,
                            optionName: 'list',
                        },
                    ],
                },
            },
        } }),
};
exports.IconsBlock = {
    'icons-block': exports.IconsProps,
};
