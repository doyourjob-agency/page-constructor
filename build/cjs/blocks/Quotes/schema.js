"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotesBlock = void 0;
const common_1 = require("./../../schema/validators/common");
exports.QuotesBlock = {
    'quotes-block': {
        additionalProperties: false,
        required: ['items'],
        properties: Object.assign(Object.assign({}, common_1.BaseProps), { theme: {
                type: 'string',
                enum: ['light', 'dark'],
            }, background: {
                type: 'string',
            }, backgroundColor: {
                type: 'string',
            }, items: {
                type: 'array',
                items: {
                    type: 'object',
                    additionalProperties: false,
                    required: ['quote'],
                    properties: {
                        avatar: {
                            type: 'string',
                        },
                        logo: {
                            type: 'string',
                        },
                        name: {
                            type: 'string',
                        },
                        description: {
                            type: 'string',
                        },
                        quote: {
                            type: 'string',
                        },
                        style: {
                            type: 'string',
                            enum: ['normal', 'long', 'short'],
                        },
                        buttonText: {
                            type: 'string',
                        },
                        buttonUrl: {
                            type: 'string',
                        },
                    },
                },
            } }),
    },
};
