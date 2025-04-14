"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Divider = void 0;
const common_1 = require("../../schema/validators/common");
exports.Divider = {
    divider: {
        additionalProperties: false,
        properties: Object.assign(Object.assign({}, common_1.BaseProps), { border: {
                type: 'boolean',
            }, size: common_1.dividerEnum }),
    },
};
