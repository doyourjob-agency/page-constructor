"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceCardBlock = void 0;
const common_1 = require("../../schema/validators/common");
const schema_1 = require("../Content/schema");
exports.PriceCardBlock = {
    'price-card': {
        additionalProperties: false,
        required: ['title', 'price'],
        properties: Object.assign(Object.assign(Object.assign({}, common_1.BaseProps), common_1.CardBase), { theme: schema_1.ContentBase.theme, title: {
                type: 'string',
            }, price: {
                type: 'string',
            }, pricePeriod: {
                type: 'string',
            }, priceDetails: {
                type: 'string',
            }, description: {
                type: 'string',
            }, buttons: {
                type: 'array',
                items: common_1.ButtonBlock,
            }, links: {
                type: 'array',
                items: common_1.LinkProps,
            }, backgroundColor: {
                type: 'string',
            }, list: {
                type: 'array',
                items: {
                    type: 'string',
                },
            }, controlPosition: {
                type: 'string',
                enum: ['content', 'footer'],
            } }),
    },
};
