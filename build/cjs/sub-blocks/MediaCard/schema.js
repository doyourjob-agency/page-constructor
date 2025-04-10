"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaCardBlock = void 0;
const common_1 = require("../../schema/validators/common");
const event_1 = require("../../schema/validators/event");
exports.MediaCardBlock = {
    'media-card': {
        additionalProperties: false,
        required: [],
        properties: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, common_1.BaseProps), common_1.CardBase), common_1.MediaProps), common_1.AnimatableProps), { analyticsEvents: {
                oneOf: [
                    Object.assign(Object.assign({}, event_1.AnalyticsEventSchema), { optionName: 'single' }),
                    {
                        type: 'array',
                        items: event_1.AnalyticsEventSchema,
                        optionName: 'list',
                    },
                ],
            } }),
    },
};
