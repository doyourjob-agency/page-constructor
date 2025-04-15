"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicesBlock = void 0;
const common_1 = require("./../../schema/validators/common");
exports.ServicesBlock = {
    'services-block': {
        additionalProperties: false,
        required: [],
        properties: Object.assign(Object.assign({}, common_1.BaseProps), { title: {
                type: 'string',
            }, serviceLinkType: {
                type: 'string',
                enum: ['doc', 'price'],
            } }),
    },
};
