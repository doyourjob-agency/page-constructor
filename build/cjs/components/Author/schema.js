"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.author = void 0;
const common_1 = require("../../schema/validators/common");
exports.author = {
    author: {
        additionalProperties: false,
        required: ['author'],
        properties: Object.assign(Object.assign({}, common_1.BaseProps), { asides: {}, author: common_1.authorItem }),
    },
};
