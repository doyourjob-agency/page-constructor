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
            }, tag: {
                type: 'string',
            } }),
    },
};
