"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShareBlock = void 0;
const common_1 = require("../../schema/validators/common");
exports.ShareBlock = {
    'share-block': {
        additionalProperties: false,
        required: ['items'],
        properties: Object.assign(Object.assign({}, common_1.BaseProps), { title: {
                type: 'string',
            }, items: {
                type: 'array',
                items: {
                    type: 'string',
                    enum: ['telegram', 'facebook', 'twitter', 'vk', 'linkedin'],
                },
            } }),
    },
};
