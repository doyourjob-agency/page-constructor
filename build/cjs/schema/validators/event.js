"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyticsEventSchema = void 0;
exports.AnalyticsEventSchema = {
    type: 'object',
    additionalProperties: { type: 'string' },
    required: ['name'],
    properties: {
        name: {
            type: 'string',
        },
        type: {
            type: 'string',
        },
        counters: {
            type: 'object',
            additionalProperties: false,
            required: [],
            properties: {
                include: {
                    type: 'array',
                    items: {
                        type: 'string',
                    },
                },
                exclude: {
                    type: 'array',
                    items: {
                        type: 'string',
                    },
                },
            },
        },
        context: {
            type: 'string',
        },
    },
};
