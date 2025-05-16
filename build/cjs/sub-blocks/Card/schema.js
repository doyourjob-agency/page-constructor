"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
const common_1 = require("../../schema/validators/common");
exports.Card = {
    card: {
        additionalProperties: false,
        required: ['header'],
        properties: Object.assign(Object.assign(Object.assign({}, common_1.BaseProps), common_1.CardBase), { header: {
                type: 'object',
                additionalProperties: false,
                required: ['image', 'title'],
                properties: {
                    image: {
                        type: 'string',
                    },
                    title: {
                        type: 'string',
                    },
                },
            }, text: {
                type: 'string',
            }, service: {
                type: 'object',
                additionalProperties: false,
                required: ['slug', 'name'],
                properties: {
                    slug: {
                        type: 'string',
                    },
                    name: {
                        type: 'string',
                    },
                },
            } }),
    },
};
