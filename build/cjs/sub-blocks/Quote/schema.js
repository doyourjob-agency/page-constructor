"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Quote = void 0;
const schema_1 = require("../../components/Image/schema");
const common_1 = require("../../schema/validators/common");
exports.Quote = {
    quote: {
        additionalProperties: false,
        required: ['image', 'logo'],
        properties: Object.assign(Object.assign({}, common_1.BaseProps), { text: {
                type: 'string',
                contentType: 'text',
            }, yfmText: {
                type: 'string',
                contentType: 'text',
            }, image: (0, common_1.withTheme)(schema_1.ImageProps), logo: schema_1.ImageProps, color: {
                type: 'string',
            }, url: {
                type: 'string',
            }, urlTitle: {
                type: 'string',
            }, buttonText: {
                type: 'string',
            }, theme: common_1.ThemeProps, author: common_1.authorItem, quoteType: {
                type: 'string',
                enum: common_1.quoteTypes,
            } }),
    },
};
