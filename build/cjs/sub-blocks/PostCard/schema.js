"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCard = void 0;
const common_1 = require("../../schema/validators/common");
exports.PostCard = {
    'post-card': {
        additionalProperties: false,
        required: [],
        properties: Object.assign(Object.assign({}, common_1.BaseProps), { url: {
                type: 'string',
            }, title: {
                type: 'string',
            }, date: {
                type: 'string',
            }, readingTime: {
                type: 'number',
            }, image: {
                type: 'string',
            }, description: {
                type: 'string',
            }, tags: {
                type: 'array',
                items: {
                    type: 'object',
                    additionalProperties: false,
                    required: ['name', 'slug'],
                    properties: {
                        name: {
                            type: 'string',
                        },
                        slug: {
                            type: 'string',
                        },
                    },
                },
            } }),
    },
};
