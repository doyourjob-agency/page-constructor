"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogFeedBlock = void 0;
const common_1 = require("./../../schema/validators/common");
exports.BlogFeedBlock = {
    'blog-feed-block': {
        additionalProperties: false,
        required: [],
        properties: Object.assign(Object.assign({}, common_1.BaseProps), { title: {
                type: 'string',
            }, image: {
                type: 'string',
            } }),
    },
};
