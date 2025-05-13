"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PressReleasesBlock = void 0;
const common_1 = require("./../../schema/validators/common");
exports.PressReleasesBlock = {
    'press-releases-block': {
        additionalProperties: false,
        required: [],
        properties: Object.assign(Object.assign({}, common_1.BaseProps), { title: {
                type: 'string',
            } }),
    },
};
