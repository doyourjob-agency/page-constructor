"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarqueeLinksBlock = exports.MarqueeLink = void 0;
const common_1 = require("../../schema/validators/common");
exports.MarqueeLink = {
    type: 'object',
    additionalProperties: false,
    required: ['src'],
    properties: {
        src: {
            type: 'string',
        },
        url: {
            type: 'string',
        },
    },
};
exports.MarqueeLinksBlock = {
    'marquee-links-block': {
        additionalProperties: false,
        required: ['items'],
        properties: Object.assign(Object.assign({}, common_1.BaseProps), { title: {
                type: 'string',
            }, description: {
                type: 'string',
            }, textAlign: {
                type: 'string',
                enum: ['left', 'right', 'center'],
            }, speed: {
                type: 'number',
            }, items: {
                type: 'array',
                items: exports.MarqueeLink,
            } }),
    },
};
