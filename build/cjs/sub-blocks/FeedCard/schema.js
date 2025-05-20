"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedCard = void 0;
const common_1 = require("../../schema/validators/common");
exports.FeedCard = {
    'feed-card': {
        additionalProperties: false,
        required: [],
        properties: Object.assign(Object.assign({}, common_1.BaseProps), { url: {
                type: 'string',
            }, image: {
                type: 'string',
            }, type: {
                type: 'string',
            }, title: {
                type: 'string',
            }, description: {
                type: 'string',
            }, info: {
                type: 'string',
            }, place: {
                type: 'string',
            } }),
    },
};
