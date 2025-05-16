"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompaniesBlock = void 0;
const common_1 = require("../../schema/validators/common");
exports.CompaniesBlock = {
    'companies-block': {
        additionalProperties: false,
        required: ['title', 'images'],
        properties: Object.assign(Object.assign(Object.assign({}, common_1.BaseProps), common_1.AnimatableProps), { title: {
                type: 'string',
                contentType: 'text',
            }, description: {
                type: 'string',
                contentType: 'text',
            }, images: (0, common_1.withTheme)({
                type: 'object',
                required: ['desktop', 'tablet', 'mobile'],
                properties: {
                    desktop: {
                        type: 'string',
                    },
                    tablet: {
                        type: 'string',
                    },
                    mobile: {
                        type: 'string',
                    },
                    alt: {
                        type: 'string',
                        contentType: 'text',
                    },
                },
            }) }),
    },
};
