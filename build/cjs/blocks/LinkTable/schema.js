"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkTableBlock = void 0;
const common_1 = require("./../../schema/validators/common");
exports.LinkTableBlock = {
    'link-table-block': {
        additionalProperties: false,
        required: ['items'],
        properties: Object.assign(Object.assign({}, common_1.BaseProps), { title: common_1.TitleProps, items: {
                type: 'array',
                items: {
                    type: 'array',
                    items: common_1.LinkProps,
                },
            } }),
    },
};
